/*
    -> 문제 37 - 로12

    로또
    *. 로또 복권 ???

    lottoV0.1.0

    보너스 번호로 3등 당첨자 중 2등을 가려내기
    2등은 3등 당첨자만 대상으로 함
    5개를 맞추고 틀린 한 번호가 보너스 번호와 일치하면 2등임 <<< 2등 규칙.
    2등이면 2등입니다. 를 출력하기

    -> 문제 37 - 로13

    2등 당첨 케이스를 디버깅을 통해서 값 조작을 이용해서 테스트하기

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

var bonusCheck = false;

if ( complete <= 2 ) {
    dw(complete + " 개 일치 꽝 입니다!");
} else if ( complete == 3 ) {
    dw(complete + " 개 일치 5등 입니다!");
} else if ( complete == 4 ) {
    dw(complete + " 개 일치 4등 입니다!");
} else if ( complete == 5 ) {
    for ( var i = 0; i < myNumber.length; i = i + 1 ) {
        if ( comNumberBonus == myNumber[i] ) {
            dw(complete + " 개 일치 보너스 번호 " + comNumberBonus + " 일치 2등 입니다!");
            bonusCheck = true;
            break;
        }
    }

    if ( !bonusCheck ) {
        dw(complete + " 개 일치 3등 입니다!");
    }
} else if ( complete == 6 ) {
    dw(complete + " 개 일치 1등 입니다!");
}

/*
    var win = 0;    //내가 맞춘 수

    //컴퓨터의 6개의 숫자랑 내꺼랑 비교해서 몇개가 일치하는 지 세는 작업을 반복문으로 처리
    for(var i=0;i<=5;i=i+1){
        for(var j=0;j<=5;j=j+1){
            if(p[i]==r[j]){
                win = win + 1;
            }
        }
    }

    ////////////////////////////////////////////////////////
    // 몇개 맞췄는지 출력
    ////////////////////////////////////////////////////////
    document.write("맞은 번호 갯수:"+win+"<br>");

    ////////////////////////////////////////////////////////
    // 몇개 맞췄는지에 따라 등수 출력하기
    ////////////////////////////////////////////////////////
    var str = "";
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
            //2등 처리
            for(var i=0;i<6;i=i+1){
                if(b==p[i]){    // 보너스 번호가 3등 당첨 유저의 나머지 한번호와 일치하는경우
                    // 2등 처리
                    str = "2등에 당첨되셨습니다.";
                }
            }
            break;
        case 6:
            str = "1등에 당첨되셨습니다.";
            break;        
    }
    document.write(str);
    
*/