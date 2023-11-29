
// Search Box cities: 
// List of cities where services are available
       const availableCities = ['New Delhi', 'Mumbai', 'Jalandhar', 'Ludhiana', 'Lukhnow', 'Chandigarh', 'Patna', 'Indore', 'Chennai', 'Bangaluru', 'Goa', 'Hydrabad', 'Pune', 'Gurugram', 'Jaipur'];

       // Function to check if the entered city is in the list
       function checkCity() {
           const cityInput = document.getElementById('cityInput').value;
           const isInList = availableCities.includes(cityInput);

           if (isInList) {
               alert('Yes! Our services are available in ' + cityInput);
           } else {
               alert('Sorry, we are expanding and will reach to your city: " ' + cityInput + ' " soon');
           }
       }


// **********************************************************************************************************

// Contact Us form
  // Function to open the pop-up form
        function openForm() {
            document.getElementById("overlay").style.display = "flex";
        }

        // Function to close the pop-up form
        function closeForm() {
            document.getElementById("overlay").style.display = "none";
        }

        // Event listener for the Contact Us button
        document.getElementById("contactUsBtn").addEventListener("click", openForm);


// *********************************************************************************************************

// Enroll Now form: 
 // Array to store enrolled users
 const enrolledUsers1 = [];

 // Function to open the pop-up form
 function openForm1() {
     document.getElementById("overlay1").style.display = "flex";
 }

 // Function to close the pop-up form
 function closeForm1() {
     document.getElementById("overlay1").style.display = "none";
 }

 // Function to submit the form and store user details
 function submitForm1() {
     // Get form values
     const name = document.getElementById("name1").value;
     const email = document.getElementById("email1").value;
     const address = document.getElementById("address1").value;
     const trainingType = document.getElementById("trainingType1").value;

     // Create a JavaScript object with user details
     const user = {
         name: name,
         email: email,
         address: address,
         trainingType: trainingType
     };

     // Append the user object to the array
     enrolledUsers1.push(user);

     // Log the array for demonstration (you can send it to a server, etc.)
     console.log(enrolledUsers1);
     alert('Enrollment form submitted!');

     // Close the form
     closeForm1();
 }

 // Event listener for the Enroll Now button
 document.getElementById("enrollNowBtn1").addEventListener("click", openForm1);
 document.getElementById("enrollNowBtn2").addEventListener("click", openForm1);


// ***********************************************************************************************************

// Function to handle scroll to section
    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // Event listeners for dropdown items
    document.getElementById('navbarDropdown').addEventListener('click', function (event) {
        event.preventDefault(); // Prevents the default action of the dropdown link
    });

    document.getElementById('section1').addEventListener('click', function () {
        scrollToSection('section1');
    });

    document.getElementById('section2').addEventListener('click', function () {
        scrollToSection('section2');
    });

    document.getElementById('section3').addEventListener('click', function () {
        scrollToSection('section3');
    });



