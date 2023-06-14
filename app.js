
const api = 'https://api.giphy.com/v1/gifs/search?api_key=2eLtc80qA0rO0I5pBNzcelF8wEo5NPOP&q=%22cats%22';

var submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", loadContent);

async function loadContent(event) {
  event.preventDefault();

  try {
    const response = await fetch(api);
    const data = await response.json();

    // Process the response data
    console.log(data);
    console.log(data.data[0])
    // Your code to handle the data goes here
  } catch (error) {
    // Handle any errors that occur during the request
    console.error('Error:', error);
  }
}





// https://api.giphy.com/v1/gifs/search?api_key=2eLtc80qA0rO0I5pBNzcelF8wEo5NPOP&q=%22cats%22