/*
    -> 문제 32

    가위, 바위, 보 게임

    v0.3.0

    - 결과 출력 화면을 dw()가 아닌 출력화면용 textarea에 출력하도록 개선

    (가위바위보 게임을 단판이 아닌 무한으로 가능해졌음)

*/

var player = "";
var comValue = "";

var checkValue = false; // 예외 처리용 변수

var rpcInputText;
var rpcResultText;

var rpcResultString = "";

window.onload = function() {
    rpcInputText = document.getElementById("rpc_text_area"); // html 입력창 불러오기
    rpcResultText = document.getElementById("rpc_resultscreen"); // html 결과창 불러오기
}

function rpcConfirmButtonClick() {
    while( true ) {
        player = rpcInputText.value // 입력창에서 입력한 값을 불러옴

        if ( player == "가위" || player == "바위" || player == "보" ) {
            checkValue = true;
            break;
        } else {
            checkValue = false;
            break;
        }
    }

    // 잘못된 값 입력 ( 예외 처리 )
    if ( !checkValue ) {
        return rpcResultText.value = "올바른 값을 입력해주세요.";
    }

    // 컴퓨터 가위 바위 보 값 고르는 중...
    var computer = Math.floor( Math.random() * 3 ) + 1;

    if ( computer == 1 ) {
        comValue = "가위";
    } else if ( computer == 2 ) {
        comValue = "바위";
    } else if ( computer == 3 ) {
        comValue = "보";
    }

    // 텍스트 구역에 표시될 내용
    rpcResultString = "플레이어: " + player;
    rpcResultString = rpcResultString + "\n";
    rpcResultString = rpcResultString + "컴퓨터: " + comValue;
    rpcResultString = rpcResultString + "\n";

    // 결과 값
    if ( player == "가위" && comValue == "가위" ) {
        rpcResultString = rpcResultString + "결과: 비겼습니다.";
    } else if ( player == "가위" && comValue == "바위" ) {
        rpcResultString = rpcResultString + "결과: 졌습니다.";
    } else if ( player == "가위" && comValue == "보" ) {
        rpcResultString = rpcResultString + "결과: 이겼습니다.";
    }

    if ( player == "바위" && comValue == "가위" ) {
        rpcResultString = rpcResultString + "결과: 이겼습니다.";
    } else if ( player == "바위" && comValue == "바위" ) {
        rpcResultString = rpcResultString + "결과: 비겼습니다.";
    } else if ( player == "바위" && comValue == "보" ) {
        rpcResultString = rpcResultString + "결과: 졌습니다.";
    }

    if ( player == "보" && comValue == "가위" ) {
        rpcResultString = rpcResultString + "결과: 졌습니다.";
    } else if ( player == "보" && comValue == "바위" ) {
        rpcResultString = rpcResultString + "결과: 이겼습니다.";
    } else if ( player == "보" && comValue == "보" ) {
        rpcResultString = rpcResultString + "결과: 비겼습니다.";
    }

    rpcResultText.value = rpcResultString // 텍스트 공간에 값 삽입
}