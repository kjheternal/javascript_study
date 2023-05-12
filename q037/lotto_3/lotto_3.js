/*
    -> 문제 37 - 로3

    로또
    *. 로또 복권 ???

    lottoV0.1.0

    컴퓨터의 6개의 숫자랑 내꺼랑 각각 비교해서(6*6회) 몇개가 일치하는 지 세어 출력하기

*/

var complete = 0;

var p1 = 12;
var p2 = 5;
var p3 = 8;
var p4 = 27;
var p5 = 40;
var p6 = 33;

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
br();

// 1번 숫자
if ( p1 == r1 ) {
    complete = complete + 1;
}

if ( p1 == r2 ) {
    complete = complete + 1;
}

if ( p1 == r3 ) {
    complete = complete + 1;
}

if ( p1 == r4 ) {
    complete = complete + 1;
}

if ( p1 == r5 ) {
    complete = complete + 1;
}

if ( p1 == r6 ) {
    complete = complete + 1;
}

// 2번 숫자
if ( p2 == r1 ) {
    complete = complete + 1;
}

if ( p2 == r2 ) {
    complete = complete + 1;
}

if ( p2 == r3 ) {
    complete = complete + 1;
}

if ( p2 == r4 ) {
    complete = complete + 1;
}

if ( p2 == r5 ) {
    complete = complete + 1;
}

if ( p2 == r6 ) {
    complete = complete + 1;
}

// 3번 숫자
if ( p3 == r1 ) {
    complete = complete + 1;
}

if ( p3 == r2 ) {
    complete = complete + 1;
}

if ( p3 == r3 ) {
    complete = complete + 1;
}

if ( p3 == r4 ) {
    complete = complete + 1;
}

if ( p3 == r5 ) {
    complete = complete + 1;
}

if ( p3 == r6 ) {
    complete = complete + 1;
}

// 4번 숫자
if ( p4 == r1 ) {
    complete = complete + 1;
}

if ( p4 == r2 ) {
    complete = complete + 1;
}

if ( p4 == r3 ) {
    complete = complete + 1;
}

if ( p4 == r4 ) {
    complete = complete + 1;
}

if ( p4 == r5 ) {
    complete = complete + 1;
}

if ( p4 == r6 ) {
    complete = complete + 1;
}

// 5번 숫자
if ( p5 == r1 ) {
    complete = complete + 1;
}

if ( p5 == r2 ) {
    complete = complete + 1;
}

if ( p5 == r3 ) {
    complete = complete + 1;
}

if ( p5 == r4 ) {
    complete = complete + 1;
}

if ( p5 == r5 ) {
    complete = complete + 1;
}

if ( p5 == r6 ) {
    complete = complete + 1;
}

// 6번 숫자
if ( p6 == r1 ) {
    complete = complete + 1;
}

if ( p6 == r2 ) {
    complete = complete + 1;
}

if ( p6 == r3 ) {
    complete = complete + 1;
}

if ( p6 == r4 ) {
    complete = complete + 1;
}

if ( p6 == r5 ) {
    complete = complete + 1;
}

if ( p6 == r6 ) {
    complete = complete + 1;
}

dw(complete + " 개의 로또 일치");

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



    //todo:
    // 컴퓨터의 6개의 숫자랑 내꺼랑 비교해서 몇개가 일치하는 지 세어 출력하기					 ex. 3개 일치	
    // p1 ~ p6


    var win = 0;    //내가 맞춘 수

    if(p1 == r1){
        win = win + 1;
    }
    if(p1 == r2){
        win = win + 1;
    }
    if(p1 == r3){
        win = win + 1;
    }
    if(p1 == r4){
        win = win + 1;
    }
    if(p1 == r5){
        win = win + 1;
    }
    if(p1 == r6){
        win = win + 1;
    }

    if(p2 == r1){
        win = win + 1;
    }
    if(p2 == r2){
        win = win + 1;
    }
    if(p2 == r3){
        win = win + 1;
    }
    if(p2 == r4){
        win = win + 1;
    }
    if(p2 == r5){
        win = win + 1;
    }
    if(p2 == r6){
        win = win + 1;
    }

    //3

    if(p3 == r1){
        win = win + 1;
    }
    if(p3 == r2){
        win = win + 1;
    }
    if(p3 == r3){
        win = win + 1;
    }
    if(p3 == r4){
        win = win + 1;
    }
    if(p3 == r5){
        win = win + 1;
    }
    if(p3 == r6){
        win = win + 1;
    }

    //4

    if(p4 == r1){
        win = win + 1;
    }
    if(p4 == r2){
        win = win + 1;
    }
    if(p4 == r3){
        win = win + 1;
    }
    if(p4 == r4){
        win = win + 1;
    }
    if(p4 == r5){
        win = win + 1;
    }
    if(p4 == r6){
        win = win + 1;
    }

    //5

    if(p5 == r1){
        win = win + 1;
    }
    if(p5 == r2){
        win = win + 1;
    }
    if(p5 == r3){
        win = win + 1;
    }
    if(p5 == r4){
        win = win + 1;
    }
    if(p5 == r5){
        win = win + 1;
    }
    if(p5 == r6){
        win = win + 1;
    }

    //6

    if(p6 == r1){
        win = win + 1;
    }
    if(p6 == r2){
        win = win + 1;
    }
    if(p6 == r3){
        win = win + 1;
    }
    if(p6 == r4){
        win = win + 1;
    }
    if(p6 == r5){
        win = win + 1;
    }
    if(p6 == r6){
        win = win + 1;
    }

    document.write("win:"+win);
    
*/