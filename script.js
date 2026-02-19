// --- DỮ LIỆU CÂU HỎI MỚI (180 CÂU - 12 CHỦ ĐỀ) ---
const quizData = {
    music: [
        { question: "Ca sĩ nào thể hiện ca khúc 'See Tình' cực hot trên TikTok?", answers: ["Hòa Minzy", "Hoàng Thùy Linh", "Bích Phương", "Min"], correct: 1 },
        { question: "Đâu là tên một bản hit của rapper Đen Vâu?", answers: ["Trốn Tìm", "Lạc Trôi", "Nơi Này Có Anh", "Bạc Phận"], correct: 0 },
        { question: "Nhóm nhạc nữ aespa thuộc công ty giải trí nào?", answers: ["YG", "HYBE", "SM", "JYP"], correct: 2 },
        { question: "Bài hát 'Shape of You' là của nam nghệ sĩ nào?", answers: ["Justin Bieber", "Ed Sheeran", "Shawn Mendes", "Charlie Puth"], correct: 1 },
        { question: "Nhạc cụ nào sau đây thuộc bộ hơi?", answers: ["Đàn Nhị", "Sáo Trúc", "Trống Đồng", "Đàn Tranh"], correct: 1 },
        { question: "Thành viên nào không thuộc nhóm Blackpink?", answers: ["Lisa", "Rose", "Jennie", "Momo"], correct: 3 },
        { question: "Giải thưởng âm nhạc danh giá nhất thế giới là?", answers: ["Oscar", "Grammy", "Emmy", "Tony"], correct: 1 },
        { question: "'Kill This Love' là MV của nhóm nhạc nào?", answers: ["Twice", "Red Velvet", "Blackpink", "ITZY"], correct: 2 },
        { question: "Ai là Quán quân Rap Việt Mùa 1?", answers: ["Dế Choắt", "G-Ducky", "Seachains", "Double2T"], correct: 0 },
        { question: "Ca khúc 'Thất tình' nổi tiếng của ca sĩ nào?", answers: ["Trịnh Đình Quang", "Châu Khải Phong", "Hồ Quang Hiếu", "Chi Dân"], correct: 0 },
        { question: "Ban nhạc Queen nổi tiếng với ca khúc nào?", answers: ["Let It Be", "Bohemian Rhapsody", "Hotel California", "Imagine"], correct: 1 },
        { question: "Chữ 'K' trong K-pop viết tắt cho từ gì?", answers: ["King", "Kingdom", "Korean", "Korea"], correct: 2 },
        { question: "Vũ điệu Moonwalk gắn liền với tên tuổi ai?", answers: ["Bruno Mars", "Usher", "Michael Jackson", "Chris Brown"], correct: 2 },
        { question: "Tác giả của bản giao hưởng số 9 (Ode to Joy) là ai?", answers: ["Mozart", "Chopin", "Bach", "Beethoven"], correct: 3 },
        { question: "Họa mi núi rừng là biệt danh của nữ ca sĩ nào?", answers: ["Siu Black", "Phương Thanh", "Thu Minh", "Hồ Ngọc Hà"], correct: 0 }
    ],
    game: [
        { question: "Trong LMHT, quái vật nào xuất hiện sau phút 20?", answers: ["Rồng Đất", "Sứ Giả Khe Nứt", "Baron Nashor", "Cua Kỳ Cục"], correct: 2 },
        { question: "Đâu là tên một loại súng ngắm trong CS:GO / CS2?", answers: ["AK-47", "M4A4", "AWP", "Desert Eagle"], correct: 2 },
        { question: "Agent nào trong Valorant có khả năng hồi sinh đồng đội?", answers: ["Sage", "Skye", "Phoenix", "Reyna"], correct: 0 },
        { question: "Thức ăn nào giúp hồi đầy máu nhanh nhất trong Minecraft?", answers: ["Bánh mì", "Táo vàng siêu cấp", "Thịt bò nướng", "Cà rốt"], correct: 1 },
        { question: "Paimon là nhân vật đồng hành trong tựa game nào?", answers: ["Honkai Impact", "Genshin Impact", "Tower of Fantasy", "Zelda"], correct: 1 },
        { question: "Đội tuyển nào vô địch CKTG LMHT năm 2023?", answers: ["T1", "JDG", "WBG", "Gen.G"], correct: 0 },
        { question: "Đâu là kỹ năng Ultimate của Yasuo?", answers: ["Bão Kiếm", "Tường Gió", "Quét Kiếm", "Trăn Trối"], correct: 3 },
        { question: "Tên hãng phát triển trò chơi GTA?", answers: ["Ubisoft", "EA", "Rockstar Games", "Activision"], correct: 2 },
        { question: "Trò chơi Candy Crush Saga thuộc thể loại gì?", answers: ["Hành động", "Xếp hình (Match-3)", "Bắn súng", "Chiến thuật"], correct: 1 },
        { question: "Vũ khí nào không có trong tựa game PUBG?", answers: ["Kar98k", "M416", "Vandal", "Pan (Chảo)"], correct: 2 },
        { question: "Dota 2 là tựa game thuộc thể loại nào?", answers: ["MOBA", "FPS", "Battle Royale", "Card Game"], correct: 0 },
        { question: "Trong game Roblox, đơn vị tiền tệ gọi là gì?", answers: ["V-Bucks", "Minecoins", "Robux", "Points"], correct: 2 },
        { question: "E-Sport là viết tắt của từ gì?", answers: ["Energy Sport", "Electric Sport", "Electronic Sports", "Epic Sport"], correct: 2 },
        { question: "Con trùm cuối (Boss) truyền thống trong Minecraft là?", answers: ["Wither", "Ender Dragon", "Warden", "Herobrine"], correct: 1 },
        { question: "Trong cờ vua, quân nào có sức mạnh lớn nhất?", answers: ["Quân Tượng", "Quân Xe", "Quân Hậu", "Quân Mã"], correct: 2 }
    ],
    celeb: [
        { question: "Streamer nào có câu nói nổi tiếng 'Hí anh em'?", answers: ["PewPew", "Độ Mixi", "Xemesis", "ViruSs"], correct: 1 },
        { question: "Tên fandom của Sơn Tùng M-TP là gì?", answers: ["Sky", "Star", "Cloud", "Sun"], correct: 0 },
        { question: "Nhóm hài FAPtv nổi bật với thành viên nào?", answers: ["Trấn Thành", "Trường Giang", "Thái Vũ", "Thu Trang"], correct: 2 },
        { question: "Kênh Youtube có nhiều lượt đăng ký nhất thế giới (Tính cá nhân)?", answers: ["PewDiePie", "MrBeast", "Dude Perfect", "Ninja"], correct: 1 },
        { question: "Lionel Messi hiện đang thi đấu cho CLB nào (2024)?", answers: ["PSG", "Barcelona", "Inter Miami", "Al Nassr"], correct: 2 },
        { question: "Tên thật của danh hài Hoài Linh là gì?", answers: ["Võ Hoài Linh", "Nguyễn Hoài Linh", "Trần Hoài Linh", "Lê Hoài Linh"], correct: 0 },
        { question: "Cầu thủ bóng đá nào được mệnh danh là 'CR7'?", answers: ["Ronaldo Nazario", "Cristiano Ronaldo", "Ronaldinho", "Carlos"], correct: 1 },
        { question: "Ai là tỷ phú đứng sau tập đoàn Vingroup?", answers: ["Trần Bá Dương", "Phạm Nhật Vượng", "Trịnh Văn Quyết", "Đặng Lê Nguyên Vũ"], correct: 1 },
        { question: "Lisa (Blackpink) mang quốc tịch nào?", answers: ["Hàn Quốc", "Mỹ", "Trung Quốc", "Thái Lan"], correct: 3 },
        { question: "Diễn viên chính trong loạt phim John Wick là ai?", answers: ["Tom Cruise", "Keanu Reeves", "Brad Pitt", "Will Smith"], correct: 1 },
        { question: "Tác giả của bộ truyện manga One Piece là ai?", answers: ["Masashi Kishimoto", "Gosho Aoyama", "Eiichiro Oda", "Akira Toriyama"], correct: 2 },
        { question: "Vợ của MC Trấn Thành là ai?", answers: ["Hari Won", "Ninh Dương Lan Ngọc", "Puka", "Thu Trang"], correct: 0 },
        { question: "Tên thật của rapper Binz là gì?", answers: ["Lê Nguyễn Trung Đan", "Nguyễn Thanh Tuấn", "Bùi Thái Bảo", "Trần Thiện Thanh"], correct: 0 },
        { question: "Người nổi tiếng nào sở hữu mạng xã hội X (Twitter)?", answers: ["Mark Zuckerberg", "Bill Gates", "Elon Musk", "Jeff Bezos"], correct: 2 },
        { question: "CEO của Apple hiện tại là ai?", answers: ["Steve Jobs", "Tim Cook", "Sundar Pichai", "Satya Nadella"], correct: 1 }
    ],
    math: [
        { question: "Kết quả của phép tính: 5 + 5 x 5 = ?", answers: ["50", "30", "25", "15"], correct: 1 },
        { question: "Số e trong toán học có giá trị xấp xỉ bao nhiêu?", answers: ["2.71", "3.14", "1.61", "1.41"], correct: 0 },
        { question: "1 triệu có bao nhiêu chữ số 0?", answers: ["5", "6", "7", "8"], correct: 1 },
        { question: "Hình hộp chữ nhật có bao nhiêu mặt?", answers: ["4", "6", "8", "12"], correct: 1 },
        { question: "Tam giác có một góc lớn hơn 90 độ gọi là gì?", answers: ["Tam giác nhọn", "Tam giác vuông", "Tam giác tù", "Tam giác đều"], correct: 2 },
        { question: "1/2 của 1/2 bằng bao nhiêu?", answers: ["1", "1/2", "1/4", "1/8"], correct: 2 },
        { question: "Đạo hàm của x^2 là gì?", answers: ["x", "2x", "x^3/3", "2"], correct: 1 },
        { question: "Số nào dưới đây là số chẵn?", answers: ["-3", "0", "7", "11"], correct: 1 },
        { question: "1 năm nhuận có bao nhiêu ngày?", answers: ["364", "365", "366", "367"], correct: 2 },
        { question: "Công thức tính diện tích hình tròn là gì?", answers: ["π * R", "π * R^2", "2 * π * R", "π * d"], correct: 1 },
        { question: "Số nguyên âm lớn nhất là số nào?", answers: ["-1", "-99", "0", "-vô cực"], correct: 0 },
        { question: "Phép nhân hai số âm sẽ ra kết quả gì?", answers: ["Số âm", "Số dương", "Số 0", "Không xác định"], correct: 1 },
        { question: "Hình thoi có 2 đường chéo vuông góc với nhau không?", answers: ["Có", "Không", "Chỉ khi là hình vuông", "Chưa chắc"], correct: 0 },
        { question: "7 giai thừa (7!) bằng bao nhiêu?", answers: ["720", "5040", "40320", "120"], correct: 1 },
        { question: "Góc bẹt có số đo bằng bao nhiêu độ?", answers: ["90", "180", "270", "360"], correct: 1 }
    ],
    history: [
        { question: "Vị vua nào gắn liền với sự tích Trả kiếm cho Rùa vàng?", answers: ["Lê Hoàn", "Lê Thánh Tông", "Lê Lợi", "Nguyễn Huệ"], correct: 2 },
        { question: "Cuộc khởi nghĩa Hai Bà Trưng nổ ra vào năm nào?", answers: ["Năm 40", "Năm 248", "Năm 938", "Năm 1427"], correct: 0 },
        { question: "Ai là tác giả của tác phẩm Bình Ngô đại cáo?", answers: ["Lý Thường Kiệt", "Trần Hưng Đạo", "Nguyễn Trãi", "Lê Quý Đôn"], correct: 2 },
        { question: "Thành Cổ Loa do ai xây dựng?", answers: ["Hùng Vương", "An Dương Vương", "Ngô Quyền", "Đinh Bộ Lĩnh"], correct: 1 },
        { question: "Tên gọi của nước ta dưới thời nhà Lý là gì?", answers: ["Vạn Xuân", "Đại Cồ Việt", "Đại Việt", "Đại Ngu"], correct: 2 },
        { question: "Chiến dịch Hồ Chí Minh diễn ra vào năm nào?", answers: ["1954", "1968", "1972", "1975"], correct: 3 },
        { question: "Tổng thống Mỹ nào đã bị ám sát tại Dallas năm 1963?", answers: ["Abraham Lincoln", "JFK (Kennedy)", "Richard Nixon", "George Washington"], correct: 1 },
        { question: "Cách mạng tháng Tám thành công năm nào?", answers: ["1930", "1945", "1954", "1975"], correct: 1 },
        { question: "Vị vua nào có nhiều vợ nhất trong lịch sử Việt Nam?", answers: ["Minh Mạng", "Gia Long", "Bảo Đại", "Tự Đức"], correct: 0 },
        { question: "Người tìm ra Châu Mỹ là ai?", answers: ["Magellan", "Vasco da Gama", "Christopher Columbus", "James Cook"], correct: 2 },
        { question: "Vạn Lý Trường Thành nằm ở quốc gia nào?", answers: ["Nhật Bản", "Mông Cổ", "Trung Quốc", "Hàn Quốc"], correct: 2 },
        { question: "Bác Hồ ra đi tìm đường cứu nước tại bến cảng nào?", answers: ["Hải Phòng", "Đà Nẵng", "Nhà Rồng", "Cam Ranh"], correct: 2 },
        { question: "Quân đội nước nào đã thả 2 quả bom nguyên tử xuống Nhật Bản?", answers: ["Anh", "Đức", "Nga", "Mỹ"], correct: 3 },
        { question: "Ai là vị Đại tướng huyền thoại của QĐND Việt Nam?", answers: ["Văn Tiến Dũng", "Hoàng Văn Thái", "Võ Nguyên Giáp", "Nguyễn Chí Thanh"], correct: 2 },
        { question: "Triều đại nào kết thúc chế độ phong kiến tại Việt Nam?", answers: ["Nhà Lê", "Nhà Tây Sơn", "Nhà Lý", "Nhà Nguyễn"], correct: 3 }
    ],
    food: [
        { question: "Món Bún đậu mắm tôm thường ăn kèm với loại rau nào?", answers: ["Rau muống", "Tía tô, kinh giới", "Rau đắng", "Xà lách"], correct: 1 },
        { question: "Cơm Tấm là món ăn đặc trưng của vùng miền nào?", answers: ["Miền Bắc", "Miền Trung", "Miền Tây", "Sài Gòn"], correct: 3 },
        { question: "Bánh mì Việt Nam thường không có nguyên liệu nào?", answers: ["Pate", "Chả lụa", "Mì Ý", "Rau mùi"], correct: 2 },
        { question: "Đặc sản Kẹo Cu-đơ là của tỉnh nào?", answers: ["Thanh Hóa", "Nghệ An", "Hà Tĩnh", "Quảng Bình"], correct: 2 },
        { question: "Sashimi thái lát mỏng thường làm từ gì?", answers: ["Thịt bò", "Hải sản sống", "Trái cây", "Rau củ"], correct: 1 },
        { question: "Quốc gia nào nổi tiếng với món Hamburger?", answers: ["Pháp", "Đức", "Mỹ", "Anh"], correct: 2 },
        { question: "Món phở truyền thống Việt Nam có mấy loại chính?", answers: ["Phở gà và Phở lợn", "Phở bò và Phở lợn", "Phở bò và Phở gà", "Phở chay và Phở cá"], correct: 2 },
        { question: "Gia vị nào tạo ra vị cay xé lưỡi cho mù tạt (Wasabi)?", answers: ["Ớt sừng", "Tiêu đen", "Rễ cây cải ngựa", "Gừng"], correct: 2 },
        { question: "Rượu Soju là đồ uống truyền thống của nước nào?", answers: ["Nhật Bản", "Hàn Quốc", "Trung Quốc", "Việt Nam"], correct: 1 },
        { question: "Bánh tráng trộn có nguồn gốc từ đâu?", answers: ["Đà Nẵng", "Tây Ninh", "Bến Tre", "Cà Mau"], correct: 1 },
        { question: "Kimbap (Cơm cuộn) của Hàn Quốc thường được cuộn bằng gì?", answers: ["Bánh tráng", "Lá sen", "Lá rong biển", "Bắp cải"], correct: 2 },
        { question: "Phô mai (Cheese) được làm từ nguyên liệu chính là gì?", answers: ["Sữa", "Đậu nành", "Lúa mạch", "Trái cây"], correct: 0 },
        { question: "Món Mì Quảng là đặc sản của tỉnh thành nào?", answers: ["Huế", "Quảng Nam", "Bình Định", "Phú Yên"], correct: 1 },
        { question: "Trái cây nào được gọi là 'Vua của các loại trái cây'?", answers: ["Măng cụt", "Sầu riêng", "Mít", "Dưa hấu"], correct: 1 },
        { question: "Matcha là loại bột làm từ gì?", answers: ["Lá trà xanh", "Hạt cà phê", "Ca cao", "Đậu đỏ"], correct: 0 }
    ],
    geo: [
        { question: "Thủ đô của nước Úc (Australia) là gì?", answers: ["Sydney", "Melbourne", "Canberra", "Brisbane"], correct: 2 },
        { question: "Đảo lớn nhất thế giới tên là gì?", answers: ["Madagascar", "New Guinea", "Greenland", "Borneo"], correct: 2 },
        { question: "Con sông nào có lưu lượng nước lớn nhất thế giới?", answers: ["Sông Nile", "Sông Amazon", "Sông Mê Kông", "Sông Hoàng Hà"], correct: 1 },
        { question: "Quốc gia nào có diện tích nhỏ nhất thế giới?", answers: ["Monaco", "Nauru", "Tuvalu", "Vatican"], correct: 3 },
        { question: "Hang Sơn Đoòng nằm ở vườn quốc gia nào?", answers: ["Cúc Phương", "Phong Nha - Kẻ Bàng", "Cát Tiên", "Ba Bể"], correct: 1 },
        { question: "Tỉnh nào ở Việt Nam có diện tích lớn nhất?", answers: ["Nghệ An", "Thanh Hóa", "Gia Lai", "Bình Phước"], correct: 0 },
        { question: "Biển Chết nằm ở khu vực nào?", answers: ["Châu Âu", "Đông Nam Á", "Trung Đông", "Bắc Mỹ"], correct: 2 },
        { question: "Đỉnh núi Fansipan nằm ở tỉnh nào?", answers: ["Hà Giang", "Lai Châu", "Lào Cai", "Yên Bái"], correct: 2 },
        { question: "Eo biển nào chia cắt Châu Á và Bắc Mỹ?", answers: ["Bering", "Malacca", "Magellan", "Gibraltar"], correct: 0 },
        { question: "Vịnh Hạ Long thuộc tỉnh nào?", answers: ["Hải Phòng", "Quảng Ninh", "Thái Bình", "Nam Định"], correct: 1 },
        { question: "Quốc gia nào được mệnh danh là Đất nước triệu voi?", answers: ["Thái Lan", "Campuchia", "Lào", "Myanmar"], correct: 2 },
        { question: "Đại dương nào có diện tích lớn nhất?", answers: ["Đại Tây Dương", "Thái Bình Dương", "Ấn Độ Dương", "Bắc Băng Dương"], correct: 1 },
        { question: "Tỉnh duy nhất của Việt Nam có 3 mặt giáp biển?", answers: ["Kiên Giang", "Cà Mau", "Khánh Hòa", "Bà Rịa - Vũng Tàu"], correct: 1 },
        { question: "Thành phố Đà Lạt nằm trên cao nguyên nào?", answers: ["Di Linh", "Lâm Viên", "Pleiku", "Mộc Châu"], correct: 1 },
        { question: "Kim tự tháp Giza nằm ở quốc gia nào?", answers: ["Mexico", "Peru", "Ai Cập", "Hy Lạp"], correct: 2 }
    ],
    sports: [
        { question: "Cầu thủ nào đã giành được nhiều Quả Bóng Vàng nhất lịch sử?", answers: ["Cristiano Ronaldo", "Pele", "Lionel Messi", "Maradona"], correct: 2 },
        { question: "Môn thể thao nào được gọi là 'Môn thể thao quý tộc'?", answers: ["Bóng đá", "Bóng rổ", "Golf", "Bóng chày"], correct: 2 },
        { question: "Giải bóng rổ nhà nghề Mỹ viết tắt là gì?", answers: ["NFL", "NHL", "NBA", "MLB"], correct: 2 },
        { question: "Usain Bolt giữ kỷ lục thế giới ở cự ly chạy bao nhiêu mét?", answers: ["100m", "200m", "400m", "Cả 100m và 200m"], correct: 3 },
        { question: "Trận đấu quần vợt (Tennis) chơi trên mặt sân đất nện nổi tiếng nhất là giải nào?", answers: ["Wimbledon", "US Open", "Roland Garros", "Australian Open"], correct: 2 },
        { question: "Đội tuyển bóng đá nam Việt Nam lần đầu vô địch AFF Cup vào năm nào?", answers: ["1998", "2008", "2018", "2022"], correct: 1 },
        { question: "Kình ngư Nguyễn Thị Ánh Viên nổi tiếng ở môn thể thao nào?", answers: ["Bơi lội", "Lặn", "Điền kinh", "Thể dục dụng cụ"], correct: 0 },
        { question: "Trong môn bóng chuyền, người mặc áo khác màu trong đội gọi là gì?", answers: ["Libero", "Chủ công", "Chuyền 2", "Phụ công"], correct: 0 },
        { question: "Mỗi đội thi đấu bóng rổ có bao nhiêu cầu thủ trên sân cùng lúc?", answers: ["4", "5", "6", "11"], correct: 1 },
        { question: "Môn võ Taekwondo có xuất xứ từ quốc gia nào?", answers: ["Nhật Bản", "Trung Quốc", "Hàn Quốc", "Thái Lan"], correct: 2 },
        { question: "Thẻ đỏ trong bóng đá có ý nghĩa gì?", answers: ["Cảnh cáo", "Phạt đền", "Đuổi khỏi sân", "Phạt góc"], correct: 2 },
        { question: "Cúp C1 Châu Âu còn được gọi là gì?", answers: ["Europa League", "Champions League", "Premier League", "World Cup"], correct: 1 },
        { question: "Môn thể thao nào sử dụng quả cầu có lông vũ?", answers: ["Cầu lông", "Quần vợt", "Bóng bàn", "Cầu mây"], correct: 0 },
        { question: "Môn thể thao nào có luật việt vị?", answers: ["Bóng chuyền", "Bóng rổ", "Bóng đá", "Bơi lội"], correct: 2 },
        { question: "Giải đua xe công thức 1 được viết tắt là gì?", answers: ["F1", "MotoGP", "WRC", "Nascar"], correct: 0 }
    ],
    science: [
        { question: "Chất nào dưới đây là kim loại?", answers: ["Oxy", "Cacbon", "Sắt", "Lưu huỳnh"], correct: 2 },
        { question: "Ký hiệu hóa học của nguyên tố Vàng là gì?", answers: ["Ag", "Au", "Fe", "Cu"], correct: 1 },
        { question: "Cơ quan nào trong cơ thể người có chức năng lọc máu?", answers: ["Tim", "Phổi", "Thận", "Dạ dày"], correct: 2 },
        { question: "Vật chất có 3 trạng thái cơ bản là: Rắn, lỏng và gì?", answers: ["Khí", "Plasma", "Thủy tinh", "Kim loại"], correct: 0 },
        { question: "Ngọn núi lửa lớn nhất trong Hệ Mặt Trời nằm ở hành tinh nào?", answers: ["Trái Đất", "Sao Kim", "Sao Hỏa", "Sao Mộc"], correct: 2 },
        { question: "Vật lý học: Đơn vị đo lực là gì?", answers: ["Joule (J)", "Watt (W)", "Newton (N)", "Volt (V)"], correct: 2 },
        { question: "Quá trình thực vật tự tổng hợp chất dinh dưỡng nhờ ánh sáng gọi là gì?", answers: ["Hô hấp", "Bay hơi", "Tiêu hóa", "Quang hợp"], correct: 3 },
        { question: "ADN lưu trữ thông tin gì của sinh vật?", answers: ["Năng lượng", "Di truyền", "Kháng thể", "Ký ức"], correct: 1 },
        { question: "Người đầu tiên bay vào vũ trụ là ai?", answers: ["Neil Armstrong", "Yuri Gagarin", "Phạm Tuân", "Buzz Aldrin"], correct: 1 },
        { question: "Axit có trong dạ dày con người để tiêu hóa thức ăn là gì?", answers: ["H2SO4", "HNO3", "HCl", "CH3COOH"], correct: 2 },
        { question: "Lỗ đen (Black hole) có lực hấp dẫn cực mạnh đến mức cái gì cũng không thể thoát ra?", answers: ["Âm thanh", "Nước", "Ánh sáng", "Không khí"], correct: 2 },
        { question: "Thành phần khí nào chiếm tỉ lệ cao nhất trong khí quyển Trái Đất?", answers: ["Oxy", "Cacbonic", "Nitơ", "Hydro"], correct: 2 },
        { question: "Nhiệt độ cơ thể người bình thường khoảng bao nhiêu độ C?", answers: ["35", "37", "39", "40"], correct: 1 },
        { question: "Động vật nào sau đây là loài lưỡng cư?", answers: ["Cá sấu", "Ếch", "Rùa", "Cá mập"], correct: 1 },
        { question: "Hành tinh nào có vành đai rõ nét và đẹp nhất hệ mặt trời?", answers: ["Sao Kim", "Sao Thổ", "Sao Mộc", "Sao Thiên Vương"], correct: 1 }
    ],
    tech: [
        { question: "Cha đẻ của World Wide Web (WWW) là ai?", answers: ["Bill Gates", "Tim Berners-Lee", "Steve Jobs", "Alan Turing"], correct: 1 },
        { question: "Ngôn ngữ dùng để thiết kế giao diện web là gì?", answers: ["CSS", "C++", "Python", "Java"], correct: 0 },
        { question: "USB viết tắt của từ gì?", answers: ["Universal Serial Bus", "United State Bank", "User Serial Base", "Unknown System Bug"], correct: 0 },
        { question: "Mạng 5G có tốc độ như thế nào so với 4G?", answers: ["Chậm hơn", "Bằng nhau", "Nhanh hơn rất nhiều", "Chỉ phủ sóng xa hơn"], correct: 2 },
        { question: "Hệ điều hành mã nguồn mở nổi tiếng nhất là gì?", answers: ["Windows", "MacOS", "Linux", "iOS"], correct: 2 },
        { question: "Đơn vị đo dung lượng ổ cứng nhỏ nhất trong các đáp án sau?", answers: ["Gigabyte (GB)", "Megabyte (MB)", "Kilobyte (KB)", "Terabyte (TB)"], correct: 2 },
        { question: "Phím tắt để hoàn tác (Undo) hành động vừa làm trên Windows là gì?", answers: ["Ctrl + C", "Ctrl + V", "Ctrl + Z", "Ctrl + X"], correct: 2 },
        { question: "Thương hiệu CPU phổ biến trên máy tính ngoài Intel là?", answers: ["Nvidia", "AMD", "Qualcomm", "ARM"], correct: 1 },
        { question: "Công cụ AI ChatGPT được phát triển bởi công ty nào?", answers: ["Google", "Microsoft", "OpenAI", "Meta"], correct: 2 },
        { question: "Đuôi tên miền phổ biến nhất thế giới là gì?", answers: [".vn", ".net", ".org", ".com"], correct: 3 },
        { question: "Lỗi phần mềm thường được lập trình viên gọi là gì?", answers: ["Bug", "Virus", "Worm", "Trojan"], correct: 0 },
        { question: "IP trong địa chỉ IP mạng có nghĩa là gì?", answers: ["Internet Provider", "Internet Protocol", "Internal PC", "International Port"], correct: 1 },
        { question: "Thiết bị nào chuyển đổi tín hiệu quang thành tín hiệu mạng internet vào nhà bạn?", answers: ["Switch", "Router / Modem", "Hub", "Repeater"], correct: 1 },
        { question: "Màn hình OLED có ưu điểm gì nổi bật?", answers: ["Giá cực rẻ", "Độ bền ngàn năm", "Màu đen sâu, tiết kiệm pin", "Dày và cứng"], correct: 2 },
        { question: "Ngôn ngữ lập trình nào có biểu tượng là ly cà phê?", answers: ["Python", "C#", "Ruby", "Java"], correct: 3 }
    ],
    movies: [
        { question: "Bộ phim nào có doanh thu cao nhất lịch sử điện ảnh Việt Nam (Tính đến 2024)?", answers: ["Bố Già", "Mai", "Nhà Bà Nữ", "Lật Mặt 6"], correct: 1 },
        { question: "Đạo diễn của bộ phim bom tấn Avatar là ai?", answers: ["Steven Spielberg", "Christopher Nolan", "James Cameron", "Quentin Tarantino"], correct: 2 },
        { question: "Vũ trụ Điện ảnh Marvel được viết tắt là gì?", answers: ["DCU", "MCU", "MCE", "VUM"], correct: 1 },
        { question: "Nam diễn viên nào đóng vai Người Nhện (Spider-Man) trong MCU?", answers: ["Tobey Maguire", "Andrew Garfield", "Tom Holland", "Chris Evans"], correct: 2 },
        { question: "Nhân vật phản diện Thanos đi tìm mấy viên đá vô cực?", answers: ["5", "6", "7", "8"], correct: 1 },
        { question: "Phim Titanic (1997) kết thúc với việc con tàu bị gì?", answers: ["Cháy", "Bị cướp", "Chìm do đâm băng trôi", "Đến đích an toàn"], correct: 2 },
        { question: "Giải thưởng điện ảnh lớn nhất nước Mỹ là gì?", answers: ["Cánh Diều Vàng", "Cannes", "Oscar", "Bafta"], correct: 2 },
        { question: "Trong phim Harry Potter, trường học phép thuật tên là gì?", answers: ["Hogwarts", "Ilvermorny", "Durmstrang", "Beauxbatons"], correct: 0 },
        { question: "Người Sắt (Iron Man) có tên thật là gì?", answers: ["Steve Rogers", "Bruce Wayne", "Tony Stark", "Peter Parker"], correct: 2 },
        { question: "Series phim 'Lật Mặt' do ai đạo diễn và sản xuất?", answers: ["Trấn Thành", "Lý Hải", "Victor Vũ", "Charlie Nguyễn"], correct: 1 },
        { question: "Bộ phim Hàn Quốc đầu tiên đạt giải Oscar Phim hay nhất?", answers: ["Train to Busan", "Parasite (Ký sinh trùng)", "Squid Game", "Minari"], correct: 1 },
        { question: "Trong 'Tom and Jerry', Tom là con gì?", answers: ["Chuột", "Chó", "Mèo", "Chim"], correct: 2 },
        { question: "Joker là kẻ thù truyền kiếp của siêu anh hùng nào?", answers: ["Superman", "Batman", "Spiderman", "Flash"], correct: 1 },
        { question: "Nhân vật chính trong phim Kung Fu Panda là con gì?", answers: ["Khỉ", "Gấu trúc", "Hổ", "Rắn"], correct: 1 },
        { question: "Hãng phim hoạt hình nổi tiếng với logo lâu đài và chuột Mickey?", answers: ["Pixar", "DreamWorks", "Illumination", "Disney"], correct: 3 }
    ],
    anime: [
        { question: "Nhân vật chính trong One Piece mong muốn tìm thấy gì?", answers: ["Ngọc Rồng", "Kho báu One Piece", "Cuốn sổ tử thần", "Thánh giá"], correct: 1 },
        { question: "Trái ác quỷ của Luffy có tên là gì (tên phổ biến)?", answers: ["Gomu Gomu", "Mera Mera", "Ope Ope", "Hito Hito"], correct: 0 },
        { question: "Trong Naruto, làng của nhân vật chính tên là gì?", answers: ["Làng Sương Mù", "Làng Cát", "Làng Lá", "Làng Đá"], correct: 2 },
        { question: "Nhân vật Conan bị teo nhỏ do uống loại thuốc nào?", answers: ["APTX-4869", "Độc đắc", "Nước thánh", "Thuốc ngủ"], correct: 0 },
        { question: "Bảy Viên Ngọc Rồng khi tập hợp đủ sẽ gọi ra con gì?", answers: ["Kỳ lân", "Rồng Thần", "Phượng hoàng", "Quái thú"], correct: 1 },
        { question: "Studio sản xuất phim hoạt hình Vùng Đất Linh Hồn (Spirited Away)?", answers: ["Mappa", "Ufotable", "Ghibli", "Toei Animation"], correct: 2 },
        { question: "Nhân vật chính trong Kimetsu no Yaiba (Thanh gươm diệt quỷ)?", answers: ["Tanjiro", "Zenitsu", "Inosuke", "Nezuko"], correct: 0 },
        { question: "Gojo Satoru là nhân vật nổi tiếng trong bộ anime nào?", answers: ["Bleach", "Jujutsu Kaisen", "Naruto", "Fairy Tail"], correct: 1 },
        { question: "Pikachu tiến hóa từ Pokemon nào?", answers: ["Raichu", "Pichu", "Eevee", "Charmander"], correct: 1 },
        { question: "Saitama trong One Punch Man tiêu diệt quái vật bằng mấy cú đấm?", answers: ["1", "2", "3", "Nhiều cú đấm"], correct: 0 },
        { question: "Doraemon là chú mèo máy đến từ thế kỷ bao nhiêu?", answers: ["20", "21", "22", "23"], correct: 2 },
        { question: "Gia tộc của Uchiha Sasuke sở hữu con mắt nhãn thuật gì?", answers: ["Byakugan", "Rinnegan", "Sharingan", "Tenseigan"], correct: 2 },
        { question: "Ai là tác giả của bộ truyện Doraemon?", answers: ["Fujiko F. Fujio", "Aoyama Gosho", "Oda Eiichiro", "Kishimoto Masashi"], correct: 0 },
        { question: "Trong Death Note, tên tử thần đi theo Light Yagami là gì?", answers: ["Rem", "Ryuk", "L", "Near"], correct: 1 },
        { question: "Môn thể thao chính trong anime Haikyuu!! là gì?", answers: ["Bóng rổ", "Bóng đá", "Bóng chuyền", "Bóng chày"], correct: 2 }
    ]
};

