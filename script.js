let apiKey = "Df3czzOiBVrW8s1LnML7HQ49SnZnPKLg";
const displayDiv = document.getElementById("gif-container");

const displayGif = async () => {
  let userInput = document.getElementById("search-box").value.trim();
  document.getElementById("search-box").value = "";

  if (userInput === "") {
    return;
  }
  displayDiv.innerHTML = "";
  try {
    const response = await fetch(
      `http://api.giphy.com/v1/gifs/search?q=${userInput}&api_key=${apiKey}&limit=25`
    );
    const data = await response.json();
    data.data.map((item) => {
      const img = document.createElement("img");
      img.src = item.images.downsized_medium.url;
      img.height = item.images.downsized_medium.height;
      img.width = item.images.downsized_medium.width;
      img.alt = "gif";

      displayDiv.appendChild(img);
    });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
