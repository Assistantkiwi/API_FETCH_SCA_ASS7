let apiKey = "Df3czzOiBVrW8s1LnML7HQ49SnZnPKLg";
const displayDiv = document.getElementById("gif-div");

const displayEmoji = async () => {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=${apiKey}&limit=25`
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
