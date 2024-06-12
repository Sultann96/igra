let pole = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let completed = false;
// 0- пустая клетка
// 1-крестик
// 2-нолик
const elem = document.querySelector("div");
const line = document.querySelector("span");
const line2 = document.querySelector("span:nth-child(2)");
const line3 = document.querySelector("span:nth-child(3)");
const line4 = document.querySelector("span:nth-child(4)");
const line5 = document.querySelector("span:nth-child(5)");
const line6 = document.querySelector("span:nth-child(6)");
const line7 = document.querySelector("span:nth-child(7)");
const line8 = document.querySelector("span:nth-child(8)");
let per = false;
const func = (event) => {
    // line();
    if (completed === true) {
        return;
        }
        if (event.target.classList.contains("image-container")) {
            // contains- проверяет наличие класса  желемент и возвращает булин
        // перестает превращать поле в крестик
        return;
        // прерывает функцию
        } else if (
            event.target.classList.contains("krestik") ||
            event.target.classList.contains("nolik")
            ) {
                return;
                }
                
                const index = Number(event.target.classList[0]);
                
                if (per === false) {
                    event.target.classList.add("krestik");
                    pole[index] = 1;
                    } else if (per === true) {
        event.target.classList.add("nolik");
        pole[index] = 2;
        }
        console.log(pole);
        per = !per;
        
        // нужно изменять 0 в массиве на 1 или2 сразу после как добавтл класс крестик или нолик
        checkGame();
};

/*
[
    0, 1, 2,
    3, 4, 5,
    6, 7, 8
]
*/

function checkGame() {
    // ситуации при которых игра кончится
    if(pole[0] === 1 && pole[1] === 1 && pole[2] === 1){
        line.style.display = "inline"
    } else if(pole[3] === 1 && pole[4] === 1 && pole[5] === 1) {
        line2.style.display = "inline"
    }else if(pole[6] === 1 && pole[7] === 1 && pole[8] === 1) {
        line3.style.display = "inline"
    }else if(pole[0] === 1 && pole[3] === 1 && pole[6] === 1){
        line4.style.display = "inline"
    }else if (pole[1] === 1 && pole[4] === 1 && pole[7] === 1){
        line5.style.display = "inline"
    }else if(pole[2] === 1 && pole[5] === 1 && pole[8] === 1) {
        line6.style.display = "inline"
    }else if(pole[0] === 1 && pole[4] === 1 && pole[8] === 1) {
        line7.style.display = "inline"
    }else if(pole[6] === 1 && pole[4] === 1 && pole[2] === 1) {
        line8.style.display = "inline"
    }else if(pole[0] === 2 && pole[1] === 2 && pole[2] === 2) {
        line.style.display = "inline"
    }else if(pole[3] === 2 && pole[4] === 2 && pole[5] === 2) {
        line2.style.display = "inline"
    }else if(pole[6] === 2 && pole[7] === 2 && pole[8] === 2) {
        line3.style.display = "inline"
    }else if(pole[0] === 2 && pole[3] === 2 && pole[6] === 2) {
        line4.style.display = "inline"
    }else if(pole[1] === 2 && pole[4] === 2 && pole[7] === 2) {
        line5.style.display = "inline"
    }else if(pole[2] === 2 && pole[5] === 2 && pole[8] === 2){
        line6.style.display = "inline"
    }else if(pole[0] === 2 && pole[4] === 2 && pole[8] === 2) {
        line7.style.display = "inline"
    }else if(pole[6] === 2 && pole[4] === 2 && pole[2] === 2){
        line8.style.display = "inline"
    }
    // {
    //     completed = true;
    // } // конец игры
}

elem.addEventListener("click", func);
