var a = true;
let arr_id = ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9"];
let bt = [];
let flag = true;
let winO = 0;
let winX = 0;

function nol(obj) {
    if (a == true && document.getElementById(obj).textContent == "" && flag == true) {
        document.getElementById(obj).textContent = "X";
        a = false;
    }
    else if (a == false && document.getElementById(obj).textContent == "" && flag == true) {
        document.getElementById(obj).textContent = "O";
        a = true;
    }


    if (flag == true) {
        check();
    }

    function check() {
        for (let i = 0; i < 9; i++) {
            bt[i] = document.getElementById(arr_id[i]);
        }

        if (bt[0].textContent == bt[1].textContent && bt[0].textContent == bt[2].textContent && bt[0].textContent != "") {
            if (bt[0].textContent == "X"){
                for (let i = 0; i < 3; i++) {
                    bt[i].style.backgroundColor = "blue";
                }
            flag = false;
            winX++;
        }
            if (bt[0].textContent == "O") {
                for (let i = 0; i < 3; i++) {
                    bt[i].style.backgroundColor = "purple";
                }
                flag = false;
                winO++;
            }
        }
        if (bt[3].textContent == bt[4].textContent && bt[3].textContent == bt[5].textContent && bt[3].textContent != "") {
            if (bt[3].textContent == "X") {
                for (let i = 3; i < 6; i++) {
                    bt[i].style.backgroundColor = "blue";
                }
                flag = false;
                winX++;
            }
            if (bt[3].textContent == "O") {
                for (let i = 3; i < 6; i++) {
                    bt[i].style.backgroundColor = "purple";
                }
                flag = false;
                winO++;
            }
        }
        if (bt[6].textContent == bt[7].textContent && bt[6].textContent == bt[8].textContent && bt[6].textContent != "") {
            if (bt[6].textContent == "X") {
                for (let i = 6; i < 9; i++) {
                    bt[i].style.backgroundColor = "blue";
                }
                flag = false;
                winX++;
            }
            if (bt[6].textContent == "O") {
                for (let i = 6; i < 9; i++) {
                    bt[i].style.backgroundColor = "purple";
                }
                flag = false;
                winO++;
            }
        }
        if (bt[0].textContent == bt[3].textContent && bt[0].textContent == bt[6].textContent && bt[0].textContent != "") {
            if (bt[0].textContent == "X") {
                for (let i = 0; i <= 6; i += 3) {
                    bt[i].style.backgroundColor = "blue";
                }
                flag = false;
                winX++;
            }
            if (bt[0].textContent == "O") {
                for (let i = 0; i <= 6; i += 3) {
                    bt[i].style.backgroundColor = "purple";
                }
                flag = false;
                winO++;
            }
        }
        if (bt[1].textContent == bt[4].textContent && bt[1].textContent == bt[7].textContent && bt[1].textContent != "") {
            if (bt[1].textContent == "X") {
                for (let i = 1; i <= 7; i += 3) {
                    bt[i].style.backgroundColor = "blue";
                }
                flag = false;
                winX++;
            }
            if (bt[1].textContent == "O") {
                for (let i = 1; i <= 7; i += 3) {
                    bt[i].style.backgroundColor = "purple";
                }
                flag = false;
                winO++;
            }
        }
        if (bt[2].textContent == bt[5].textContent && bt[2].textContent == bt[8].textContent && bt[2].textContent != "") {
            if (bt[2].textContent == "X") {
                for (let i = 2; i <= 8; i += 3) {
                    bt[i].style.backgroundColor = "blue";
                }
                flag = false;
                winX++;
            }
            if (bt[2].textContent == "O") {
                for (let i = 2; i <= 8; i += 3) {
                    bt[i].style.backgroundColor = "purple";
                }
                flag = false;
                winO++;
            }
        }
        if (bt[0].textContent == bt[4].textContent && bt[0].textContent == bt[8].textContent && bt[0].textContent != "") {
            if (bt[0].textContent == "X") {
                for (let i = 0; i <= 8; i += 4) {
                    bt[i].style.backgroundColor = "blue";
                }
                flag = false;
                winX++;
            }
            if (bt[0].textContent == "O") {
                for (let i = 0; i <= 8; i += 4) {
                    bt[i].style.backgroundColor = "purple";
                }
                flag = false;
                winO++;
            }
        }
        if (bt[2].textContent == bt[4].textContent && bt[2].textContent == bt[6].textContent && bt[2].textContent != "") {
            if (bt[2].textContent == "X") {
                for (let i = 2; i <= 6; i += 2) {
                    bt[i].style.backgroundColor = "blue";
                }
                flag = false;
                winX++;
            }
            if (bt[2].textContent == "O") {
                for (let i = 2; i <= 6; i += 2) {
                    bt[i].style.backgroundColor = "purple";
                }
                flag = false;
                winO++;
            }
        }
        result();
    } 
    function result(){
        document.getElementById("winO").textContent="Wins of O:"+" "+winO;
        document.getElementById("winX").textContent="Wins of X:"+" "+winX;
    }
}
function cle(){
    flag = true;
    a = true;
    for(let i = 0;i <=9; i++){
        bt[i].textContent = "";
        bt[i].style.backgroundColor = "aqua";
    }
}

function clew(){
    winO = 0;
    winX = 0;
}