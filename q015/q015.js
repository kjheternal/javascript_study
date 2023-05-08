/*
    -> 문제 15

    반복문 while

    while ( 조건 ) {
        실행할 명령
    }

    ex)
    var sum = 0 ;
    var i = 1 ;

    while ( i <= 10 ) {
        sum = sum + i;
        i++;
    }

    alert ( sum ); // 55

    준비. html body 내에 <div id="a"> </div> 를 추가 해 놓기
    1. while(true) {  } 를 이용해서 무한 루프 걸기. 이 안에 아래를 코딩하기.
    2. prompt 함수를 이용하여 숫자 값을 하나 입력 받기
    3. 숫자가 100이면 while 반복문을 끝내도록 처리
    4. 입력 받은 값 중 마지막 값을 div 태그 내에 출력하기.

    window.onload = function(){ ~~코드~~ }  <<  이게 뭐지? :

    document.getElementById("a"); 라는 코드는 a라는 id 인 태그를 가져옴. 그런데 그냥 이 코드를 이용해서 구현해보면 안될 것임.
    이유는.. html 파일 body 안에 해당 a id 태그가 js 파일보다 늦게 나타나기 때문임.

    무슨 이야기냐면 실행흐름 상 js 의 모든 코드가 먼저 실행되고 (태그 가져와라는 저 명령 포함) 그 후에 html body가 그려짐.
    이때 태그 가져와 명령시 가져올 수 있는 태그가 없음. 왜냐면 이 시점에 태그가 안 만들어졌기 때문.

    그래서 html이 다 그려지고 나서 js 가 실행되게 해야 말이되는데 이를 도와주는 게 저 window.onload = function() { ~~코드~~ } 임.
    { } 안에 쓴 코드는 html 의 body가 다 그려지고 나서 실행됨. 그래서 이제 해당 a id 태그를 읽어오는 것이 가능해지고 그거 가지고 이것 저것 할 수 있게 됨.

*/

// html 이 다 그려지고 나서 실행됨
window.onload = function() {

    var t = document.getElementById("a"); // a 라는 id 태그 요소를 가져옴

    var s = ""; // 초기값 설정

    while(true) { // 무한 루프

        s = prompt("값을 입력하세요 :"); // 입력 창

        if ( s == 100 ) {
            break; // 값이 100이면 탈출
        } else {
            t.innerHTML = "마지막 입력 값:" + s + "<br>"; // a 태그의 내부 공간
        }
    }

}


/*

var sum = 0 ;
var i = 1 ;

while ( i <= 10 ) {
    sum = sum + i;
    i++; // i = i + 1
}


             sum = 1
             i= 2

    1 + 2    sum = 3
    2 + 1    i= 3

    3 + 3    sum = 6
    3 + 1    i= 4

    6 + 4    sum = 10
    4 + 1    i= 5

    10 + 5   sum = 15
    5 + 1    i= 6

    15 + 6   sum = 21
    6 + 1    i= 7

    21 + 7   sum = 28
    7 + 1    i= 8

    28 + 8   sum = 36
    8 + 1    i= 9

    36 + 9   sum = 45
    9 + 1    i= 10

    45 + 10  sum = 55
    10 초과 계산 중지

alert ( sum ); // 1+2+3+4+5+6+7+8+9+10 = 55

*/