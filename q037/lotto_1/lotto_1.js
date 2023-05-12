/*
    -> 문제 37 - 로1

    로또
    *. 로또 복권 ???

    1~45 번 숫자 공에서 6개를 뽑아서 그걸로 당첨 여부를 확인하는 복권.
    보너스 번호도 추가로 뽑고 5개 맞추고 1개 틀렸지만 그 틀린 번호가 이 보너스 번호와 일치하면 2등.
    그냥 5개만 맞춘 사람은 3등임.

    그렇다고 이런거에 빠지진 마시고..
    사지도 마시고..

    lottoV0.1.0

    1. 컴퓨터가 1~45 수를 6개 뽑아서 출력 (중복 허용) -> 이 버전에서는 중복처리는 안함. 다른 버전에서 처리 예정

*/

var lotto = new Array(6);

function Lotto() {
    for ( i = 0 ; i < lotto.length ; i = i + 1 ) {
        lotto[i] = Math.floor(Math.random()*45+1);
        document.write(lotto[i]);
        document.write("<hr>");
    }
}

Lotto();

/*
    
    
*/