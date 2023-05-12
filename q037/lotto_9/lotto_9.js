/*
    -> 문제 37 - 로9

    로또
    *. 로또 복권 ???

    lottoV0.1.0

    기존 컴퓨터의 6개의 숫자랑 내꺼랑 비교해서 몇개가 일치하는 지 세는 작업을 반복문으로 처리

*/

var complete = 0;

var myNumber = [12, 5, 8, 27, 40, 33];

var comNumber = [0, 0, 0, 0, 0, 0];

comNumber[0] = rand(1, 45);
dw(comNumber[0]);
br();

// 중복 제거 2 ~ 6 자리

while( true ) {
    
    comNumber[1] = rand(1, 45);

    if ( comNumber[1] != comNumber[0] ) {
        dw(comNumber[1]);
        br();
        break;
    }

}

while( true ) {

    comNumber[2] = rand(1, 45);

    if ( comNumber[2] != comNumber[0] && comNumber[2] != comNumber[1] ) {
        dw(comNumber[2]);
        br();
        break;
    }

    /* 
        // case 2
        if ( r3 != r1 ) {
            if ( r3 != r2 ) {
                dw(r3);
                br();
                break;
            }
        }
    */
}

while( true ) {

    comNumber[3] = rand(1, 45);

    if ( comNumber[3] != comNumber[0] && comNumber[3] != comNumber[1] && comNumber[3] != comNumber[2] ) {
        dw(comNumber[3]);
        br();
        break;
    }
}

while( true ) {

    comNumber[4] = rand(1, 45);

    if ( comNumber[4] != comNumber[0] && comNumber[4] != comNumber[1] && comNumber[4] != comNumber[2] && comNumber[4] != comNumber[3] ) {
        dw(comNumber[4]);
        br();
        break;
    }
}

while( true ) {

    comNumber[5] = rand(1, 45);

    if ( comNumber[5] != comNumber[0] && comNumber[5] != comNumber[1] && comNumber[5] != comNumber[2] && comNumber[5] != comNumber[3] && comNumber[5] != comNumber[4] ) {
        dw(comNumber[5]);
        br();
        break;
    }
}


// 일치하는지 반복문으로 처리

for ( var i = 0; i < myNumber.length; i = i + 1 ) {
    for ( var j = 0; j < comNumber.length; j = j + 1 ) {
        if ( myNumber[i] == comNumber[j]) {
            complete = complete + 1;
        }
    }
}



dw(complete + " 개의 로또 일치");

/*
    //컴퓨터의 6개의 숫자랑 내꺼랑 비교해서 몇개가 일치하는 지 세는 작업을 반복문으로 처리
    
    for(var i=0;i<=5;i=i+1){
        for(var j=0;j<=5;j=j+1){
            if(p[i]==r[j]){
                win = win + 1;
            }
        }
    }
    
*/