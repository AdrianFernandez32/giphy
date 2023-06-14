var submitBtn = document.getElementById("submitBtn");
var gifs = document.getElementById("gifs");
var searchInput = document.getElementById("searchInput");

submitBtn.addEventListener("click", loadContent);

async function loadContent(event) {
  event.preventDefault();

  const apiKey = '2eLtc80qA0rO0I5pBNzcelF8wEo5NPOP';
  const query = searchInput.value;
  const api = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURIComponent(query)}`;

  try {
    const response = await fetch(api);
    const data = await response.json();

    // Process the response data
    console.log(data);
    console.log(data.data[0]);

    // Clear previous search results
    gifs.innerHTML = '';

    data.data.forEach(gif => {
      const image = document.createElement("img");
      image.src = gif.images.original.url;
      gifs.appendChild(image);
    });
  } catch (error) {
    // Handle any errors that occur during the request
    console.error('Error:', error);
  }
}






// https://api.giphy.com/v1/gifs/search?api_key=2eLtc80qA0rO0I5pBNzcelF8wEo5NPOP&q=%22cats%22