const resultstr = document.getElementById("resultstr");

let resultarr = [];

for (var i=1; i<11; i++){
    if(sessionStorage.getItem(`${i}번 문제`)){
        resultarr[i-1] = sessionStorage.getItem(`${i}번 문제`);
       }
}

function printResult() {
    for (var i=1; i<11; i++){
        document.getElementById(`result-time${i}`).innerText += resultarr[i-1];
    }
}

printResult();