//your JS code here. If required.
// STEP 1: Select HTML elements

const form = document.getElementById("form");
const age = document.getElementById("age");
const name = document.getElementById("name");


// STEP 2: Listen for form submission

form.addEventListener("submit", (event) => {

    // Prevent the default form submission (page reload)
    event.preventDefault();

    // Get values entered by the user
    const nameValue = name.value.trim();
    const ageValue = age.value;


    // STEP 3: Validate the inputs

    // Check whether either field is empty
    if (!nameValue || !ageValue) {

        alert("Please enter valid details.");

        // Stop execution if validation fails
        return;
    }


    // STEP 4: Create a Promise

    const p1 = new Promise((resolve, reject) => {

        // Simulate an asynchronous operation with a 4-second delay
        setTimeout(() => {

            // Check whether the user is older than 18
            if (Number(ageValue) > 18) {

                // Resolve the Promise with a success message
                resolve(`Welcome, ${nameValue}. You can vote.`);

            } else {

                // Reject the Promise with a failure message
                reject(`Oh sorry ${nameValue}. You aren't old enough.`);
            }

        }, 4000);

    });


    // STEP 5: Handle Promise resolution and rejection

    p1.then((res) => {

        // Executes when the Promise is resolved
        alert(res);

    })
    .catch((err) => {

        // Executes when the Promise is rejected
        alert(err);

    });

});