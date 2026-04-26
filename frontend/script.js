const API = "http://localhost:5000/api";
let token = "";

// Register
async function register() {
    const username = document.getElementById("regUser").value;
    const password = document.getElementById("regPass").value;

    const res = await fetch(API + "/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
    });

    const data = await res.json();
    alert(data.message);
}

// Login
async function login() {
    const username = document.getElementById("logUser").value;
    const password = document.getElementById("logPass").value;

    const res = await fetch(API + "/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
    });

    const data = await res.json();
    token = data.token;

    alert("Login successful");
}

// Simulated Blockchain Transaction
function sendTransaction() {
    const receiver = document.getElementById("receiver").value;
    const amount = document.getElementById("amount").value;

    const transaction = {
        receiver,
        amount,
        timestamp: new Date()
    };

    const hash = btoa(JSON.stringify(transaction));

    document.getElementById("output").innerText =
        "Transaction secured with hash: " + hash;
}