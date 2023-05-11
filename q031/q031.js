/*
    -> 문제 31

    가위, 바위, 보 게임

    v0.3.0

    - 유저 가위바위보 입력을 입력창에서 받도록 수정
    ( 프롬프트 사용 X )

*/

// var player = prompt("가위 바위 보 중에 하나를 입력 하세요:");
var player = "";
var comValue = "";

var checkValue = false;

var rpcInputText;

window.onload = function() {

    rpcInputText = document.getElementById("rpc_text_area"); // html 입력창 불러오기

}

function rpcConfirmButtonClick() {
    while( true ) {
        player = rpcInputText.value // 입력창에서 입력한 값을 불러옴

        if ( player == "가위" || player == "바위" || player == "보" ) {
            checkValue = true;
            break;
        } else {
            alert("올바른 값을 넣어주세요.");
            checkValue = false;
            break;
        }
    }

    // 잘못된 값 입력 ( 예외 처리 )
    if ( !checkValue ) {
        return dw("잘못된 값을 입력해 게임이 취소됨!");
    }

    // 컴퓨터 가위 바위 보 값 고르는 중...
    var computer = Math.floor( Math.random() * 3 ) + 1;

    if ( computer == 1 ) {
        comValue = "가위";

        dw("컴퓨터가 가위를 냈습니다.");
        br();
    } else if ( computer == 2 ) {
        comValue = "바위";

        dw("컴퓨터가 바위를 냈습니다.");
        br();
    } else if ( computer == 3 ) {
        comValue = "보";

        dw("컴퓨터가 보를 냈습니다.");
        br();
    }

    // 결과 값
    if ( player == "가위" && comValue == "가위" ) {
        dw("결과 : 비겼습니다.");
    } else if ( player == "가위" && comValue == "바위" ) {
        dw("결과 : 졌습니다.");
    } else if ( player == "가위" && comValue == "보" ) {
        dw("결과 : 이겼습니다.");
    }

    if ( player == "바위" && comValue == "가위" ) {
        dw("결과 : 이겼습니다.");
    } else if ( player == "바위" && comValue == "바위" ) {
        dw("결과 : 비겼습니다.");
    } else if ( player == "바위" && comValue == "보" ) {
        dw("결과 : 졌습니다.");
    }

    if ( player == "보" && comValue == "가위" ) {
        dw("결과 : 졌습니다.");
    } else if ( player == "보" && comValue == "바위" ) {
        dw("결과 : 이겼습니다.");
    } else if ( player == "보" && comValue == "보" ) {
        dw("결과 : 비겼습니다.");
    }

}