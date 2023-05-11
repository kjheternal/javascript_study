/*
    -> 문제 33

    가위, 바위, 보 게임

    v0.5.0

    - 컴퓨터와 유저의 가위 바위 보 를 이미지로도 표현

*/

var player = "";
var comValue = "";

var checkValue = false; // 예외 처리용 변수

var rpcInputText;
var rpcResultText;

var rpcResultString = "";

// div 이미지
var divImgPly;
var divImgCom;

window.onload = function() {
    rpcInputText = document.getElementById("rpc_text_area"); // html 입력창 불러오기
    rpcResultText = document.getElementById("rpc_resultscreen"); // html 결과창 불러오기

    divImgPly = document.getElementById("rpc_user");
    divImgCom = document.getElementById("rpc_com");
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

        divImgCom.innerHTML = "<img src='sc.png'>";
    } else if ( computer == 2 ) {
        comValue = "바위";

        divImgCom.innerHTML = "<img src='ro.png'>";
    } else if ( computer == 3 ) {
        comValue = "보";

        divImgCom.innerHTML = "<img src='pa.png'>";
    }

    // 텍스트 구역에 표시될 내용
    rpcResultString = "플레이어: " + player;
    rpcResultString = rpcResultString + "\n";
    rpcResultString = rpcResultString + "컴퓨터: " + comValue;
    rpcResultString = rpcResultString + "\n";

    // 결과 값
    if ( player == "가위" ) {
        divImgPly.innerHTML = "<img src='sc.png'>";

        if ( comValue == "가위" ) {
            rpcResultString = rpcResultString + "결과: 비겼습니다.";
        } else if ( comValue == "바위" ) {
            rpcResultString = rpcResultString + "결과: 졌습니다.";
        } else if ( comValue == "보" ) {
            rpcResultString = rpcResultString + "결과: 이겼습니다.";
        }

    } else if ( player == "바위" ) {
        divImgPly.innerHTML = "<img src='ro.png'>";
        
        if ( comValue == "가위" ) {
            rpcResultString = rpcResultString + "결과: 이겼습니다.";
        } else if ( comValue == "바위" ) {
            rpcResultString = rpcResultString + "결과: 비겼습니다.";
        } else if ( comValue == "보" ) {
            rpcResultString = rpcResultString + "결과: 졌습니다.";
        }

    } else if ( player == "보" ) {
        divImgPly.innerHTML = "<img src='pa.png'>";
        
        if ( comValue == "가위" ) {
            rpcResultString = rpcResultString + "결과: 졌습니다.";
        } else if ( comValue == "바위" ) {
            rpcResultString = rpcResultString + "결과: 이겼습니다.";
        } else if ( comValue == "보" ) {
            rpcResultString = rpcResultString + "결과: 비겼습니다.";
        }

    }

    rpcResultText.value = rpcResultString // 텍스트 공간에 값 삽입
}