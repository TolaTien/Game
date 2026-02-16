// --- DỮ LIỆU CÂU HỎI (100 CÂU) ---
const quizData = {
    music: [
        { question: "Ai là 'Ông hoàng nhạc Pop'?", answers: ["Elvis Presley", "Michael Jackson", "Justin Bieber", "Bruno Mars"], correct: 1 },
        { question: "Blackpink có bao nhiêu thành viên?", answers: ["3", "4", "5", "6"], correct: 1 },
        { question: "'Tiến quân ca' do ai sáng tác?", answers: ["Phạm Tuyên", "Trịnh Công Sơn", "Văn Cao", "Trần Tiến"], correct: 2 },
        { question: "Nhạc cụ nào có 88 phím?", answers: ["Guitar", "Violin", "Piano", "Trống"], correct: 2 },
        { question: "Tên thật của Sơn Tùng M-TP?", answers: ["Nguyễn Thanh Tùng", "Nguyễn Sơn Tùng", "Lê Thanh Tùng", "Trần Sơn Tùng"], correct: 0 },
        { question: "Ca sĩ nào hát bài 'Hello'?", answers: ["Taylor Swift", "Adele", "Rihanna", "Katy Perry"], correct: 1 },
        { question: "Dòng nhạc Jazz bắt nguồn từ đâu?", answers: ["Anh", "Mỹ", "Pháp", "Đức"], correct: 1 },
        { question: "Nốt 'Đồ' ký hiệu là chữ cái gì?", answers: ["C", "D", "E", "F"], correct: 0 },
        { question: "Beethoven là người nước nào?", answers: ["Pháp", "Đức", "Anh", "Ý"], correct: 1 },
        { question: "BTS là nhóm nhạc nước nào?", answers: ["Nhật", "Trung", "Hàn Quốc", "Thái"], correct: 2 }
    ],
    game: [
        { question: "Mario đi cứu ai?", answers: ["Công chúa Peach", "Zelda", "Daisy", "Nấm lùn"], correct: 0 },
        { question: "Game 'Khối vuông' nổi tiếng?", answers: ["Roblox", "Minecraft", "Lego", "Tetris"], correct: 1 },
        { question: "Yasuo dùng vũ khí gì?", answers: ["Cung", "Súng", "Kiếm", "Rìu"], correct: 2 },
        { question: "Mũ cao nhất trong PUBG?", answers: ["Cấp 1", "Cấp 2", "Cấp 3", "Cấp 4"], correct: 2 },
        { question: "Hãng sản xuất PlayStation?", answers: ["Nintendo", "Microsoft", "Sony", "Sega"], correct: 2 },
        { question: "Pikachu là hệ gì?", answers: ["Lửa", "Nước", "Điện", "Cỏ"], correct: 2 },
        { question: "Tác giả Flappy Bird?", answers: ["Nguyễn Hà Đông", "Lê Minh", "Zuckerberg", "Bill Gates"], correct: 0 },
        { question: "Kẻ giả mạo trong Among Us?", answers: ["Crewmate", "Impostor", "Killer", "Ghost"], correct: 1 },
        { question: "CS:GO thuộc thể loại gì?", answers: ["MOBA", "FPS", "RPG", "RTS"], correct: 1 },
        { question: "Pac-Man có hình gì?", answers: ["Vuông", "Tròn khuyết", "Tam giác", "Sao"], correct: 1 }
    ],
    celeb: [
        { question: "Người sáng lập Tesla?", answers: ["Bill Gates", "Jeff Bezos", "Elon Musk", "Warren Buffett"], correct: 2 },
        { question: "MC Rap Việt?", answers: ["Trường Giang", "Trấn Thành", "Lại Văn Sâm", "Ngô Kiến Huy"], correct: 1 },
        { question: "Số áo của Ronaldo?", answers: ["10", "9", "7", "11"], correct: 2 },
        { question: "Tổng thống đầu tiên của Mỹ?", answers: ["Lincoln", "Washington", "Trump", "Obama"], correct: 1 },
        { question: "Tác giả Harry Potter?", answers: ["J.K. Rowling", "Stephen King", "Tolkien", "Stan Lee"], correct: 0 },
        { question: "Diễn viên đóng Iron Man?", answers: ["Chris Evans", "Tom Holland", "Robert Downey Jr.", "Chris Hemsworth"], correct: 2 },
        { question: "Người sáng lập Facebook?", answers: ["Jack Dorsey", "TikTok", "Mark Zuckerberg", "Instagram"], correct: 2 },
        { question: "Miss Grand 2021 là ai?", answers: ["Thùy Tiên", "Tiểu Vy", "Đỗ Mỹ Linh", "Khánh Vân"], correct: 0 },
        { question: "Vua bóng đá là ai?", answers: ["Messi", "Maradona", "Pele", "Zidane"], correct: 2 },
        { question: "Einstein nổi tiếng với thuyết gì?", answers: ["Tiến hóa", "Tương đối", "Hấp dẫn", "Big Bang"], correct: 1 }
    ],
    math: [
        { question: "Số Pi xấp xỉ bằng?", answers: ["3.14", "3.15", "3.12", "3.16"], correct: 0 },
        { question: "Tam giác có 3 cạnh bằng nhau?", answers: ["Cân", "Vuông", "Đều", "Tù"], correct: 2 },
        { question: "1 ngày có bao nhiêu giây?", answers: ["3600", "86400", "84600", "68400"], correct: 1 },
        { question: "Căn bậc hai của 64?", answers: ["6", "7", "8", "9"], correct: 2 },
        { question: "Tổng 3 góc trong tam giác?", answers: ["90 độ", "180 độ", "360 độ", "270 độ"], correct: 1 },
        { question: "Số nguyên tố nhỏ nhất?", answers: ["0", "1", "2", "3"], correct: 2 },
        { question: "Phép chia không xác định cho số nào?", answers: ["0", "1", "10", "-1"], correct: 0 },
        { question: "Hình vuông có mấy trục đối xứng?", answers: ["2", "3", "4", "5"], correct: 2 },
        { question: "Diện tích hình chữ nhật?", answers: ["Dài + Rộng", "Dài x Rộng", "(D+R)x2", "Cạnh x Cạnh"], correct: 1 },
        { question: "1kg bông và 1kg sắt?", answers: ["Sắt nặng hơn", "Bông nặng hơn", "Bằng nhau", "Không so sánh được"], correct: 2 }
    ],
    history: [
        { question: "Ngô Quyền thắng quân Nam Hán ở đâu?", answers: ["Sông Hồng", "Sông Bạch Đằng", "Sông Hương", "Sông Cửu Long"], correct: 1 },
        { question: "Năm đọc Tuyên ngôn Độc lập?", answers: ["1930", "1945", "1954", "1975"], correct: 1 },
        { question: "Triều đại lâu nhất VN?", answers: ["Lý", "Trần", "Hậu Lê", "Nguyễn"], correct: 2 },
        { question: "Vua cuối cùng của VN?", answers: ["Bảo Đại", "Khải Định", "Tự Đức", "Đồng Khánh"], correct: 0 },
        { question: "Thế chiến 2 kết thúc năm nào?", answers: ["1939", "1941", "1945", "1950"], correct: 2 },
        { question: "Ai dẹp loạn 12 sứ quân?", answers: ["Lê Hoàn", "Đinh Bộ Lĩnh", "Lý Công Uẩn", "Trần Hưng Đạo"], correct: 1 },
        { question: "Kim tự tháp ở đâu?", answers: ["Hy Lạp", "La Mã", "Ai Cập", "Ấn Độ"], correct: 2 },
        { question: "Tên cũ của TP.HCM?", answers: ["Gia Định", "Sài Gòn", "Chợ Lớn", "Tân Bình"], correct: 1 },
        { question: "Ngày Giải phóng miền Nam?", answers: ["30/4", "1/5", "2/9", "19/5"], correct: 0 },
        { question: "Nữ tướng đầu tiên của VN?", answers: ["Bà Triệu", "Hai Bà Trưng", "Bùi Thị Xuân", "Nguyễn Thị Định"], correct: 1 }
    ],
    food: [
        { question: "Quốc hồn quốc túy của VN?", answers: ["Bún chả", "Phở", "Bánh mì", "Nem rán"], correct: 1 },
        { question: "Sushi là của nước nào?", answers: ["Hàn Quốc", "Nhật Bản", "Trung Quốc", "Thái Lan"], correct: 1 },
        { question: "Pizza bắt nguồn từ đâu?", answers: ["Pháp", "Mỹ", "Ý", "Tây Ban Nha"], correct: 2 },
        { question: "Kim chi làm từ gì?", answers: ["Cải thảo", "Su hào", "Cà rốt", "Dưa leo"], correct: 0 },
        { question: "Trà sữa trân châu từ đâu?", answers: ["Hồng Kông", "Thái Lan", "Đài Loan", "Việt Nam"], correct: 2 },
        { question: "Gia vị đặc trưng bún bò Huế?", answers: ["Mắm tôm", "Mắm ruốc", "Nước mắm", "Mắm nêm"], correct: 1 },
        { question: "Quả gì nặng mùi nhất?", answers: ["Mít", "Sầu riêng", "Xoài", "Ổi"], correct: 1 },
        { question: "Nguyên liệu chính của socola?", answers: ["Cà phê", "Ca cao", "Vani", "Sữa"], correct: 1 },
        { question: "Cao Lầu là đặc sản ở đâu?", answers: ["Huế", "Đà Nẵng", "Hội An", "Nha Trang"], correct: 2 },
        { question: "Spaghetti là món gì?", answers: ["Mì Ý", "Mì Gõ", "Mì Quảng", "Mì Cay"], correct: 0 }
    ],
    geo: [
        { question: "Châu lục lạnh nhất?", answers: ["Âu", "Á", "Nam Cực", "Bắc Cực"], correct: 2 },
        { question: "VN có bao nhiêu tỉnh thành?", answers: ["61", "63", "64", "65"], correct: 1 },
        { question: "Nước lớn nhất thế giới?", answers: ["Mỹ", "Trung Quốc", "Nga", "Canada"], correct: 2 },
        { question: "Thủ đô Thái Lan?", answers: ["Phnom Penh", "Vientiane", "Bangkok", "Jakarta"], correct: 2 },
        { question: "Sông dài nhất chảy trong VN?", answers: ["Sông Hồng", "Sông Đà", "Sông Đồng Nai", "Sông Mê Kông"], correct: 2 },
        { question: "Đỉnh núi cao nhất thế giới?", answers: ["Fansipan", "Everest", "Phú Sĩ", "K2"], correct: 1 },
        { question: "Nước nào hình chiếc ủng?", answers: ["Anh", "Pháp", "Ý", "Đức"], correct: 2 },
        { question: "Biển Đông thuộc đại dương nào?", answers: ["Ấn Độ Dương", "Đại Tây Dương", "Thái Bình Dương", "Bắc Băng Dương"], correct: 2 },
        { question: "Sa mạc lớn nhất?", answers: ["Sahara", "Gobi", "Namib", "Kalahari"], correct: 0 },
        { question: "Thành phố ngàn hoa?", answers: ["Hà Nội", "Đà Lạt", "Sa Pa", "Tam Đảo"], correct: 1 }
    ],
    sports: [
        { question: "Môn thể thao vua?", answers: ["Bóng rổ", "Bóng chuyền", "Bóng đá", "Quần vợt"], correct: 2 },
        { question: "Vô địch World Cup 2022?", answers: ["Pháp", "Brazil", "Argentina", "Đức"], correct: 2 },
        { question: "Thủ môn được dùng bộ phận nào?", answers: ["Chân", "Đầu", "Tay", "Ngực"], correct: 2 },
        { question: "Michael Jordan chơi môn gì?", answers: ["Bơi", "Bóng rổ", "Điền kinh", "Golf"], correct: 1 },
        { question: "1 trận bóng đá bao nhiêu phút?", answers: ["60", "90", "100", "120"], correct: 1 },
        { question: "Olympic mấy năm 1 lần?", answers: ["1", "2", "3", "4"], correct: 3 },
        { question: "Môn dùng vợt và cầu?", answers: ["Tennis", "Cầu lông", "Bóng bàn", "Cầu mây"], correct: 1 },
        { question: "SEA Games là của khu vực nào?", answers: ["Châu Á", "Đông Nam Á", "Thế giới", "Châu Âu"], correct: 1 },
        { question: "Điểm tối đa 1 lần ném bóng rổ?", answers: ["1", "2", "3", "4"], correct: 2 },
        { question: "Biệt danh Quỷ đỏ?", answers: ["Chelsea", "Liverpool", "MU", "Arsenal"], correct: 2 }
    ],
    science: [
        { question: "Công thức nước?", answers: ["CO2", "H2O", "O2", "NaCl"], correct: 1 },
        { question: "Hành tinh gần Mặt Trời nhất?", answers: ["Sao Kim", "Sao Thủy", "Sao Hỏa", "Trái Đất"], correct: 1 },
        { question: "Người có bao nhiêu xương?", answers: ["206", "300", "150", "500"], correct: 0 },
        { question: "Vận tốc ánh sáng?", answers: ["300.000 km/s", "340 m/s", "1000 km/h", "Vô cực"], correct: 0 },
        { question: "Khí duy trì sự cháy?", answers: ["Nitơ", "Oxy", "Cacbonic", "Hidro"], correct: 1 },
        { question: "Loài ngủ mở mắt?", answers: ["Cá", "Chim", "Mèo", "Chó"], correct: 0 },
        { question: "Kim loại dẫn điện tốt nhất?", answers: ["Vàng", "Đồng", "Bạc", "Sắt"], correct: 2 },
        { question: "Người tìm ra lực hấp dẫn?", answers: ["Einstein", "Newton", "Edison", "Tesla"], correct: 1 },
        { question: "Máu đỏ do đâu?", answers: ["Hồng cầu", "Bạch cầu", "Tiểu cầu", "Huyết tương"], correct: 0 },
        { question: "Nước sôi bao nhiêu độ?", answers: ["90", "100", "110", "120"], correct: 1 }
    ],
    tech: [
        { question: "CPU ví như gì?", answers: ["Tim", "Mắt", "Não", "Tay"], correct: 2 },
        { question: "Hệ điều hành phổ biến nhất PC?", answers: ["MacOS", "Linux", "Windows", "Android"], correct: 2 },
        { question: "Phần mềm lướt web?", answers: ["Word", "Excel", "Chrome", "Photoshop"], correct: 2 },
        { question: "AI là viết tắt của?", answers: ["Artificial Intelligence", "Automatic Internet", "Apple Inc", "Anti Info"], correct: 0 },
        { question: "Thiết bị nhập liệu?", answers: ["Màn hình", "Loa", "Bàn phím", "Máy in"], correct: 2 },
        { question: "Mạng video ngắn phổ biến?", answers: ["Facebook", "Youtube", "TikTok", "Zalo"], correct: 2 },
        { question: "Wifi dùng sóng gì?", answers: ["Âm", "Nước", "Vô tuyến", "Thần"], correct: 2 },
        { question: "Ctrl + C là gì?", answers: ["Cắt", "Dán", "Sao chép", "Lưu"], correct: 2 },
        { question: "Virus máy tính là?", answers: ["Vi khuẩn", "Phần mềm độc hại", "Bụi", "Lỗi"], correct: 1 },
        { question: "Google thuộc công ty nào?", answers: ["Meta", "Amazon", "Alphabet", "Apple"], correct: 2 }
    ]
};

