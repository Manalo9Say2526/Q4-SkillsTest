let attempt_counter = 0;

function authenticate() {
    let username = document.getElementById("uname").value;
    let pwd = document.getElementById("pwd").value;
    let granted = "Welcome " + username + "!";
    let denied = "Access denied. Account locked after 3 attempts!";

    if (username === "student01" && pwd === "12345678") {
        alert(granted);
        attempt_counter = 0; // reset after success
        document.getElementById("display").innerHTML = "";
        window.location.href = "notebooks.html"; // redirect
    } else {
        attempt_counter++;
        document.getElementById("display").innerHTML =
            "Incorrect username and/or password. Attempt " + attempt_counter + " of 3";

        if (attempt_counter >= 3) {
            alert(denied);
            document.getElementById("loginBTN").disabled = true; // lock button
        }
    }

    //The switch evaluates the login status by checking the status value once, comparing it to each case (granted or denied), and running the matching block of code while skipping the others.
}
