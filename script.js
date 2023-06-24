function submitForm(event) {
  event.preventDefault(); // Prevent form submission
  
  const ageInput = document.getElementById('age');
  const nameInput = document.getElementById('name');
  
  const age = parseInt(ageInput.value);
  const name = nameInput.value;
  
  if (age && name) {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (age >= 18) {
          resolve(name);
        } else {
          reject(name);
        }
      }, 4000);
    });
    
    promise
      .then((name) => {
        alert(`Welcome, ${name}. You can vote.`);
      })
      .catch((name) => {
        alert(`Oh sorry ${name}. You aren't old enough.`);
      });
      
    ageInput.value = '';
    nameInput.value = '';
  }
}

const form = document.getElementById('myForm');
form.addEventListener('submit', submitForm);