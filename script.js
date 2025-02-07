document.addEventListener('DOMContentLoaded', () => {
    const loginLink = document.getElementById('loginLink');
    const registerLink = document.getElementById('registerLink');
    const authSection = document.getElementById('authSection');
    const uploadSection = document.getElementById('uploadSection');
    const authForm = document.getElementById('authForm');
    const authButton = document.getElementById('authButton');
    const authTitle = document.getElementById('authTitle');
    const uploadForm = document.getElementById('uploadForm');
    const videoList = document.getElementById('videoList');

    let isLoginMode = true;

    loginLink.addEventListener('click', () => {
        authSection.classList.remove('hidden');
        uploadSection.classList.add('hidden');
        isLoginMode = true;
        authTitle.textContent = 'Вход';
        authButton.textContent = 'Войти';
    });

    registerLink.addEventListener('click', () => {
        authSection.classList.remove('hidden');
        uploadSection.classList.add('hidden');
        isLoginMode = false;
        authTitle.textContent = 'Регистрация';
        authButton.textContent = 'Зарегистрироваться';
    });

    authForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('authEmail').value;
        const password = document.getElementById('authPassword').value;

        if (isLoginMode) {
            // Логика входа
            console.log('Вход:', email, password);
        } else {
            // Логика регистрации
            console.log('Регистрация:', email, password);
        }

        // После успешной авторизации/регистрации
        authSection.classList.add('hidden');
        uploadSection.classList.remove('hidden');
    });

    uploadForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const videoFile = document.getElementById('videoFile').files[0];

        if (videoFile) {
            // Логика загрузки видео
            console.log('Загружаем видео:', videoFile.name);
            const videoElement = document.createElement('video');
            videoElement.src = URL.createObjectURL(videoFile);
            videoElement.controls = true;
            videoList.appendChild(videoElement);
        }
    });
});
