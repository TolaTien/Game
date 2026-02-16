// --- DỮ LIỆU CÂU HỎI (Database giả lập) ---
const quizData = {
    programming: [
        { question: "HTML là viết tắt của gì?", answers: ["Hyper Text Markup Language", "High Tech Multi Language", "Hyper Transfer Markup Language", "Home Tool Markup Language"], correct: 0 },
        { question: "Ngôn ngữ nào dùng để style trang web?", answers: ["HTML", "Python", "CSS", "Java"], correct: 2 },
        { question: "JavaScript chạy ở đâu?", answers: ["Chỉ trên Server", "Chỉ trên trình duyệt", "Cả server và trình duyệt", "Trong database"], correct: 2 },
        { question: "DOM là viết tắt của?", answers: ["Document Object Model", "Data Object Model", "Desktop Orientation Mode", "Digital Ordinance Model"], correct: 0 },
        { question: "Biến const trong JS có đặc điểm gì?", answers: ["Có thể thay đổi giá trị", "Không thể gán lại giá trị", "Chỉ dùng trong hàm", "Là biến toàn cục"], correct: 1 }
    ],
    general: [
        { question: "Thủ đô của Việt Nam là gì?", answers: ["TP. Hồ Chí Minh", "Đà Nẵng", "Hà Nội", "Cần Thơ"], correct: 2 },
        { question: "Một năm có bao nhiêu tháng?", answers: ["10", "11", "12", "13"], correct: 2 },
        { question: "Nước sôi ở bao nhiêu độ C?", answers: ["90", "100", "110", "80"], correct: 1 }
    ],
    science: [
        { question: "Hành tinh nào gần Mặt Trời nhất?", answers: ["Sao Kim", "Sao Thủy", "Sao Hỏa", "Trái Đất"], correct: 1 },
        { question: "Công thức hóa học của nước là?", answers: ["HO", "H2O", "CO2", "O2"], correct: 1 }
    ]
};

// --- CÁC BIẾN TRẠNG THÁI ---
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let userName = "";
const MAX_HIGH_SCORES = 5; // Chỉ lưu top 5 người cao điểm nhất

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

// Âm thanh
const soundCorrect = document.getElementById('sound-correct');
const soundWrong = document.getElementById('sound-wrong');

// --- HÀM CHUYỂN MÀN HÌNH ---
function showScreen(id) {
    screens.forEach(screen => screen.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

// 1. NHẬP TÊN
function goToCategory() {
    const name = nameInput.value.trim();
    if (name) {
        userName = name;
        showScreen('category-screen');
    } else {
        alert("Vui lòng nhập tên để chơi!");
    }
}

// 2. CHỌN CHỦ ĐỀ VÀ BẮT ĐẦU
function startGame(category) {
    currentQuestions = quizData[category];
    currentQuestionIndex = 0;
    score = 0;
    showScreen('game-screen');
    loadQuestion();
    updateUI();
}

// 3. TẢI CÂU HỎI
function loadQuestion() {
    resetState();
    const currentQ = currentQuestions[currentQuestionIndex];
    questionText.innerText = currentQ.question;

    currentQ.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.innerText = answer;
        button.classList.add('btn-answer');
        button.addEventListener('click', () => selectAnswer(index, currentQ.correct));
        answersContainer.appendChild(button);
    });
}

function resetState() {
    answersContainer.innerHTML = '';
}

function updateUI() {
    scoreEl.innerText = `Điểm: ${score}`;
    countEl.innerText = `Câu: ${currentQuestionIndex + 1}/${currentQuestions.length}`;
    const percent = ((currentQuestionIndex) / currentQuestions.length) * 100;
    progressEl.style.width = `${percent}%`;
}

// 4. XỬ LÝ CHỌN ĐÁP ÁN
function selectAnswer(selectedIndex, correctIndex) {
    const buttons = answersContainer.children;
    
    // Disable click sau khi chọn
    for (let btn of buttons) {
        btn.disabled = true;
    }

    if (selectedIndex === correctIndex) {
        buttons[selectedIndex].classList.add('correct');
        score += 10;
        soundCorrect.currentTime = 0; // Reset time để phát lại ngay nếu click nhanh
        soundCorrect.play().catch(e => console.log("Cần tương tác để phát âm thanh")); 
    } else {
        buttons[selectedIndex].classList.add('wrong');
        buttons[correctIndex].classList.add('correct'); // Hiện đáp án đúng
        soundWrong.currentTime = 0;
        soundWrong.play().catch(e => console.log("Cần tương tác để phát âm thanh"));
    }

    scoreEl.innerText = `Điểm: ${score}`;
    
    // Đợi 1s rồi qua câu tiếp theo
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < currentQuestions.length) {
            loadQuestion();
            updateUI();
        } else {
            endGame();
        }
    }, 1000);
}

// 5. KẾT THÚC GAME & LƯU ĐIỂM
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
        date: new Date().toLocaleDateString() // Thêm ngày chơi nếu muốn
    };

    highScores.push(newScore);
    
    // Sắp xếp giảm dần theo điểm
    highScores.sort((a, b) => b.score - a.score);
    
    // Cắt lấy top 5
    highScores.splice(MAX_HIGH_SCORES);

    localStorage.setItem('quizHighScores', JSON.stringify(highScores));
}

function displayHighScores() {
    const highScores = JSON.parse(localStorage.getItem('quizHighScores')) || [];
    
    highScoresList.innerHTML = highScores
        .map(score => `<li><span>${score.name}</span> <b>${score.score}đ</b></li>`)
        .join('');
}