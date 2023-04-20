// Variables declarations
const addContactBtn = document.getElementById('addContactBtn');
const contactForm = document.getElementById('contactForm');
const cancelBtn = document.getElementById('cancelBtn');
const searchInput = document.getElementById('searchInput');
const contactList = document.getElementById('contact-list');
const imageModal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');

// Function to display the form for adding a new contact
function showForm() {
  contactForm.style.display = 'block';
  addContactBtn.style.display = 'none';
}

// Function to hide the form for adding a new contact
function hideForm() {
  contactForm.style.display = 'none';
  addContactBtn.style.display = 'block';
}

// Function to add a new contact to the list

function addContact() {
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const emailInput = document.getElementById('email');
    const imageInput = document.getElementById('image');
  
    const name = nameInput.value;
    const phone = phoneInput.value;
    const email = emailInput.value;
    const image = imageInput.files[0];
  
    // Clear the form inputs
    nameInput.value = '';
    phoneInput.value = '';
    emailInput.value = '';
    imageInput.value = '';
  
    // Create a new contact object
    const contact = { name, phone, email, image };
  
    // Add the contact to the list
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <div class="contact">
        <img class="contact-image" src="${URL.createObjectURL(image)}">
        <div class="contact-info">
          <h2>${name}</h2>
          <p class="small-letters">${phone}</p>
          <p class="small-letters">${email}</p>
        </div>
        <div class="contact-actions">
          <button class="view-image" onclick="showImage('${URL.createObjectURL(image)}')">View Image</button>
          <button class="edit-contact" onclick="editContact(this)">Edit</button>
          <button class="delete-contact" onclick="deleteContact(this)">Delete</button>
        </div>
      </div>
    `;
    contactList.appendChild(listItem);
  
    // Hide the form
    hideForm();
  }

  function editContact(button) {
    const contact = button.closest('.contact');
    const name = contact.getElementsByTagName('h2').innerText;
    const phone = contact.getElementsByTagName('p:nth-of-type(1)').innerText;
    const email = contact.getElementsByTagName('p:nth-of-type(2)').innerText;
    const imageSrc = contact.getElementsByClassName('contact-image').src;
  
    // Fill the form inputs with the contact data
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const emailInput = document.getElementById('email');
    const imageInput = document.getElementById('image');
    nameInput.value = name;
    phoneInput.value = phone;
    emailInput.value = email;
    imageInput.src = imageSrc;
  
    // Remove the contact from the list
    contactList.removeChild(contact.closest('li'));
  
    // Show the form
    showForm();
  }
  
  function deleteContact(button) {
    const contact = button.closest('.contact');
    contactList.removeChild(contact.closest('li'));
  }

// Function to show the image in a modal
function showImage(src) {
  modalImage.src = src;
  imageModal.style.display = 'block';
}

// Event listeners
addContactBtn.addEventListener('click', showForm);
cancelBtn.addEventListener('click', hideForm);
contactForm.addEventListener('submit', addContact);
searchInput.addEventListener('keyup', () => {
  const searchText = searchInput.value.toLowerCase();
  const contacts = contactList.getElementsByClassName('contact');
  Array.from(contacts).forEach(contact => {
    const name = contact.getElementsByTagName('h2')[0].innerText.toLowerCase();
    const phone = contact.getElementsByTagName('p')[0].innerText.toLowerCase();
    const email = contact.getElementsByTagName('p')[1].innerText.toLowerCase();
    if (name.includes(searchText) || phone.includes(searchText) || email.includes(searchText)) {
      contact.style.display = 'block';
    } else {
      contact.style.display = 'none';
    }
  });
});
imageModal.addEventListener('click', () => {
  imageModal.style.display = 'none';
  modalImage.src = '';
});

  