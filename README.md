## Flipside: First Prize @ TreeHacks Best GenAI Hack

## Inspiration

The way we consume news is often one-dimensional, confined within our own echo chambers without even knowing how to find opposing viewpoints. Don't you want to know what the other side thinks?

As bot-infested and hate-speech-filled social media platforms become primary news sources, students fall victim to misinformation and hidden agendas. We must prevent the spread of extremism to our generation by providing students with a safe space to stay informed.

Our mission is not just to redefine the news experience, but to bring people together by fostering understanding and discourse between polarized groups.

## What Flipside does

Flipside breaks through echo chambers and creates a safe space for students to discover the world through multiple lenses.

Glide through bite-sized news stories in a sleek interface. Start with an AI-generated, unbiased article, then swipe right to explore contrasting viewpoints sourced from real people on online forums, Twitter posts and YouTube comment sections. If the story captures your imagination, enter the 'Rabbithole' and deepen your understanding through a guided conversation with our purpose-built AI agent that provides personalized and safe answers.

## Key Features

**1. Bite-sized News:** Swipe up and down to scroll through story summaries, swipe left/right to dig deeper into a story that catches your eye. Kinda like Tinder 👀

**2. Explore Narratives:** Read thoughts, reactions and opinions on any story sourced from Reddit, Twitter and YouTube. A place for every perspective.

**3. Enter The Rabbithole:** Ever been down a Wikipedia rabbit hole? Yeah, it's pretty addicting. Our rabbit hole features an AI-generated wiki fine-tuned on the topic with a trove of real-time information on the news story. You can also chat with a personalized AI agent to learn more.

**4. Subscribe to Stories, not Sources:** Keep yourself out of the echo chamber by following news stories instead of sources. As soon as there's an update to your favorite news story, we'll send you a notification.

## How we built it

**1. Automatic Data Curation: Our Mailman Agent**
This agent is the crux of our app. It’s tasked to periodically fetch latest news to keep our app on top of the headlines while also notifying users if they might be interested in the update. Our Fetch AI agent uses time and geolocation to fetch the top headlines from the NewsAPI and process it through our extensive Together.ai GenAI content generation pipeline and publish it on our app. During this process, it uses llama_index from InterSystems IRIS to generate keywords through a RAG model, fed into Twitter Search API and webscrapers to extract relevant discussions. All data is automatically stored on and retrieved from Firebase Firestore.

**2. Flipside Mobile App**
We build our platform using React Native and Swift for iOS. We used complex gesture handling to enable an intuitive and addictive swipe & scroll based user experience. We set up a Flask server to communicate with the various systems deployed. On top of this, we built a beautiful UI to ensure user experience was exactly how we imagined it. 

**3. Rabbithole Mode**
This agent provides the seamless replies in the Rabbithole mode. The agent is tasked to complete a whole AI pipeline to curate the best reply semantically to the context and accurately to the query. We utilized Fetch.ai’s versatile AI agent framework in Python to retrieve requests from our React Native app containing our query and a Together AI fine-tuned model. This is further processed using llama_index integration with the IRIS container by InterSystems for a RAG model powered by our context file and query intertwined with an engineered prompt. We utilize certain criteria such as query relevance, frequency, distinctiveness and contextual relevance. These keywords are fed into NewsAPI to retrieve the most similar articles which are added as context to generate valid reliable information.

**4. Vector Search**
We utilize a semantic SQL vector search powered by InterSystems at the heart of our prediction tasks throughout the app. There were two main tasks with this foundation:
    
**1. Subscriptions**: We maintain a database of subscribed articles of each user. We take in a new article fetched by our Mailman Agent powered by Fetch.ai and generate embeddings of the fetched article and all subscribed articles using HuggingFace’s all-mpnet-base-v2. We then calculate a normalized vector dot product, sorted in decreasing order, and choose the top 5 users above a 0.75 threshold. This informs us that these users are most-likely to be interested in the new updates and we send them a notification.
    
**2. Flipside Companion**: We utilize the same process in our Chrome Extension to give a bit-sized summary of the article while providing the different narratives of the current article by choosing the top two articles from our database, ordered by a vector dot product (SQL semantic search) by InterSystems of the current article and our database.

**5. Prompt Engineering: The Magic**
