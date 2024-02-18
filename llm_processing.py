import newspaper
import requests
import time
from flask import Flask, request, jsonify  

def extract_article_content(urls):
    articleContents = []
    for url in urls:
        article = newspaper.Article(url)
        article.download()
        article.parse()
        articleContents.append(article.text)
    return articleContents

def llm_processing_unbias(urls):
    articleContents = extract_article_content(urls)

    endpoint = 'https://api.together.xyz/v1/chat/completions'
    headers = {
        "Authorization": "Bearer <API Key Here>",
    }

    article_content_str = "\n\n".join([f"Article {i+1} Content: {content}" for i, content in enumerate(articleContents)])
    
    # Function to make an API call
    def make_api_call(prompt):
        response = requests.post(endpoint, json={
            "model": "meta-llama/Llama-2-7b-chat-hf",
            "max_tokens": 2048,
            "prompt": prompt,
            "temperature": 0.7,
            "top_p": 0.7,
            "top_k": 50,
            "repetition_penalty": 1,
            "stop": ["[/INST]", "</s>"]
        }, headers=headers)
        return response.json()
    
    prompt_title = f"""Based on the following articles, generate an unbiased and informative title for a news article. The title should be engaging, providing readers with a clear understanding of the topic at first glance:
    {article_content_str}"""
    title_result = make_api_call(prompt_title)
    time.sleep(1)

    prompt_summary = f"""Based on the following articles, generate a brief and compelling summary for a news article. Designed for quick reading, this summary should allow users to quickly grasp the story's essence as they scroll through the application. It should be succinct, not exceeding a few sentences, and crafted to engage users' interest, encouraging them to delve deeper:
    {article_content_str}"""
    summary_result = make_api_call(prompt_summary)
    time.sleep(1)

    prompt_article_body = f"""Based on the following articles, generate a detailed news article by estimating the average length of the provided news content and aiming for a similar length in your article. Your article should comprehensively present the facts, figures, and viewpoints found within the provided content, maintaining a balanced and neutral perspective. Use appropriate subheadings wrapped with <h> tags:
    {article_content_str} """
    article_body_result = make_api_call(prompt_article_body)

    return {
        "Title": title_result,
        "Summary": summary_result,
        "Article Body": article_body_result
    }


def llm_processing_bias(urls):
    articleContents = extract_article_content(urls)
    endpoint = 'https://api.together.xyz/v1/chat/completions'
    headers = {
        "Authorization": "Bearer <API Key Here>",
    }

    article_content_str = "\n\n".join([f"Article {i+1} Content: {content}" for i, content in enumerate(articleContents)])

    def make_api_call(prompt):
        response = requests.post(endpoint, json={
            "model": "meta-llama/Llama-2-7b-chat-hf",
            "max_tokens": 2048,
            "prompt": prompt,
            "temperature": 0.7,
            "top_p": 0.7,
            "top_k": 50,
            "repetition_penalty": 1,
            "stop": ["[/INST]", "</s>"]
        }, headers=headers)
        return response.json()

    prompt_for_titles = f"""Generate titles representing different perspectives on the information from the provided articles. Each title should reflect a distinct bias, giving readers a clear viewpoint at first glance. The titles should be short, concise, and immediately convey the essence of the news story from the specified perspective:
    {article_content_str}"""
    titles_result = make_api_call(prompt_for_titles)
    time.sleep(1)

    prompt_for_contents = f"""Generate content for each perspective identified in the titles, presenting the information based on the provided news articles. Each piece of content should represent a distinct viewpoint, structured to reflect the biases inherent in the provided information. Aim for an average article length, ensuring each perspective is clearly delineated:
    {article_content_str}"""
    contents_result = make_api_call(prompt_for_contents)

    return {
        "Titles": titles_result,
        "Contents": contents_result
    }