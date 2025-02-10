// Login form handler
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    if (username === "" || password === "") {
      alert("Please fill in both fields!");
      return;
    }
  
    // Simulate a successful login
    setTimeout(() => {
      document.querySelector(".login-container").style.display = "none"; // Hide login form
      document.querySelector(".post-login-container").style.display = "block"; // Show post-login section
    }, 1000); // Simulate a delay for login processing
  });
  
  // Handle button click for showing romantic message and photo upload slots
  document.getElementById("readyButton").addEventListener("click", function() {
    const romanticMessage = document.getElementById("romanticMessage");
    romanticMessage.style.display = "block";
    this.style.display = "none"; // Hide "Apakah sayang sudah siap?" button
  
    // Play the music after clicking the button
    const music = document.getElementById("music");
    music.play(); // Play the music when romantic message shows up
  
    // Auto-stop music after it ends
    music.onended = function() {
      alert("Semoga kamu suka lagu ini, sayang! 💖");
    };
  });
  
  // Enable photo uploading by adding a placeholder for each photo slot
  const photoSlots = document.querySelectorAll(".photo-slot");
  
  photoSlots.forEach(slot => {
    slot.addEventListener("click", function() {
      const input = document.createElement("input");
      input.type = "file";
      input.accept = "image/*";
      input.addEventListener("change", function(event) {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = function(e) {
            slot.style.backgroundImage = `url(${e.target.result})`;
            slot.style.backgroundSize = "cover";
            slot.style.backgroundPosition = "center";
            slot.querySelector("::after").style.display = "none"; // Hide "Upload Photo" text
          };
          reader.readAsDataURL(file);
        }
      });
      input.click();
    });
  });
  