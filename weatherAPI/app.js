const express = require('express');
const path = require('path');

const app = express();

// 정적 파일들을 제공하기 위한 설정
app.use(express.static(path.join(__dirname, 'public')));

// 메인 라우팅
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server구동 중~ http://localhost:${PORT}`);
});
