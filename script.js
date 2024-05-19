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

//let giphyBtn = document.getElementById("giphy-btn");

// let generateGif = () => {
//     let q = document.getElementById("search-box").value;

// //number of gifs that will be displayed at a time
//     let gifCount = 15;

// //API url for giphy display
//     let finalUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${q}&limit=${gifCount}&offset=0&rating=g&lang=en`;
//     document.querySelector(".display").innerHTML = "";

// //API call
//     fetch(finalUrl)
//     .then((resp) => resp.json())
//     .then((info) => {
//         console.log(info.data);

//         let gifsData = info.data;

//         gifsData.forEach((gif) => {
//             let container = document.createElement("div");
//             container.classList.add("container");
//             let iframe = document.createElement("img");
//             console.log(gif);

//             iframe.setAttribute("src", gif.images.downsized_medium.url);
//             //iframe.onload = () => {
//                // gifCount--;
//               //  if(gifCount == 0) {
//                     document.querySelector(".display").style.display = "grid";
//               //  }
//             //};
//             container.append(iframe);
//             document.querySelector(".display").append(container);
//         });
// });

// giphyBtn.addEventListener("click", generateGif);
// window.addEventListener("load", generateGif)};