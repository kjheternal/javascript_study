/*
    -> 문제 37 - 로10

    로또
    *. 로또 복권 ???

    lottoV0.1.0

    맞은갯수에 맞춰 등수도 출력하기

    0~2개가 일치하면 꽝입니다. 출력
    3개가 일치하면 5등입니다.
    4개 4등
    5개 3등
    6개 1등

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

br();

if ( complete <= 2 ) {
    dw(complete + " 개 일치 꽝 입니다!");
} else if ( complete == 3 ) {
    dw(complete + " 개 일치 5등 입니다!");
} else if ( complete == 4 ) {
    dw(complete + " 개 일치 4등 입니다!");
} else if ( complete == 5 ) {
    dw(complete + " 개 일치 3등 입니다!");
} else if ( complete == 6 ) {
    dw(complete + " 개 일치 1등 입니다!");
}

/*
    ////////////////////////////////////////////////////////
    // 몇개 맞췄는지에 따라 등수 출력하기
    ///////////////////////////////////////////////////////
    /var str = "";
    switch(win){
        case 0:
        case 1:
        case 2:
            str = "꽝!!! 다음기회에";
            break;
        case 3:
            str = "5등에 당첨되셨습니다.";
            break;
        case 4:
            str = "4등에 당첨되셨습니다.";
            break;
        case 5:
            str = "3등에 당첨되셨습니다.";
            break;
        case 6:
            str = "1등에 당첨되셨습니다.";
            break;        
    }
    document.write(str);
    
*/