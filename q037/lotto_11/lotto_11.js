/*
    -> 문제 37 - 로11

    로또
    *. 로또 복권 ???

    lottoV0.1.0

    기존 랜덤 번호들 외에 보너스 번호를 하나 추가로 뽑게 하고 이 번호도 기존 번호들과 중복되면 다시뽑게하기

*/

var complete = 0;

var myNumber = [12, 5, 8, 27, 40, 33];

var comNumber = [0, 0, 0, 0, 0, 0];

var comNumberBonus = 0;

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

while( true ) {

    comNumberBonus = rand(1, 45);

    if ( comNumberBonus != comNumber[0] && comNumberBonus != comNumber[1] && comNumberBonus != comNumber[2] && comNumberBonus != comNumber[3] && comNumberBonus != comNumber[4] && comNumberBonus != comNumber[5] ) {
        dw("BONUS : " + comNumberBonus);
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
    ////    보너스번호
    var b = 0;
    while(true){
        b = Math.floor(Math.random() * 45) + 1; // 1 ~ n 까지 범위내에서 랜덤하게 숫자 하나 뽑아주는 애.
        if(b != r[0] && b != r[1] && b != r[2] && b != r[3] && b != r[4] && b != r[5]){
            document.write("보너스번호:"+b);
            document.write("<br>");
            break;
        }
    }
    
*/