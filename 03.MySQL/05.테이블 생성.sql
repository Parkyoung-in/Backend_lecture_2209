/* 
*테이블 생성

CREATE TABLE 테이블명(
	필드명 데이터타입 [NOT NULL] [KEY] [DEFAULT 값] [Extra],
	필드명 데이터타입 [NOT NULL] [KEY] [DEFAULT 값] [Extra],
	필드명 데이터타입 [NOT NULL] [KEY] [DEFAULT 값] [Extra],
	...
) [Extra];
 */

 # 기아 타이거즈 테이블 생성
# id, 선수명, 백넘버, 포지션

CREATE TABLE tigers (
id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
player VARCHAR(10) NOT NULL,
backNo INT,
POSITION VARCHAR(10)
); /* )뒤 auto_increment=숫자 를 하면 숫자부터 auto_increment가 실행된다 */

INSERT INTO tigers (player, backNo, POSITION)
VALUES ('양현종', 54, '투수'),
('이의리', 48, '투수'),
('박동원', 10, '포수'),
('김선빈', 3, '내야수'),
('박찬호', 1, '내야수'),
('나성범', 47, '내야수'),
('소크라테스', 30, '외야수');
SELECT * FROM tigers;
