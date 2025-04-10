function openForm() {
    document.getElementById("formContainer").style.display = "block";
}

document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Form submitted!");
});

function showCard() {
    document.getElementById("myCard").style.display = "block";
}

function openCard() {
    document.getElementById('main-content').classList.add('blurred');
    document.getElementById('cardOverlay').style.display = 'flex';
}

function closeCard() {
    document.getElementById('main-content').classList.remove('blurred');
    document.getElementById('cardOverlay').style.display = 'none';
}

document.getElementById('infoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const mobile = document.getElementById('mobile').value;

    alert(`Submitted:
Name: ${name}
Age: ${age}
Gender: ${gender}
Mobile: ${mobile}`);

    closeCard();
});

function openWhatsApp() { 
    const phoneNumber = "7671812449"; 
    const message = "Hi! I want to chat with you.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}
