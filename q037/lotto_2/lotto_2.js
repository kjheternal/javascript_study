/*
    -> 문제 37 - 로2

    로또
    *. 로또 복권 ???

    lottoV0.1.0

    1. 내가 한 게임을 구매했다고 가정하고 변수 p1 부터 ~ p6 까지 값 6 개 각각 주기
    2. 컴퓨터의 랜덤값도 변수명을 r1 ~ r6 까지 변경해주기

*/

var p1 = 2;
var p2 = 4;
var p3 = 5;
var p4 = 7;
var p5 = 10;
var p6 = 11;

var r1 = rand(1, 45);
dw(r1);
br();

var r2 = rand(1, 45);
dw(r2);
br();

var r3 = rand(1, 45);
dw(r3);
br();

var r4 = rand(1, 45);
dw(r4);
br();

var r5 = rand(1, 45);
dw(r5);
br();

var r6 = rand(1, 45);
dw(r6);

/*
    // 2. 내가 한 게임을 구매했다고 가정하고		

    // 컴퓨터의 6개의 숫자랑 내꺼랑 비교해서 몇개가 일치하는 지 세어 출력하기					 ex. 3개 일치	


    // 내 번호들
    var p1 = 1;
    var p2 = 2;
    var p3 = 3;
    var p4 = 4;
    var p5 = 5;
    var p6 = 6;

    // 랜덤 번호들
    var r1 = Math.floor(Math.random() * 45) + 1; // 1 ~ n 까지 범위내에서 랜덤하게 숫자 하나 뽑아주는 애.
    document.write(r1);
    document.write("<br>");

    var r2 = Math.floor(Math.random() * 45) + 1; // 1 ~ n 까지 범위내에서 랜덤하게 숫자 하나 뽑아주는 애.
    document.write(r2);
    document.write("<br>");

    var r3 = Math.floor(Math.random() * 45) + 1; // 1 ~ n 까지 범위내에서 랜덤하게 숫자 하나 뽑아주는 애.
    document.write(r3);
    document.write("<br>");

    var r4 = Math.floor(Math.random() * 45) + 1; // 1 ~ n 까지 범위내에서 랜덤하게 숫자 하나 뽑아주는 애.
    document.write(r4);
    document.write("<br>");

    var r5 = Math.floor(Math.random() * 45) + 1; // 1 ~ n 까지 범위내에서 랜덤하게 숫자 하나 뽑아주는 애.
    document.write(r5);
    document.write("<br>");

    var r6 = Math.floor(Math.random() * 45) + 1; // 1 ~ n 까지 범위내에서 랜덤하게 숫자 하나 뽑아주는 애.
    document.write(r6);
    document.write("<br>");
    
*/