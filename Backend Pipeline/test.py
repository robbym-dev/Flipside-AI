import requests

# Define the URL of your Flask server
url = 'http://10.128.153.153:5000/'

# Define the test JSON data
test_data = {
    "content": "cosmos"
}

# Send a POST request with the test JSON data
response = requests.post(url, json=test_data)

print(response.json)  # Print the JSON response data
