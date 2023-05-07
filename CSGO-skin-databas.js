// function search_skin() {
//     let input = document.getElementById('search-input').value
//     input = input.toLowerCase();
//     let listHolder = document.querySelector('#list-holder');
//     listHolder.innerHTML = ""
  
//     for (i = 0; i < skins.length; i++) {
//       let obj = skins[i];
  
//       if (obj.collection.toLowerCase().includes(input) || obj.weapon.toLowerCase().includes(input) || obj.name.toLowerCase().includes(input) || obj.grade.toLowerCase().includes(input)) {
//         const elem = document.createElement("li")
//         elem.innerHTML = `${obj.collection} - ${obj.weapon} ${obj.name}`
//         listHolder.appendChild(elem)
//       }
//     }
//   }

// console.log(skins)

function search_skin() {
  let input = document.getElementById('search-input').value.toLowerCase();
  let listHolder = document.querySelector('#list-holder');
  listHolder.innerHTML = "";

  // Filter skins based on user input
  let filteredSkins = skins.filter(obj => 
    obj.collection.toLowerCase().includes(input) || 
    obj.weapon.toLowerCase().includes(input) || 
    obj.name.toLowerCase().includes(input) || 
    obj.grade.toLowerCase().includes(input)
  );

  // Create dropdown items for filtered skins
  filteredSkins.forEach(obj => {
    const elem = document.createElement("li");
    elem.innerHTML = `${obj.collection} - ${obj.weapon} ${obj.name}`;
    elem.addEventListener('click', () => {
      // Update search input value when a dropdown item is clicked
      document.getElementById('search-input').value = `${obj.collection} - ${obj.weapon} ${obj.name}`;
      listHolder.innerHTML = "";
    });
    listHolder.appendChild(elem);
  });
  
  // Show dropdown only if there are filtered skins
  if (filteredSkins.length > 0) {
    listHolder.style.display = "block";
  } else {
    listHolder.style.display = "none";
  }
}

// Close dropdown when user clicks outside of it
document.addEventListener('click', function(event) {
  let dropdown = document.getElementById('dropdown');
  if (!dropdown.contains(event.target)) {
    document.getElementById('list-holder').innerHTML = "";
  }
});
