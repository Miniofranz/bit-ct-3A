document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Simple username and password validation
    if (username === "admin" && password === "admin123") {
      alert("Welcome, " + username + "!");
      document.getElementById("loginContainer").style.display = "none";
      document.getElementById("studentList").style.display = "block";
  
      // Populate student list dynamically
      const students = [
        { name: "Student 1", img: "https://via.placeholder.com/100" },
        { name: "Student 2", img: "https://via.placeholder.com/100" },
        { name: "Student 3", img: "https://via.placeholder.com/100" },
      ];
  
      const studentContainer = document.getElementById("students");
      students.forEach(student => {
        const studentDiv = document.createElement("div");
        studentDiv.className = "student";
  
        studentDiv.innerHTML = `
          <img src="${student.img}" alt="${student.name}">
          <p>${student.name}</p>
        `;
  
        studentContainer.appendChild(studentDiv);
      });
    } else {
      alert("Invalid credentials. Try again!");
    }
  });
  
