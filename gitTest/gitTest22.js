/*
   git Test

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