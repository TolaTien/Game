// --- DỮ LIỆU CÂU HỎI ---
const quizData = {
    // 1. ÂM NHẠC
    music: [
        { question: "Ai được mệnh danh là 'Ông hoàng nhạc Pop'?", answers: ["Elvis Presley", "Michael Jackson", "Justin Bieber", "Bruno Mars"], correct: 1 },
        { question: "Nhóm nhạc Blackpink có bao nhiêu thành viên?", answers: ["3", "4", "5", "6"], correct: 1 },
        { question: "Bài hát 'Tiến quân ca' do ai sáng tác?", answers: ["Phạm Tuyên", "Trịnh Công Sơn", "Văn Cao", "Trần Tiến"], correct: 2 },
        { question: "Nhạc cụ nào có 88 phím?", answers: ["Guitar", "Violin", "Piano", "Trống"], correct: 2 },
        { question: "Sơn Tùng M-TP tên thật là gì?", answers: ["Nguyễn Thanh Tùng", "Nguyễn Sơn Tùng", "Lê Thanh Tùng", "Trần Sơn Tùng"], correct: 0 },
        { question: "Ca sĩ nào hát bài 'Hello'?", answers: ["Taylor Swift", "Adele", "Rihanna", "Katy Perry"], correct: 1 },
        { question: "Dòng nhạc nào bắt nguồn từ Mỹ?", answers: ["K-pop", "Jazz", "Bolero", "Cải lương"], correct: 1 },
        { question: "Nốt nhạc 'Đồ' ký hiệu là chữ cái gì?", answers: ["C", "D", "E", "F"], correct: 0 },
        { question: "Beethoven là nhà soạn nhạc người nước nào?", answers: ["Pháp", "Đức", "Anh", "Ý"], correct: 1 },
        { question: "BTS là nhóm nhạc của nước nào?", answers: ["Nhật Bản", "Trung Quốc", "Hàn Quốc", "Thái Lan"], correct: 2 }
    ],
    // 2. GAME
    game: [
        { question: "Nhân vật chính trong Mario đi cứu ai?", answers: ["Công chúa Peach", "Công chúa Zelda", "Công chúa Daisy", "Nấm lùn"], correct: 0 },
        { question: "Game nào được gọi là 'Game của những khối vuông'?", answers: ["Roblox", "Minecraft", "Lego", "Tetris"], correct: 1 },
        { question: "Tướng Yasuo trong LOL sử dụng vũ khí gì?", answers: ["Cung", "Súng", "Kiếm", "Rìu"], correct: 2 },
        { question: "Trong PUBG, mũ cấp mấy là cao nhất?", answers: ["Cấp 1", "Cấp 2", "Cấp 3", "Cấp 4"], correct: 2 },
        { question: "Hãng nào sản xuất máy chơi game PlayStation?", answers: ["Nintendo", "Microsoft", "Sony", "Sega"], correct: 2 },
        { question: "Pikachu là Pokemon hệ gì?", answers: ["Lửa", "Nước", "Điện", "Cỏ"], correct: 2 },
        { question: "Game 'Flappy Bird' do ai tạo ra?", answers: ["Nguyễn Hà Đông", "Lê Minh", "Mark Zuckerberg", "Bill Gates"], correct: 0 },
        { question: "Trong 'Among Us', kẻ giả mạo gọi là gì?", answers: ["Crewmate", "Impostor", "Killer", "Ghost"], correct: 1 },
        { question: "Game bắn súng CS:GO thuộc thể loại gì?", answers: ["MOBA", "FPS", "RPG", "RTS"], correct: 1 },
        { question: "Biểu tượng của game Pac-Man hình gì?", answers: ["Hình vuông", "Hình tròn khuyết", "Hình tam giác", "Hình ngôi sao"], correct: 1 }
    ],
    // 3. NGƯỜI NỔI TIẾNG
    celeb: [
        { question: "Ai là người giàu nhất thế giới (từng sáng lập Tesla)?", answers: ["Bill Gates", "Jeff Bezos", "Elon Musk", "Warren Buffett"], correct: 2 },
        { question: "MC nào dẫn chương trình 'Rap Việt'?", answers: ["Trường Giang", "Trấn Thành", "Lại Văn Sâm", "Ngô Kiến Huy"], correct: 1 },
        { question: "Cầu thủ Ronaldo mang áo số mấy?", answers: ["10", "9", "7", "11"], correct: 2 },
        { question: "Tổng thống đầu tiên của Mỹ là ai?", answers: ["Lincoln", "Washington", "Trump", "Obama"], correct: 1 },
        { question: "Ai là tác giả bộ truyện Harry Potter?", answers: ["J.K. Rowling", "Stephen King", "Tolkien", "Stan Lee"], correct: 0 },
        { question: "Diễn viên đóng vai 'Iron Man' là ai?", answers: ["Chris Evans", "Tom Holland", "Robert Downey Jr.", "Chris Hemsworth"], correct: 2 },
        { question: "Mark Zuckerberg là người sáng lập mạng xã hội nào?", answers: ["Twitter", "TikTok", "Facebook", "Instagram"], correct: 2 },
        { question: "Hoa hậu Hoà bình Quốc tế 2021 là ai?", answers: ["Thùy Tiên", "Tiểu Vy", "Đỗ Mỹ Linh", "Khánh Vân"], correct: 0 },
        { question: "Ai được gọi là 'Vua bóng đá'?", answers: ["Messi", "Maradona", "Pele", "Zidane"], correct: 2 },
        { question: "Albert Einstein nổi tiếng với thuyết gì?", answers: ["Thuyết tiến hóa", "Thuyết tương đối", "Thuyết vạn vật hấp dẫn", "Thuyết Big Bang"], correct: 1 }
    ],
    // 4. TOÁN HỌC
    math: [
        { question: "Số Pi xấp xỉ bằng bao nhiêu?", answers: ["3.14", "3.15", "3.12", "3.16"], correct: 0 },
        { question: "Tam giác có 3 cạnh bằng nhau gọi là gì?", answers: ["Tam giác cân", "Tam giác vuông", "Tam giác đều", "Tam giác tù"], correct: 2 },
        { question: "1 ngày có bao nhiêu giây?", answers: ["3600", "86400", "84600", "68400"], correct: 1 },
        { question: "Căn bậc hai của 64 là?", answers: ["6", "7", "8", "9"], correct: 2 },
        { question: "Tổng 3 góc trong một tam giác bằng bao nhiêu?", answers: ["90 độ", "180 độ", "360 độ", "270 độ"], correct: 1 },
        { question: "Số nguyên tố nhỏ nhất là số mấy?", answers: ["0", "1", "2", "3"], correct: 2 },
        { question: "Phép chia cho số nào là không xác định?", answers: ["0", "1", "10", "-1"], correct: 0 },
        { question: "Hình vuông có bao nhiêu trục đối xứng?", answers: ["2", "3", "4", "5"], correct: 2 },
        { question: "Công thức tính diện tích hình chữ nhật?", answers: ["Dài + Rộng", "Dài x Rộng", "(Dài + Rộng) x 2", "Cạnh x Cạnh"], correct: 1 },
        { question: "1 kg bông và 1 kg sắt, cái nào nặng hơn?", answers: ["Sắt", "Bông", "Bằng nhau", "Không so sánh được"], correct: 2 }
    ],
    // 5. LỊCH SỬ
    history: [
        { question: "Ngô Quyền đánh thắng quân Nam Hán trên sông nào?", answers: ["Sông Hồng", "Sông Bạch Đằng", "Sông Như Nguyệt", "Sông Hương"], correct: 1 },
        { question: "Bác Hồ đọc Tuyên ngôn Độc lập vào năm nào?", answers: ["1930", "1945", "1954", "1975"], correct: 1 },
        { question: "Triều đại nào tồn tại lâu nhất trong lịch sử Việt Nam?", answers: ["Nhà Lý", "Nhà Trần", "Nhà Hậu Lê", "Nhà Nguyễn"], correct: 2 },
        { question: "Vị vua cuối cùng của Việt Nam là ai?", answers: ["Bảo Đại", "Khải Định", "Tự Đức", "Đồng Khánh"], correct: 0 },
        { question: "Chiến tranh thế giới thứ 2 kết thúc năm nào?", answers: ["1939", "1941", "1945", "1950"], correct: 2 },
        { question: "Ai là người dẹp loạn 12 sứ quân?", answers: ["Lê Hoàn", "Đinh Bộ Lĩnh", "Lý Công Uẩn", "Trần Hưng Đạo"], correct: 1 },
        { question: "Kim tự tháp là công trình của nước nào?", answers: ["Hy Lạp", "La Mã", "Ai Cập", "Ấn Độ"], correct: 2 },
        { question: "Thành phố Hồ Chí Minh trước đây tên là gì?", answers: ["Gia Định", "Sài Gòn", "Chợ Lớn", "Tân Bình"], correct: 1 },
        { question: "Ngày Giải phóng miền Nam là ngày nào?", answers: ["30/4", "1/5", "2/9", "19/5"], correct: 0 },
        { question: "Nữ tướng đầu tiên của Việt Nam là ai?", answers: ["Bà Triệu", "Hai Bà Trưng", "Bùi Thị Xuân", "Nguyễn Thị Định"], correct: 1 }
    ],
    // 6. ẨM THỰC
    food: [
        { question: "Món ăn nào được xem là 'Quốc hồn quốc túy' của Việt Nam?", answers: ["Bún chả", "Phở", "Bánh mì", "Nem rán"], correct: 1 },
        { question: "Sushi là món ăn nổi tiếng của nước nào?", answers: ["Hàn Quốc", "Nhật Bản", "Trung Quốc", "Thái Lan"], correct: 1 },
        { question: "Pizza có nguồn gốc từ đâu?", answers: ["Pháp", "Mỹ", "Ý", "Tây Ban Nha"], correct: 2 },
        { question: "Kim chi làm từ loại rau củ nào là chính?", answers: ["Cải thảo", "Su hào", "Cà rốt", "Dưa leo"], correct: 0 },
        { question: "Trà sữa trân châu bắt nguồn từ đâu?", answers: ["Hồng Kông", "Thái Lan", "Đài Loan", "Việt Nam"], correct: 2 },
        { question: "Bún bò Huế có vị đặc trưng của gia vị nào?", answers: ["Mắm tôm", "Mắm ruốc", "Nước mắm", "Mắm nêm"], correct: 1 },
        { question: "Loại quả nào nặng mùi nhất thế giới?", answers: ["Mít", "Sầu riêng", "Xoài", "Ổi"], correct: 1 },
        { question: "Nguyên liệu chính làm socola là gì?", answers: ["Cà phê", "Ca cao", "Vani", "Sữa"], correct: 1 },
        { question: "Món 'Cao Lầu' là đặc sản ở đâu?", answers: ["Huế", "Đà Nẵng", "Hội An", "Nha Trang"], correct: 2 },
        { question: "Spaghetti là tên gọi khác của món gì?", answers: ["Mì Ý", "Mì Gõ", "Mì Quảng", "Mì Cay"], correct: 0 }
    ],
    // 7. ĐỊA LÝ
    geo: [
        { question: "Châu lục nào lạnh nhất thế giới?", answers: ["Châu Âu", "Châu Á", "Nam Cực", "Bắc Cực"], correct: 2 },
        { question: "Việt Nam có bao nhiêu tỉnh thành?", answers: ["61", "63", "64", "65"], correct: 1 },
        { question: "Nước nào có diện tích lớn nhất thế giới?", answers: ["Mỹ", "Trung Quốc", "Nga", "Canada"], correct: 2 },
        { question: "Thủ đô của Thái Lan là gì?", answers: ["Phnom Penh", "Vientiane", "Bangkok", "Jakarta"], correct: 2 },
        { question: "Sông nào dài nhất Việt Nam (chảy trong lãnh thổ)?", answers: ["Sông Hồng", "Sông Đà", "Sông Đồng Nai", "Sông Mê Kông"], correct: 2 },
        { question: "Đỉnh núi cao nhất thế giới là?", answers: ["Fansipan", "Everest", "Phú Sĩ", "K2"], correct: 1 },
        { question: "Đất nước nào có hình chiếc ủng?", answers: ["Anh", "Pháp", "Ý", "Đức"], correct: 2 },
        { question: "Biển Đông thuộc đại dương nào?", answers: ["Ấn Độ Dương", "Đại Tây Dương", "Thái Bình Dương", "Bắc Băng Dương"], correct: 2 },
        { question: "Sa mạc lớn nhất thế giới là?", answers: ["Sahara", "Gobi", "Namib", "Kalahari"], correct: 0 },
        { question: "Thành phố nào được mệnh danh là 'Thành phố ngàn hoa'?", answers: ["Hà Nội", "Đà Lạt", "Sa Pa", "Tam Đảo"], correct: 1 }
    ],
    // 8. THỂ THAO
    sports: [
        { question: "Môn thể thao nào được gọi là 'Môn thể thao vua'?", answers: ["Bóng rổ", "Bóng chuyền", "Bóng đá", "Quần vợt"], correct: 2 },
        { question: "Đội tuyển nào vô địch World Cup 2022?", answers: ["Pháp", "Brazil", "Argentina", "Đức"], correct: 2 },
        { question: "Trong bóng đá, thủ môn là người duy nhất được dùng gì?", answers: ["Chân", "Đầu", "Tay", "Ngực"], correct: 2 },
        { question: "Michael Jordan nổi tiếng ở môn nào?", answers: ["Bơi lội", "Bóng rổ", "Điền kinh", "Golf"], correct: 1 },
        { question: "Một trận bóng đá chính thức có bao nhiêu phút?", answers: ["60", "90", "100", "120"], correct: 1 },
        { question: "Thế vận hội Olympic diễn ra mấy năm một lần?", answers: ["1 năm", "2 năm", "3 năm", "4 năm"], correct: 3 },
        { question: "Môn thể thao nào sử dụng vợt và quả cầu lông?", answers: ["Tennis", "Cầu lông", "Bóng bàn", "Cầu mây"], correct: 1 },
        { question: "SEA Games là đại hội thể thao khu vực nào?", answers: ["Châu Á", "Đông Nam Á", "Thế giới", "Châu Âu"], correct: 1 },
        { question: "Trong bóng rổ, ném vào rổ được tính mấy điểm tối đa?", answers: ["1", "2", "3", "4"], correct: 2 },
        { question: "Đội bóng nào có biệt danh là 'Quỷ đỏ'?", answers: ["Chelsea", "Liverpool", "Manchester United", "Arsenal"], correct: 2 }
    ],
    // 9. KHOA HỌC
    science: [
        { question: "Công thức hóa học của nước là?", answers: ["CO2", "H2O", "O2", "NaCl"], correct: 1 },
        { question: "Hành tinh nào gần Mặt Trời nhất?", answers: ["Sao Kim", "Sao Thủy", "Sao Hỏa", "Trái Đất"], correct: 1 },
        { question: "Cơ thể người có bao nhiêu chiếc xương?", answers: ["206", "300", "150", "500"], correct: 0 },
        { question: "Vận tốc ánh sáng là bao nhiêu?", answers: ["300.000 km/s", "340 m/s", "1000 km/h", "Vô cực"], correct: 0 },
        { question: "Khí nào cần thiết cho sự cháy?", answers: ["Nitơ", "Oxy", "Cacbonic", "Hidro"], correct: 1 },
        { question: "Loài vật nào ngủ mở mắt?", answers: ["Cá", "Chim", "Mèo", "Chó"], correct: 0 },
        { question: "Kim loại nào dẫn điện tốt nhất?", answers: ["Vàng", "Đồng", "Bạc", "Sắt"], correct: 2 },
        { question: "Ai là người tìm ra định luật vạn vật hấp dẫn?", answers: ["Einstein", "Newton", "Edison", "Tesla"], correct: 1 },
        { question: "Máu người màu đỏ là do chất gì?", answers: ["Hồng cầu", "Bạch cầu", "Tiểu cầu", "Huyết tương"], correct: 0 },
        { question: "Nhiệt độ sôi của nước là bao nhiêu độ C?", answers: ["90", "100", "110", "120"], correct: 1 }
    ],
    // 10. CÔNG NGHỆ
    tech: [
        { question: "CPU được ví như bộ phận nào của con người?", answers: ["Tim", "Mắt", "Não", "Tay"], correct: 2 },
        { question: "Hệ điều hành phổ biến nhất trên PC là?", answers: ["MacOS", "Linux", "Windows", "Android"], correct: 2 },
        { question: "Phần mềm nào dùng để lướt web?", answers: ["Word", "Excel", "Chrome", "Photoshop"], correct: 2 },
        { question: "AI là viết tắt của từ gì?", answers: ["Artificial Intelligence", "Automatic Internet", "Apple Inc", "Anti Information"], correct: 0 },
        { question: "Thiết bị nào dùng để nhập liệu vào máy tính?", answers: ["Màn hình", "Loa", "Bàn phím", "Máy in"], correct: 2 },
        { question: "Mạng xã hội chia sẻ video ngắn phổ biến nhất?", answers: ["Facebook", "Youtube", "TikTok", "Zalo"], correct: 2 },
        { question: "Wifi dùng sóng gì để truyền tin?", answers: ["Sóng âm", "Sóng nước", "Sóng vô tuyến", "Sóng thần"], correct: 2 },
        { question: "Phím tắt Ctrl + C dùng để làm gì?", answers: ["Cắt", "Dán", "Sao chép", "Lưu"], correct: 2 },
        { question: "Virus máy tính là gì?", answers: ["Vi khuẩn", "Phần mềm độc hại", "Bụi bẩn", "Lỗi phần cứng"], correct: 1 },
        { question: "Google thuộc công ty mẹ nào?", answers: ["Meta", "Amazon", "Alphabet", "Apple"], correct: 2 }
    ]
};


