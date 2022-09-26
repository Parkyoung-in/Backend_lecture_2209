/*
날짜형식
 */

 # 새로운 테이블 생성
 CREATE TABLE dateTable (
id INT PRIMARY KEY AUTO_INCREMENT,
dt DATETIME DEFAULT CURRENT_TIMESTAMP);

#
inset INTO dateTable VALUES (DEFAULT, DEFAULT);
SELECT * FROM dateTable

INSERT INTO dateTable (dt) VALUES
('2022-08-28 17:22:21'), ('2022-02-15 10:22:24'),
('2022-12-09 22:13:24'), ('2022-07-06 20:15:18');
SELECT * FROM dateTable;

#날짜만 보기
SELECT DATE_FORMAT(dt, '%Y-%m-%d') FROM datetable;

#시간만 보기
SELECT DATE_FORMAT(dt, '%r') FROM datetable;

#시간만 보기
SELECT DATE_FORMAT(dt, '%h:%i:%s %p') FROM datetable;

# now 함수사용 현재날짜,시간 표현, currnetdate,currnettime
SELECT NOW(), CURDATE(), CURTIME();

# 날짜 더하기
SELECT DATE_ADD(NOW(), INTERVAL 40 DAY);

# 날짜 빼기
SELECT DATE_sub(NOW(), INTERVAL 3 month);

# D-day
SELECT TO_DAYS('2022-11-17') - TO_DAYS(NOW());

# 요일 : 1(일요일)
SELECT DAYOFWEEK(dt) FROM dateTable;

#날짜 시간
SELECT date_format(dt, '%y-%m-%d %h:%i') FROM dateTable;

