// Variable for contacts as array
let contacts = [];

// Add function
function addContact() {
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let email = document.getElementById("email").value;
  let image = document.getElementById("image").value;
  
  let contact = { name: name, phone: phone, email: email, image: image };
  contacts.push(contact);
  
  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("email").value = "";
  document.getElementById("image").value = "";
  
  displayContacts();
}

function displayContacts() {
  let contactList = document.getElementById("contact-list");
  contactList.innerHTML = "";
  
  for (let i = 0; i < contacts.length; i++) {
    let contact = contacts[i];
    let li = document.createElement("li");
    li.className = "liTagList";

    let img = document.createElement("img");
    img.src = contact.image;
    img.className = "imageTag";

    img.addEventListener("click", function() {
      document.getElementById("image-modal").style.display = "block";
      document.getElementById("modal-image").src = this.src;
    });

    li.appendChild(img);
    let nameSpan = document.createElement("span");
    nameSpan.textContent = contact.name;
    nameSpan.className = "nameTag";
    li.appendChild(nameSpan);

    let phoneSpan = document.createElement("span");
    phoneSpan.textContent = contact.phone;
    phoneSpan.className = "phoneNumTag";
    li.appendChild(phoneSpan);

    let emailSpan = document.createElement("span");
    emailSpan.textContent = contact.email;
    emailSpan.className = "emailAddress";
    // li.appendChild(emailSpan);
    contactList.appendChild(li);
  }
}

function searchContacts() {
  let query = document.getElementById("search-input").value.toLowerCase();
  let filteredContacts = contacts.filter(function(contact) {
    return contact.name.toLowerCase().includes(query) || contact.phone.includes(query);
  });
  contacts = filteredContacts;
  displayContacts();
}

window.onclick = function(event) {
  if (event.target == document.getElementById("image-modal")) {
    document.getElementById("image-modal").style.display = "none";
  }
}

searchContacts ();