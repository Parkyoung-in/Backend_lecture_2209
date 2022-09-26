/* 
테이블에서 데이터 삭제하기
 */

#아프가니스탄 삭제
DELETE FROM citycopy
WHERE countrycode='afg';
SELECT * FROM citycopy LIMIT 10;

# citycopy 테이블에서 인구수가 9000000 이상인 도시 10개 내림차순 
DELETE FROM citycopy
WHERE population>9000000;
SELECT * FROM citycopy 
ORDER BY population DESC LIMIT 10;