// --- CÁC BIẾN TRẠNG THÁI ---
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let userName = "";
const MAX_HIGH_SCORES = 5;

// --- DOM ELEMENTS ---
const screens = document.querySelectorAll('.screen');
const nameInput = document.getElementById('username');
const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers-container');
const scoreEl = document.getElementById('score');
const progressEl = document.getElementById('progress');
const countEl = document.getElementById('question-counter');
const finalScoreEl = document.getElementById('final-score');
const highScoresList = document.getElementById('high-scores-list');

// Popup Elements
const modal = document.getElementById('feedback-modal');
const modalContent = document.querySelector('.modal-content');
const feedbackIcon = document.getElementById('feedback-icon');
const feedbackTitle = document.getElementById('feedback-title');
const feedbackText = document.getElementById('feedback-text');

// Audio Elements
const soundCorrect = document.getElementById('sound-correct');
const soundWrong = document.getElementById('sound-wrong');
const bgMusic = document.getElementById('bg-music');

// --- HỆ THỐNG ÂM THANH ---
function playBackgroundMusic() {
    if (bgMusic) {
        bgMusic.volume = 0.2; // Nhạc nền nhỏ
        bgMusic.play().catch(e => console.log("Chặn tự phát nhạc:", e));
    }
}

function playSound(audio) {
    if (audio) {
        audio.currentTime = 0;
        audio.play().catch(e => console.log("Lỗi âm thanh hiệu ứng"));
    }
}