// --- CẤU HÌNH YOUTUBE API ---
let player;
// ID video nhạc bạn muốn phát (Ví dụ: Lofi Girl - jfKfPfyJRdk)
// Bạn có thể thay bằng ID video khác từ link YouTube (phần sau v=...)
const YOUTUBE_VIDEO_ID = "wijb8hdI6-Q"; 

// 1. Tải API YouTube bất đồng bộ
const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 2. Hàm này sẽ tự chạy khi API tải xong
function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-player', {
        height: '0',
        width: '0',
        videoId: YOUTUBE_VIDEO_ID,
        playerVars: {
            'autoplay': 0,      // Không tự chạy ngay (để tránh lỗi trình duyệt chặn)
            'controls': 0,      // Ẩn điều khiển
            'loop': 1,          // Lặp lại
            'playlist': YOUTUBE_VIDEO_ID // Cần thiết để loop hoạt động
        },
        events: {
            'onReady': onPlayerReady
        }
    });
}
// --- THÊM DÒNG NÀY ĐỂ ĐẢM BẢO CHẠY ĐƯỢC ---
window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;

function onPlayerReady(event) {
    // Player đã sẵn sàng, nhưng chưa phát ngay
    // Chúng ta sẽ giảm âm lượng xuống mức vừa phải (ví dụ 30%)
    event.target.setVolume(30);
}