// --- CÁC BIẾN TRẠNG THÁI ---
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let userName = "";
let hintsLeft = 3; 
let isHintUsedRound = false; 
const MAX_HIGH_SCORES = 5;

// TIMER VARIABLES
let timeLeft = 120; // 2 phút
let timerInterval;

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

// Timer
const timerText = document.getElementById('timer-text');
const timerProgress = document.getElementById('timer-progress');

// Hints
const btnHint = document.getElementById('btn-hint');
const hintCountEl = document.getElementById('hint-count');

// Popup
const modal = document.getElementById('feedback-modal');
const modalContent = document.querySelector('.modal-content');
const feedbackIcon = document.getElementById('feedback-icon');
const feedbackTitle = document.getElementById('feedback-title');
const feedbackText = document.getElementById('feedback-text');

// Audio
const soundCorrect = document.getElementById('sound-correct');
const soundWrong = document.getElementById('sound-wrong');
const bgMusic = document.getElementById('bg-music');

// --- HỆ THỐNG ÂM THANH ---
function playBackgroundMusic() {
    if (bgMusic) {
        bgMusic.volume = 0.2; 
        bgMusic.play().catch(e => console.log("Chặn tự phát nhạc:", e));
    }
}
function playSound(audio) {
    if (audio) {
        audio.currentTime = 0;
        audio.play().catch(e => console.log("Lỗi âm thanh hiệu ứng"));
    }
}

