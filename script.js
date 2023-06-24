document.getElementById("myForm").addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form submission

      const ageInput = document.getElementById("age");
      const nameInput = document.getElementById("name");

      if (ageInput.value.trim() === "" || nameInput.value.trim() === "") {
        alert("Please fill in all fields.");
        return;
      }

      const promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
          const age = parseInt(ageInput.value);
          const name = nameInput.value;

          if (age >= 18) {
            resolve(name);
          } else {
            reject(`Oh sorry ${name}. You aren't old enough.`);
          }
        }, 4000);
      });

      promise
        .then(function(name) {
          alert(`Welcome, ${name}. You can vote.`);
        })
        .catch(function(error) {
          alert(error);
        });

      ageInput.value = "";
      nameInput.value = "";
    });