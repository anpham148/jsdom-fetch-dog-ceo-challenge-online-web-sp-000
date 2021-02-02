console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", () => {
    fetchImages();

});


function fetchImages() {
    fetch('https://anapioficeandfire.com/api/books')
    .then(resp => resp.json())
    .then(json => json['message'].forEach(image => renderImages(image)))
  }

  function renderImages(image) {
     const image_container = document.querySelector('.dog-image-container')
     let img = document.createElement('img');
     img.src = image;
     image_container.appendChild(img);
  }


  