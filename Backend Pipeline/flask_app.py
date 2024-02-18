from flask import Flask, jsonify, request
from intersys import search
from flask_cors import CORS
import rabbit_agent
from openai import OpenAI

app = Flask(__name__)
client = OpenAI()
CORS(app)
query = ""
context = ""
@app.route('/recieve_content', methods=['POST'])
def process_data():
    print("Data Recieved")
    data = request.json
    webpage_content = data.get("content")
    article = search(webpage_content)
    print("Data Processed")
    return jsonify(article[0][0])

@app.route('/rabbitholeagent', methods=['POST'])
def rabbit_response():
    print("Data Recieved")
    data = request.json
    global query
    query = data.get("text")
    global context
    context = data.get("context")
    rabbit_agent.rabbit.setup()
    print("Data Processed")
    return jsonify({"reply": rabbit_agent.ans})

if __name__ == '__main__':
    app.run(host='ip-address-here', port=5000, debug=True, threaded=False)
