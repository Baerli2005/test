window.onload = function () {
  fetch('data/astronauts.json')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      output = '';
      data.results.forEach(element => {
        //create div and add it to the body
        output += `<div id="card-result" class="card text-center">
        <div class="card-name" id="name">${element.name}</div>
        <div class="card-body">
          <img id="card-body-image" src="${element.profile_image_thumbnail}"></img>
          <h4 id="card-body-bio">Description:</h4>
          <h6 id="card-body-bio">${element.bio}</h6>
          <h4 id="card-body-national">Nationality: ${element.nationality}</h4>
        </div>
        </div>`;
        document.getElementById('col').innerHTML = output
      });
    });
  


};