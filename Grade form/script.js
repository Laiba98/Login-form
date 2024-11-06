// Get the form, input field, and result paragraph
const form = document.getElementById('gradeForm');
const marksInput = document.getElementById('marks');
const result = document.getElementById('result');

// Add event listener to handle form submission
form.addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from submitting

    const marks = parseInt(marksInput.value);  // Get the value from the input field

    if (isNaN(marks) || marks < 0 || marks > 100) {
        result.textContent = "Please enter valid marks between 0 and 100!";
        result.style.color = 'red';  // Error message color
        return;
    }

    // Grade Calculation Logic
    let grade;
    if (marks >= 90) {
        grade = 'A+';
    } else if (marks >= 80) {
        grade = 'A';
    } else if (marks >= 70) {
        grade = 'B';
    } else if (marks >= 60) {
        grade = 'C';
    } else if (marks >= 50) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    // Display the result
    result.textContent = `Your grade is: ${grade}`;
    result.style.color = 'aqua';  // Set the result color to match the design
});
