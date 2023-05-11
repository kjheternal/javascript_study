/*
    -> 문제 30

    가위, 바위, 보 게임

    v0.2.0

    - 유저 가위바위보 입력 시 예외처리 추가

*/

window.onload = function() {

    var player = prompt("가위 바위 보 중에 하나를 입력 하세요:");
    var checkValue = false;
    var comValue = "";

    function inputPlayerValue() {
        while( true ) {
            if ( player == "가위" || player == "바위" || player == "보" ) {
                checkValue = true;
                break;
            } else {
                alert("올바른 값을 넣어주세요.");
                checkValue = false;
                break;
            }
        }
    }

    function startRPC() {
        if ( !checkValue ) {
            return document.write("잘못된 값을 입력해 게임이 취소됨!");
        }

        var computer = Math.floor( Math.random() * 3 ) + 1;

        if ( computer == 1 ) {
            comValue = "가위";

            document.write("컴퓨터가 가위를 냈습니다.");
            br();
        } else if ( computer == 2 ) {
            comValue = "바위";

            document.write("컴퓨터가 바위를 냈습니다.");
            br();
        } else if ( computer == 3 ) {
            comValue = "보";

            document.write("컴퓨터가 보를 냈습니다.");
            br();
        }
    }

    function result() {
        if ( !checkValue ) {
            return false
        }

        if ( player == "가위" && comValue == "가위" ) {
            document.write("결과 : 비겼습니다.");
        } else if ( player == "가위" && comValue == "바위" ) {
            document.write("결과 : 졌습니다.");
        } else if ( player == "가위" && comValue == "보" ) {
            document.write("결과 : 이겼습니다.");
        }

        if ( player == "바위" && comValue == "가위" ) {
            document.write("결과 : 이겼습니다.");
        } else if ( player == "바위" && comValue == "바위" ) {
            document.write("결과 : 비겼습니다.");
        } else if ( player == "바위" && comValue == "보" ) {
            document.write("결과 : 졌습니다.");
        }

        if ( player == "보" && comValue == "가위" ) {
            document.write("결과 : 졌습니다.");
        } else if ( player == "보" && comValue == "바위" ) {
            document.write("결과 : 이겼습니다.");
        } else if ( player == "보" && comValue == "보" ) {
            document.write("결과 : 비겼습니다.");
        }

    }

    inputPlayerValue();
    startRPC();
    result();
}