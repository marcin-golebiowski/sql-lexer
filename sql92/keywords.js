'use strict';

var keywords = {};
'ABSOLUTE ACTION ADD ALL ALLOCATE ALTER AND ANY ARE AS ASC ASSERTION AT AUTHORIZATION AVG BEGIN BETWEEN BIT BIT_LENGTH BOTH BY CASCADE CASCADED CASE CAST CATALOG CHAR CHARACTER CHAR_LENGTH CHARACTER_LENGTH CHECK CLOSE COALESCE COLLATE COLLATION COLUMN COMMIT CONNECT CONNECTION CONSTRAINT CONSTRAINTS CONTINUE CONVERT CORRESPONDING COUNT CREATE CROSS CURRENT CURRENT_DATE CURRENT_TIME CURRENT_TIMESTAMP CURRENT_USER CURSOR DATE DAY DEALLOCATE DEC DECIMAL DECLARE DEFAULT DEFERRABLE DEFERRED DELETE DESC DESCRIBE DESCRIPTOR DIAGNOSTICS DISCONNECT DISTINCT DOMAIN DOUBLE DROP ELSE END END-EXEC ESCAPE EXCEPT EXCEPTION EXEC EXECUTE EXISTS EXTERNAL EXTRACT FALSE FETCH FIRST FLOAT FOR FOREIGN FOUND FROM FULL GET GLOBAL GO GOTO GRANT GROUP HAVING HOUR IDENTITY IMMEDIATE IN INDICATOR INITIALLY INNER INPUT INSENSITIVE INSERT INT INTEGER INTERSECT INTERVAL INTO IS ISOLATION JOIN KEY LANGUAGE LAST LEADING LEFT LEVEL LIKE LOCAL LOWER MATCH MAX MIN MINUTE MODULE MONTH NAMES NATIONAL NATURAL NCHAR NEXT NO NOT NULL NULLIF NUMERIC OCTET_LENGTH OF ON ONLY OPEN OPTION OR ORDER OUTER OUTPUT OVERLAPS PAD PARTIAL POSITION PRECISION PREPARE PRESERVE PRIMARY PRIOR PRIVILEGES PROCEDURE PUBLIC READ REAL REFERENCES RELATIVE RESTRICT REVOKE RIGHT ROLLBACK ROWS SCHEMA SCROLL SECOND SECTION SELECT SESSION SESSION_USER SET SIZE SMALLINT SOME SPACE SQL SQLCODE SQLERROR SQLSTATE SUBSTRING SUM SYSTEM_USER TABLE TEMPORARY THEN TIME TIMESTAMP TIMEZONE_HOUR TIMEZONE_MINUTE TO TRAILING TRANSACTION TRANSLATE TRANSLATION TRIM TRUE UNION UNIQUE UNKNOWN UPDATE UPPER USAGE USER USING VALUE VALUES VARCHAR VARYING VIEW WHEN WHENEVER WHERE WITH WORK WRITE YEAR ZONE'
    .split(' ')
    .forEach(function (kw) { keywords[kw] = true });

var futureProof = {};
'AFTER ALIAS ASYNC BEFORE BOOLEAN BREADTH COMPLETION CALL CYCLE DATA DEPTH DICTIONARY EACH ELSEIF EQUALS GENERAL IF IGNORE LEAVE LESS LIMIT LOOP MODIFY NEW NONE OBJECT OFF OID OLD OPERATION OPERATORS OTHERS PARAMETERS PENDANT PREORDER PRIVATE PROTECTED RECURSIVE REF REFERENCING REPLACE RESIGNAL RETURN RETURNS ROLE ROUTINE ROW SAVEPOINT SEARCH SENSITIVE SEQUENCE SIGNAL SIMILAR SQLEXCEPTION SQLWARNING STRUCTURE TEST THERE TRIGGER TYPE UNDER VARIABLE VIRTUAL VISIBLE WAIT WHILE WITHOUT'
    .split(' ')
    .forEach(function(kw) { futureProof[kw] = true });

var sqlkeys = {};
sqlkeys.isKeyword = function (kw) { return keywords[kw] }
sqlkeys.isForFuture = function (kw) { return futureProof[kw] }
sqlkeys.isReserved = function (kw) { return keywords[kw] || futureProof[kw] }

module.exports = function (dialect) {
    return sqlkeys;
}
