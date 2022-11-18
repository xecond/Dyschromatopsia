let timerId;
let time = 0;
const stopwatch = document.getElementsByClassName("stopwatch");
let  hour, min, sec;

let inputval1 = document.getElementById('input1').value;
let inputval2 = document.getElementById('input2').value;
let inputval3 = document.getElementById('input3').value;
let inputval4 = document.getElementById('input4').value;

// 시간 출력
function printTime() {
    time++;
    stopwatch[0].innerText = getTimeFormatString();
}

// 시계 시작 - 재귀호출로 반복실행
function startClock() {
    printTime();
    stopClock();
    timerId = setTimeout(startClock, 1000);
}

// 시계 중지
function stopClock() {
    if (timerId != null) {
        clearTimeout(timerId);
    }

    //저장
    // var save1 = stopwatch[0].innerText;
}

// 시간(int)을 시, 분, 초 문자열로 변환
function getTimeFormatString() {
    hour = parseInt(String(time / (60 * 60)));
    min = parseInt(String((time - (hour * 60 * 60)) / 60));
    sec = time % 60;

    return String(hour).padStart(2, '0') + ":" + String(min).padStart(2, '0') + ":" + String(sec).padStart(2, '0');
}

startClock();