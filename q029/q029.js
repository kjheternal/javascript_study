/*
    -> 문제 29

    가위, 바위, 보 게임

    플레이어 : 각각 prompt 로 가위, 바위, 보 입력 하는 방식으로 해서 구현 조건문..
    컴퓨터 : 랜덤


*/

window.onload = function() {

    var player = prompt("가위 바위 보 중에 하나를 입력 하세요:");
    var computer = Math.floor( Math.random() * 3 ) + 1;
    var comValue = "";

    function startRPC() {
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

    startRPC();
    result();
}