// --- ĐIỀU HƯỚNG MÀN HÌNH ---
function showScreen(id) {
    screens.forEach(screen => screen.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

// 1. NHẬP TÊN
function goToCategory() {
    const name = nameInput.value.trim();
    if (name) {
        userName = name;
        playBackgroundMusic(); // Bật nhạc nền
        showScreen('category-screen');
    } else {
        alert("Vui lòng nhập tên chiến binh!");
    }
}

// 2. CHỌN CHỦ ĐỀ
function startGame(category) {
    if (!quizData[category]) return;
    
    currentQuestions = quizData[category];
    currentQuestionIndex = 0;
    score = 0;
    
    showScreen('game-screen');
    loadQuestion();
    updateUI();
}

// 3. TẢI CÂU HỎI
function loadQuestion() {
    answersContainer.innerHTML = '';
    
    if (currentQuestionIndex >= currentQuestions.length) {
        endGame();
        return;
    }

    const currentQ = currentQuestions[currentQuestionIndex];
    questionText.innerText = currentQ.question;

    currentQ.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.innerText = answer;
        button.classList.add('btn-answer');
        button.onclick = () => selectAnswer(index, currentQ.correct, button);
        answersContainer.appendChild(button);
    });
}

function updateUI() {
    scoreEl.innerText = `Điểm: ${score}`;
    countEl.innerText = `Câu: ${currentQuestionIndex + 1}/${currentQuestions.length}`;
    const percent = ((currentQuestionIndex) / currentQuestions.length) * 100;
    progressEl.style.width = `${percent}%`;
}

