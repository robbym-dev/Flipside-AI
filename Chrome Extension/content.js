// console.log(document.documentElement.innerText)
var webpageContent = document.documentElement.innerText;

fetch('http://127.0.0.1:5000/receive_content', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ content: webpageContent }),
})
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(data => {
  console.log("SCRAPED:", data)
})
.catch(error => {
  console.error('There was a problem with the fetch operation:', error);
});
