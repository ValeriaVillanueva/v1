// script.js
function selectOption(option) {

    if (option === 'Recuerdo #1') {

        displayMemory(
            'images/recuerdo1.jpg',
            'Nuestro primer café juntos ☕'
        );

    } else if (option === 'Recuerdo #2') {

        displayMemory(
            'images/recuerdo2.jpg',
            'Nos perdimos y terminamos riendo todo el día 😂'
        );

    } else if (option === 'Recuerdo #3') {

        displayMemory(
            'images/recuerdo3.jpg',
            'Nuestro roadtrip improvisado lleno de aventuras 🚗'
        );

    }
}

function displayMemory(imgPath, text) {

    var imageContainer = document.getElementById('image-container');
    var description = document.getElementById('description');
    var options = document.getElementById('options');
    var question = document.getElementById('question');
    var backBtn = document.getElementById('backBtn');

    imageContainer.innerHTML = '';

    var img = new Image();
    img.src = imgPath;

    img.onload = function() {
        imageContainer.appendChild(img);
    };

    description.innerText = text;

    options.style.display = 'none';
    question.style.display = 'none';
    backBtn.style.display = 'block';
}



function goBack() {

    document.getElementById('image-container').innerHTML = '';
    document.getElementById('description').innerText = '';

    document.getElementById('options').style.display = 'block';
    document.getElementById('question').style.display = 'block';
    document.getElementById('backBtn').style.display = 'none';
}
