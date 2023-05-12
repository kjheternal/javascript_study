/*
    -> 문제 37 - 로8

    로또
    *. 로또 복권 ???

    lottoV0.1.0

    컴 번호들을 기존 일반변수에서 배열로 바꾸기

*/

var complete = 0;

var myNumber = [12, 5, 8, 27, 40, 33];

var comNumber = [0, 0, 0, 0, 0, 0];

comNumber[0] = rand(1, 45);
dw(comNumber[0]);
br();

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

// 1번 숫자
if ( myNumber[0] == comNumber[0] ) {
    complete = complete + 1;
}

if ( myNumber[0] == comNumber[1] ) {
    complete = complete + 1;
}

if ( myNumber[0] == comNumber[2] ) {
    complete = complete + 1;
}

if ( myNumber[0] == comNumber[3] ) {
    complete = complete + 1;
}

if ( myNumber[0] == comNumber[4] ) {
    complete = complete + 1;
}

if ( myNumber[0] == comNumber[5] ) {
    complete = complete + 1;
}

// 2번 숫자
if ( myNumber[1] == comNumber[0] ) {
    complete = complete + 1;
}

if ( myNumber[1] == comNumber[1] ) {
    complete = complete + 1;
}

if ( myNumber[1] == comNumber[2] ) {
    complete = complete + 1;
}

if ( myNumber[1] == comNumber[3] ) {
    complete = complete + 1;
}

if ( myNumber[1] == comNumber[4] ) {
    complete = complete + 1;
}

if ( myNumber[1] == comNumber[5] ) {
    complete = complete + 1;
}

// 3번 숫자
if ( myNumber[2] == comNumber[0] ) {
    complete = complete + 1;
}

if ( myNumber[2] == comNumber[1] ) {
    complete = complete + 1;
}

if ( myNumber[2] == comNumber[2] ) {
    complete = complete + 1;
}

if ( myNumber[2] == comNumber[3] ) {
    complete = complete + 1;
}

if ( myNumber[2] == comNumber[4] ) {
    complete = complete + 1;
}

if ( myNumber[2] == comNumber[5] ) {
    complete = complete + 1;
}

// 4번 숫자
if ( myNumber[3] == comNumber[0] ) {
    complete = complete + 1;
}

if ( myNumber[3] == comNumber[1] ) {
    complete = complete + 1;
}

if ( myNumber[3] == comNumber[2] ) {
    complete = complete + 1;
}

if ( myNumber[3] == comNumber[3] ) {
    complete = complete + 1;
}

if ( myNumber[3] == comNumber[4] ) {
    complete = complete + 1;
}

if ( myNumber[3] == comNumber[5] ) {
    complete = complete + 1;
}

// 5번 숫자
if ( myNumber[4] == comNumber[0] ) {
    complete = complete + 1;
}

if ( myNumber[4] == comNumber[1] ) {
    complete = complete + 1;
}

if ( myNumber[4] == comNumber[2] ) {
    complete = complete + 1;
}

if ( myNumber[4] == comNumber[3] ) {
    complete = complete + 1;
}

if ( myNumber[4] == comNumber[4] ) {
    complete = complete + 1;
}

if ( myNumber[4] == comNumber[5] ) {
    complete = complete + 1;
}

// 6번 숫자
if ( myNumber[5] == comNumber[0] ) {
    complete = complete + 1;
}

if ( myNumber[5] == comNumber[1] ) {
    complete = complete + 1;
}

if ( myNumber[5] == comNumber[2] ) {
    complete = complete + 1;
}

if ( myNumber[5] == comNumber[3] ) {
    complete = complete + 1;
}

if ( myNumber[5] == comNumber[4] ) {
    complete = complete + 1;
}

if ( myNumber[5] == comNumber[5] ) {
    complete = complete + 1;
}



dw(complete + " 개의 로또 일치");

/*
    
    
*/