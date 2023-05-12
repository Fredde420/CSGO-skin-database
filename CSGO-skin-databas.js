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

// function search_skin() {
//   let input = document.getElementById('search-input').value.toLowerCase();
//   let listHolder = document.querySelector('#list-holder');
//   listHolder.innerHTML = "";

//   // Filter skins based on user input
//   let filteredSkins = skins.filter(obj => 
//     obj.collection.toLowerCase().includes(input) || 
//     obj.weapon.toLowerCase().includes(input) || 
//     obj.name.toLowerCase().includes(input) || 
//     obj.grade.toLowerCase().includes(input) 
//   );

//   // Create dropdown items for filtered skins
//   filteredSkins.forEach(obj => {
//     const elem = document.createElement("li");
//     const skinContainer = document.createElement("div");
//     skinContainer.style.display = "flex"; // Set display property to flex
//     const skinInfo = document.createElement("div");
//     skinInfo.innerHTML = `${obj.collection} - ${obj.weapon} ${obj.name}`;
//     skinContainer.appendChild(skinInfo);
//     const moreInfoButton = document.createElement("button");
//     moreInfoButton.innerHTML = "More Information";
//     moreInfoButton.classList.add("more-info-button"); // Add CSS class
//     moreInfoButton.addEventListener('click', () => {
//       window.open(obj.link, "_blank");
//     });
//     skinContainer.appendChild(moreInfoButton); // Add button to container
//     elem.appendChild(skinContainer); // Add container to list item
//     elem.addEventListener('click', () => {
//       // Update search input value when a dropdown item is clicked
//       document.getElementById('search-input').value = `${obj.collection} - ${obj.weapon} ${obj.name}`;
//       listHolder.innerHTML = "";
//     });
//     listHolder.appendChild(elem);
//   });
// }

// // Close dropdown when user clicks outside of it
// document.addEventListener('click', function(event) {
//   let dropdown = document.getElementById('dropdown');
//   if (!dropdown.contains(event.target)) {
//     document.getElementById('list-holder').innerHTML = "";
//   }
// });

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
    const skinContainer = document.createElement("div");
    skinContainer.style.display = "flex"; // Set display property to flex
    const skinImg = document.createElement("img"); // Add an image element
    skinImg.src = obj.picture; // Set its source to the picture property of the skin object
    skinContainer.appendChild(skinImg); // Add image to container
    const skinInfo = document.createElement("div");
    skinInfo.innerHTML = `${obj.collection} - ${obj.weapon} ${obj.name}`;
    skinContainer.appendChild(skinInfo);
    const moreInfoButton = document.createElement("button");
    moreInfoButton.innerHTML = "More Information";
    moreInfoButton.classList.add("more-info-button"); // Add CSS class
    moreInfoButton.addEventListener('click', () => {
      window.open(obj.link, "_blank");
    });
    skinContainer.appendChild(moreInfoButton); // Add button to container
    elem.appendChild(skinContainer); // Add container to list item
    elem.addEventListener('click', () => {
      // Update search input value when a dropdown item is clicked
      document.getElementById('search-input').value = `${obj.collection} - ${obj.weapon} ${obj.name}`;
      listHolder.innerHTML = "";
    });
    listHolder.appendChild(elem);
  });
}

// Close dropdown when user clicks outside of it
document.addEventListener('click', function(event) {
  let dropdown = document.getElementById('dropdown');
  if (!dropdown.contains(event.target)) {
    document.getElementById('list-holder').innerHTML = "";
  }
});








// Update dropdown menu when user clicks on dropdown button