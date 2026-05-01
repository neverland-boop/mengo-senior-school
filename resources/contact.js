const form = document.getElementById('registration');
const messageInput = document.getElementById('message');
const count = document.getElementById('count');

messageInput.addEventListener('input', () => {
  const length = messageInput.value.length;
  count.textContent = `${length}/500`;
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Clear previous errors
  document.querySelectorAll('.error').forEach(el => el.textContent = '');
  let isValid = true;

  //Full Name Validation
  const fullName = document.getElementById('name').value.trim();
  if (fullName.length < 2) {
    document.getElementById('nameError').textContent = 'Please enter your full name.';
    isValid = false;
  }

  // Email Validation
  const email = document.getElementById('email').value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById('emailError').textContent = 'Enter a valid email address.';
    isValid = false;
  }

  // Phone Validation (Basic check for 10+ digits)
  const phone = document.getElementById('phone').value.trim();
  if (phone.length < 10) {
    document.getElementById('phoneError').textContent = 'Enter a valid phone number.';
    isValid = false;
  }

  //  Message Validation
  if (messageInput.value.trim().length === 0) {
    document.getElementById('messageError').textContent = 'Message cannot be empty.';
    isValid = false;
  }

  // Final Action
  if (isValid) {
    alert('We will respond shortly to the attached email');
    form.reset();
    count.textContent = '0/500';
  }
});