// Hàm bật nhạc (Sẽ gọi khi bấm nút Start)
function playBackgroundMusic() {
    if (player && player.playVideo) {
        player.playVideo();
    }
}

// Hàm tắt nhạc (Nếu muốn)
function stopBackgroundMusic() {
    if (player && player.stopVideo) {
        player.stopVideo();
    }
}

// --- CÁC BIẾN TRẠNG THÁI ---
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let userName = "";
const MAX_HIGH_SCORES = 5;

// --- DOM ELEMENTS (Lấy phần tử an toàn) ---
const screens = document.querySelectorAll('.screen');
const nameInput = document.getElementById('username');
const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers-container');
const scoreEl = document.getElementById('score');
const progressEl = document.getElementById('progress');
const countEl = document.getElementById('question-counter');
const finalScoreEl = document.getElementById('final-score');
const highScoresList = document.getElementById('high-scores-list');

// Âm thanh (Có kiểm tra tồn tại để tránh lỗi)
const soundCorrect = document.getElementById('sound-correct');
const soundWrong = document.getElementById('sound-wrong');

// --- HÀM CHUYỂN MÀN HÌNH ---
function showScreen(id) {
    screens.forEach(screen => screen.classList.remove('active'));
    const screenToShow = document.getElementById(id);
    if(screenToShow) screenToShow.classList.add('active');
}

