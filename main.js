function showHobbies() {
    var myElement = document.getElementById("intro");
    myElement.style="color:green";

    //following two tutorial url https://scotch.io/tutorials/how-to-use-the-javascript-fetch-api-to-get-data
    function createNode(element) {
        return document.createElement(element); // Create the type of element you pass in the parameters
      }
    
      function append(parent, el) {
        return parent.appendChild(el); // Append the second parameter(element) to the first one
      }
    
      const ul = document.getElementById('hobbies-list');
    const url = "https://run.mocky.io/v3/5f93f7cd-70f9-48fa-8c8f-bdae6d5c8915";
    fetch(url)
    .then((response) => response.json())
    .then(function(data) {
        let hobbiesList = data.hobbies;
   return hobbiesList.map(function(hobby) { 
      let li = createNode('li');
      append(ul, li);
      li.textContent = hobby;
  
    })   
    
})
  //.catch(function(error) {
    // If there is any error you will catch them here
  //});   
  }

  function deleteHobbies() {
      const myNode = document.getElementById("hobbies-list");
      myNode.innerHTML = '';
  }