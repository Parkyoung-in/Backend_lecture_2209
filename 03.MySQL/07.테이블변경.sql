/* 
*add
 */

ALTER TABLE tigers
ADD isDeleted INT DEFAULT 0;
SELECT * FROM tigers;

# 컬럼명 변경
ALTER TABLE tigers
CHANGE `POSITION` `position` VARCHAR(10);
SELECT * FROM tigers;

# 같은 테이블명이 없으면 테이블 생성
CREATE TABLE if NOT exists tigers(
);

# 뷰 생성
CREATE VIEW largeCity 
	AS SELECT * FROM city 
		WHERE population >=7000000 WITH CHECK OPTION;   /* check option은 조건이 만족하지 않으면 error가 발생한다 */


UPDATE largecity SET countrycode='GBR' WHERE id=206;
SELECT * FROM largecity;