const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const port = 3000;

// Настройка Multer для загрузки файлов
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

app.use(express.static('public'));
app.use(express.json());

// Маршрут для загрузки видео
app.post('/upload', upload.single('video'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('Файл не загружен.');
    }
    res.send('Видео успешно загружено.');
});

app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});
