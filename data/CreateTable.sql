CREATE TABLE Account (
    account_id INT PRIMARY KEY IDENTITY(1,1),
    username NVARCHAR(50) UNIQUE NOT NULL,
    password NVARCHAR(255) NOT NULL,
    role NVARCHAR(20) CHECK (role IN ('user', 'admin')) DEFAULT 'user'
);

-- Bảng User
CREATE TABLE [User] (
    user_id INT PRIMARY KEY IDENTITY(1,1),
    account_id INT UNIQUE,
    name NVARCHAR(100),
    email NVARCHAR(100) UNIQUE,
    avatar_url NVARCHAR(MAX),
    FOREIGN KEY (account_id) REFERENCES Account(account_id) ON DELETE CASCADE
);

-- Bảng Anime
CREATE TABLE Anime (
    anime_id INT PRIMARY KEY IDENTITY(1,1),
    title NVARCHAR(200) NOT NULL,
    description NVARCHAR(MAX),
    image_url NVARCHAR(MAX),
    release_date Int,
	episode_count INT DEFAULT 0 ,
	 status NVARCHAR(20) 
        CHECK (status IN (N'chưa hoàn thành', N'đã hoàn thành', N'drop')) 
        DEFAULT N'chưa hoàn thành'
);

-- Bảng Category
CREATE TABLE Category (
    category_id INT PRIMARY KEY IDENTITY(1,1),
    name NVARCHAR(100) UNIQUE NOT NULL
);

-- Bảng Anime_Category (N-N)
CREATE TABLE Anime_Category (
    anime_id INT,
    category_id INT,
    PRIMARY KEY (anime_id, category_id),
    FOREIGN KEY (anime_id) REFERENCES Anime(anime_id) ON DELETE CASCADE,
    FOREIGN KEY (category_id) REFERENCES Category(category_id) ON DELETE CASCADE
);

-- Bảng User_Anime (N-N)
CREATE TABLE User_Anime (
    user_id INT NOT NULL,
    anime_id INT NOT NULL,
    status NVARCHAR(20) 
        CHECK (status IN (N'đang xem', N'đã xem', N'chưa xem', N'bỏ dở')) DEFAULT N'chưa xem',
    PRIMARY KEY (user_id, anime_id),
    FOREIGN KEY (user_id) REFERENCES [User](user_id) ON DELETE CASCADE,
    FOREIGN KEY (anime_id) REFERENCES Anime(anime_id) ON DELETE CASCADE
);


ALTER TABLE [User] ADD googleId VARCHAR(255) NULL;
