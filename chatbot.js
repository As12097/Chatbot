// script.js

function sendMessage() {
    var userInput = document.getElementById('userInput').value;
    document.getElementById('userInput').value = '';

    var chatlogs = document.getElementById('chatlogs');
    var userDiv = document.createElement('div');
    userDiv.className = 'chat self';
    userDiv.innerHTML = `<div class="user-msg">${userInput}</div>`;
    chatlogs.appendChild(userDiv);

    // Simulate AI response (replace with actual AI logic)
    setTimeout(function() {
        var aiResponse = 'This is a dummy AI response.';
        var aiDiv = document.createElement('div');
        aiDiv.className = 'chat bot';
        aiDiv.innerHTML = `<div class="bot-msg">${aiResponse}</div>`;
        chatlogs.appendChild(aiDiv);
    }, 1000); // Simulate typing delay
}