// 1. NHẬP TÊN
function goToCategory() {
    const name = nameInput.value.trim();
    if (name) {
        userName = name;
        playBackgroundMusic();
        showScreen('category-screen');
    } else {
        alert("Vui lòng nhập tên để chơi!");
    }
}

// 2. CHỌN CHỦ ĐỀ VÀ BẮT ĐẦU
function startGame(category) {
    console.log("Bắt đầu game với chủ đề:", category); // Debug
    if (!quizData[category]) {
        console.error("Không tìm thấy chủ đề này!");
        return;
    }
    
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
        // Truyền thẳng index vào hàm xử lý
        button.onclick = () => selectAnswer(index, currentQ.correct, button);
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

// 4. XỬ LÝ CHỌN ĐÁP ÁN (Đã sửa lỗi logic)
function selectAnswer(selectedIndex, correctIndex, btnClicked) {
    console.log("Đã chọn đáp án:", selectedIndex); // Debug

    const buttons = answersContainer.children;
    
    // Disable tất cả nút để không bấm nhiều lần
    for (let btn of buttons) {
        btn.disabled = true;
    }

    // Xử lý đúng/sai
    if (selectedIndex === correctIndex) {
        btnClicked.classList.add('correct');
        score += 10;
        playSound(soundCorrect);
    } else {
        btnClicked.classList.add('wrong');
        // Tìm và hiện đáp án đúng
        if(buttons[correctIndex]) buttons[correctIndex].classList.add('correct');
        playSound(soundWrong);
    }

    scoreEl.innerText = `Điểm: ${score}`;
    
    // QUAN TRỌNG: Chuyển câu hỏi sau 1 giây
    setTimeout(() => {
        currentQuestionIndex++; // Tăng chỉ số câu hỏi
        
        if (currentQuestionIndex < currentQuestions.length) {
            loadQuestion(); // Tải câu tiếp theo
            updateUI();
        } else {
            endGame(); // Hết câu hỏi
        }
    }, 1000);
}

// Hàm phát âm thanh an toàn (Không lỗi nếu thiếu file)
function playSound(audioElement) {
    if (audioElement) {
        try {
            audioElement.currentTime = 0;
            audioElement.play().catch(e => console.log("Không thể phát âm thanh (Browser chặn hoặc file lỗi)"));
        } catch (e) {
            console.log("Lỗi âm thanh:", e);
        }
    }
}

// 5. KẾT THÚC GAME & LƯU ĐIỂM
function endGame() {
    console.log("Kết thúc game");
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
    
    if (highScoresList) {
        highScoresList.innerHTML = highScores
            .map(score => `<li><span>${score.name}</span> <b>${score.score}đ</b></li>`)
            .join('');
    }
}