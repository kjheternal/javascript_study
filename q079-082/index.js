/*
    -> 문제 79 ~ 82

    // 이전 문제와 계속 이어감

    1.html 에서 이 입력 항목들은 글자수를 제한하여 입력하게 처리하기
    2.js 에서 입력 값들을 검사 처리

    입력한 값들을 팝업에 출력

    암호와 재확인 암호가 같은지도 체크 처리
    각 체크에 대해 성공 실패 여부를 로그 남기기

    1.github에 런칭
    2.url 링크 걸기
*/

var divTag; // Div 값 변수

var login_ID;
var login_PW;

window.onload = function() {

    divTag = document.getElementById("login");

    login_ID = document.getElementById("login_id");
    login_PW = document.getElementById("login_pw");

    // div 태그 css 스타일 삽입
    divTag.style.display = "flex"; // 중앙 정렬
    divTag.style.justifyContent = "center"; // 중앙 정렬
    divTag.style.alignItems = "center"; // 중앙 정렬

    divTag.style.backgroundColor = "pink";
    divTag.style.width = "420px";
    divTag.style.height = "210px";

    divTag.style.borderStyle = "solid";
    divTag.style.borderColor = "black";
    divTag.style.borderWidth = "2px";
    divTag.style.borderRadius = "10px";

    divTag.style.boxShadow = "5px 5px 5px";

}

function loginConfirm() {

    var ID = login_ID.value;
    var PW = login_PW.value;
    
    if ( ID == "고양이" && PW == "1234" ) {
        alert("로그인 성공!");

        divTag.innerHTML = ID + " 회원님 반갑습니다!";
    } else {
        alert("로그인 실패...");
    }

}

/* 
    var str_id = "";
    var str_pw = "";

    var input_id;
    var input_pw;

    window.onload = function(){ // html 문서가 다 읽어진 후에 실행되는 함수임. 이걸 써야 아래 h1 태그(id=a)에 대한 접근이 가능해짐


        input_id = document.getElementById("id");
        input_pw = document.getElementById("pw");

    //todo

        // str_id = input_id.value;
        // str_pw = input_pw.value;

        

    }

    function login(){

        // alert("id:"+str_id+" pw:"+str_pw);
        // alert("id:"+input_id.value+" pw:"+input_pw.value);

        var local_id = input_id.value;
        var local_pw = input_pw.value;

        if(local_id == "cat" && local_pw == "1234"){
            alert("로그인 성공");
        }else{
            alert("로그인 실패");
        }
    }

*/