// 4. XỬ LÝ TRẢ LỜI & POPUP
function selectAnswer(selectedIndex, correctIndex, btnClicked) {
    const buttons = answersContainer.children;
    for (let btn of buttons) btn.disabled = true;

    const correctAnsText = currentQuestions[currentQuestionIndex].answers[correctIndex];

    if (selectedIndex === correctIndex) {
        // ĐÚNG
        btnClicked.classList.add('correct');
        score += 10;
        playSound(soundCorrect);
        showFeedback(true, correctAnsText);
    } else {
        // SAI
        btnClicked.classList.add('wrong');
        if (buttons[correctIndex]) buttons[correctIndex].classList.add('correct');
        playSound(soundWrong);
        showFeedback(false, correctAnsText);
    }
    scoreEl.innerText = `Điểm: ${score}`;
}

function showFeedback(isCorrect, text) {
    modal.classList.add('active');
    modalContent.className = 'modal-content'; // Reset class

    if (isCorrect) {
        modalContent.classList.add('correct');
        feedbackIcon.innerHTML = '<i class="fas fa-check-circle"></i>';
        feedbackTitle.innerText = "Chính Xác!";
        feedbackText.innerText = "Ăn may chứ gì!";
    } else {
        modalContent.classList.add('wrong');
        feedbackIcon.innerHTML = '<i class="fas fa-times-circle"></i>';
        feedbackTitle.innerText = "Sai Rồi, Bạn quá ngu !";
        feedbackText.innerHTML = `Đáp án đúng là:<br><b>${text}</b>`;
    }
}

// Hàm này được gọi khi bấm nút trong Popup
function closeFeedback() {
    modal.classList.remove('active');
    currentQuestionIndex++;
    
    if (currentQuestionIndex < currentQuestions.length) {
        loadQuestion();
        updateUI();
    } else {
        endGame();
    }
}

// 5. KẾT THÚC GAME
function endGame() {
    showScreen('result-screen');
    finalScoreEl.innerText = score;
    saveHighScore(score);
    displayHighScores();
}

function saveHighScore(currentScore) {
    const highScores = JSON.parse(localStorage.getItem('quizHighScores')) || [];
    const newScore = {
        name: userName,
        score: currentScore,
        date: new Date().toLocaleDateString()
    };
    highScores.push(newScore);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(MAX_HIGH_SCORES);
    localStorage.setItem('quizHighScores', JSON.stringify(highScores));
}

function displayHighScores() {
    const highScores = JSON.parse(localStorage.getItem('quizHighScores')) || [];
    highScoresList.innerHTML = highScores
        .map(s => `<li><span>${s.name}</span> <b>${s.score}đ</b></li>`)
        .join('');
}