// --- HỆ THỐNG ĐẾM THỜI GIAN ---
function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerUI();
        
        if(timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Hết 2 phút! Bạn đã hết thời gian.");
            endGame();
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(timerInterval);
}

function updateTimerUI() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerText.innerText = `⏱ ${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    
    // Tính phần trăm cho thanh progress
    const percent = (timeLeft / 120) * 100;
    timerProgress.style.width = `${percent}%`;

    // Cảnh báo khi còn dưới 30 giây
    if (timeLeft <= 30) {
        timerProgress.style.backgroundColor = 'var(--error)';
        timerText.style.color = 'var(--error)';
    } else {
        timerProgress.style.backgroundColor = 'var(--success)';
        timerText.style.color = 'var(--dark)';
    }
}

// --- HÀM RANDOM ---
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// --- ĐIỀU HƯỚNG ---
function showScreen(id) {
    screens.forEach(screen => screen.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

// 1. NHẬP TÊN
function goToCategory() {
    const name = nameInput.value.trim();
    if (name) {
        userName = name;
        playBackgroundMusic();
        showScreen('category-screen');
    } else {
        alert("Vui lòng nhập tên chiến binh!");
    }
}

// 2. CHỌN CHỦ ĐỀ & START
function startGame(category) {
    if (!quizData[category]) return;
    
    // Copy và Random câu hỏi
    let questions = [...quizData[category]];
    currentQuestions = shuffleArray(questions);
    
    currentQuestionIndex = 0;
    score = 0;
    hintsLeft = 3; 
    
    // Reset Timer
    timeLeft = 120;
    updateTimerUI();
    startTimer();
    
    showScreen('game-screen');
    loadQuestion();
    updateUI();
}

// 3. TẢI CÂU HỎI
function loadQuestion() {
    answersContainer.innerHTML = '';
    isHintUsedRound = false; 
    
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
        button.dataset.index = index; 
        button.onclick = () => selectAnswer(index, currentQ.correct, button);
        answersContainer.appendChild(button);
    });

    updateHintUI(); 
}

function updateUI() {
    scoreEl.innerText = `Điểm: ${score}`;
    countEl.innerText = `Câu: ${currentQuestionIndex + 1}/${currentQuestions.length}`;
    const percent = ((currentQuestionIndex) / currentQuestions.length) * 100;
    progressEl.style.width = `${percent}%`;
}

// --- LOGIC GỢI Ý ---
function useHint() {
    if (hintsLeft <= 0 || isHintUsedRound) return;

    const currentQ = currentQuestions[currentQuestionIndex];
    const buttons = Array.from(answersContainer.children);
    
    const wrongAnswers = buttons.filter((btn, index) => index !== currentQ.correct);
    shuffleArray(wrongAnswers);
    
    wrongAnswers.slice(0, 2).forEach(btn => btn.classList.add('hidden'));

    hintsLeft--;
    isHintUsedRound = true;
    updateHintUI();
}

function updateHintUI() {
    hintCountEl.innerText = hintsLeft;
    
    if (hintsLeft <= 0 || isHintUsedRound) {
        btnHint.disabled = true;
        btnHint.style.cursor = "not-allowed";
        btnHint.style.opacity = 0.6;
    } else {
        btnHint.disabled = false;
        btnHint.style.cursor = "pointer";
        btnHint.style.opacity = 1;
    }
}

// 4. TRẢ LỜI
function selectAnswer(selectedIndex, correctIndex, btnClicked) {
    const buttons = answersContainer.children;
    for (let btn of buttons) btn.disabled = true;
    
    btnHint.disabled = true; 
    pauseTimer(); // Tạm dừng thời gian khi hiện bảng kết quả

    const correctAnsText = currentQuestions[currentQuestionIndex].answers[correctIndex];

    if (selectedIndex === correctIndex) {
        btnClicked.classList.add('correct');
        score += 10;
        playSound(soundCorrect); // Phát correct.mp3
        showFeedback(true, correctAnsText);
    } else {
        btnClicked.classList.add('wrong');
        if (buttons[correctIndex]) buttons[correctIndex].classList.add('correct');
        playSound(soundWrong); // Phát wrong.mp3
        showFeedback(false, correctAnsText);
    }
    scoreEl.innerText = `Điểm: ${score}`;
}

function showFeedback(isCorrect, text) {
    modal.classList.add('active');
    modalContent.className = 'modal-content'; 

    if (isCorrect) {
        modalContent.classList.add('correct');
        feedbackIcon.innerHTML = '<i class="fas fa-check-circle"></i>';
        feedbackTitle.innerText = "Đúng rồi!";
        feedbackText.innerText = "Ăn may chứ gì!";
    } else {
        modalContent.classList.add('wrong');
        feedbackIcon.innerHTML = '<i class="fas fa-times-circle"></i>';
        feedbackTitle.innerText = "Sai mất rồi, gà quá!";
        feedbackText.innerHTML = `Đáp án đúng là:<br><b>${text}</b>`;
    }
}

function closeFeedback() {
    modal.classList.remove('active');
    currentQuestionIndex++;
    
    if (currentQuestionIndex < currentQuestions.length) {
        startTimer(); // Chạy lại bộ đếm khi đóng bảng kết quả
        loadQuestion();
        updateUI();
    } else {
        endGame();
    }
}

// 5. KẾT THÚC
function endGame() {
    pauseTimer(); // Tắt hẳn đồng hồ
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