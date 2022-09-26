/* 
drop table 테이블명;
 */

# cc 테이블 삭제
drop table cc;

# 테이블의 모든 데이터 삭제
TRUNCATE TABLE citycopy;

# citycopy 테이블 cc로 이름 변경
RENAME TABLE citycopy TO cc;
SHOW TABLES;

