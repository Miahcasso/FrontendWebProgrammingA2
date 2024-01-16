/*!
* Start Bootstrap - Modern Business v5.0.7 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/

let users = [];

function registerUser() {
    var newUsername = document.getElementById("username").value;
    var newPassword = document.getElementById("password").value;

    users.push({
        username: newUsername,
        password: newPassword,
    });

    // To save users in session storage
    sessionStorage.setItem('users', JSON.stringify(users));
}

function authenticateLogin() {
    // To retrieve users from session storage
    const storedUsers = JSON.parse(sessionStorage.getItem('users')) || [];
    users = storedUsers;

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Admin default account
    if (username === "admin" && password === "test@123")
    {
        window.location.href = "faq.html";
    }
    else if (checkUser(username, password))
    {
        window.location.href = "faq.html";
    }
    else
    {
        document.getElementById("loginError").innerHTML = "Invalid username or password.";
    }

    return false;
}

function checkUser(username, password) {
    for(let i = 0; i < users.length; i++)
    {
        if (users[i].username === username && users[i].password === password)
        {
            return true;
        }
    }
    return false;
}