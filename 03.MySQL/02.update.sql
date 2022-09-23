/* 
update 테이블명
set 필드명=값, 필드명=값, 필드명=값, ...
where 조건;
 */

 # K로 시작하는 한국 도시
 SELECT * FROM city WHERE countrycode='kor' AND NAME LIKE 'k%'

 # Kwangju를 Gwangju로 업데이트 (특정값만 바꾸기 위해 name이 아닌 고유한 값인 id를 사용하여 변경)
UPDATE city SET NAME='Gwangju', district='Gwangju' WHERE id=2336;
SELECT * FROM city WHERE NAME='Gwangju';

# 전라남도 도시의 인구를 20만으로 변경
UPDATE city SET population=200000 WHERE district='Chollanam';
SELECT * FROM city WHERE district like 'Cholla%';