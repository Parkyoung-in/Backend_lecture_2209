/* 
INSERT INTO 테이블명
    (필드명)            # 필드명을 사용하면 일부 필드만 데이터 추가, # 사용하지 않으면 모든 필드를 데이터 추가
    VALUES (필드명에 대한 값)
 */

 # city 테이블에 새로운 데이터 추가
INSERT INTO city (NAME, countrycode, district, population)
VALUES ('Haenam', 'KOR', 'Chollanam', 100000);
SELECT * FROM city WHERE district like 'Cholla%';

# city 테이블에 새로운 데이터 추가
INSERT INTO city VALUES (DEFAULT, 'Jangsung', 'KOR', 'Chollanam', 100000);
SELECT * FROM city WHERE district='chollanam';

# 기존 데이터 수정(전남에 있는 도시들의 인구수 +50000)
UPDATE city, (SELECT * FROM city WHERE district ='Chollanam') b
SET city.population=b.population+50000
WHERE city.id=b.id;
SELECT * FROM city WHERE district='chollanam';