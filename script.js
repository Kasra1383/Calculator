const sum = function(arraySum) {
    return arraySum.reduce((total, current) => total + current, 0);
};

const subtract = function(arraySubtract) {
    return arraySubtract.reduce((total, current) => total - current, 0);
};

const divide = function(arrayDivide) {
    return arrayDivide.length
        ? arrayDivide.reduce((accumulator, nextItem) => accumulator / nextItem)
        : 0;
};

const multiply = function(arrayMultiply) {
    return arrayMultiply.length
        ? arrayMultiply.reduce((accumulator, nextItem) => accumulator * nextItem)
        : 0;
};

let nums = []
let clone = []
let displayNumsContainer = []
function operate(operator, nums) {
    return operator(nums)
}


function makeCalcGrid(){
    const calcNumGrid = document.querySelector(".calcNumGrid")
    const displayContainer = document.querySelector('.screen')

    for (i=1; i<10; i++){
        const buttons = document.createElement("button")
        buttons.classList.add('buttons')
        buttons.classList.add("buttons"+i)
        buttons.textContent = i
        buttons.addEventListener('click', ()=>{
            displayNumsContainer.push(buttons.innerText)
            clone.push(buttons.innerText)
            displayContainer.textContent = displayNumsContainer.toString().replaceAll(",", "")
        })
        calcNumGrid.appendChild(buttons)
    }


    const buttonZero = document.createElement("button")
    buttonZero.classList.add('buttons')
    buttonZero.textContent = "0"
    buttonZero.addEventListener('click', ()=>{
        displayNumsContainer.push(buttonZero.innerText)
        displayContainer.textContent = displayNumsContainer.toString().replaceAll(",", "")
    })
    calcNumGrid.appendChild(buttonZero)

    const buttonClear = document.createElement("button")
    buttonClear.classList.add('buttons')
    buttonClear.textContent = "Clear"
    buttonClear.addEventListener('click', ()=>{
        displayNumsContainer.length = 0
        nums.length = 0
        clone.length = 0
        displayContainer.textContent = ""
    })
    calcNumGrid.appendChild(buttonClear)

    for(i=1; i<5; i++){
        const operatorButtonsOne = document.querySelector(`.sideButtons${i}`)
        operatorButtonsOne.addEventListener('click', ()=>{
            displayNumsContainer.push(operatorButtonsOne.innerText)
            if (clone.length != 0) {
                nums.push(clone.toString().replaceAll(',', ""))
                clone.length = 0
            }
            if (operatorButtonsOne.innerText == "+") {
                nums.push(sum)
                console.log(nums)
            } else if(operatorButtonsOne.innerText == "-") {
                nums.push(subtract)
            } else if(operatorButtonsOne.innerText == "x") {
                nums.push(multiply)
            } else if(operatorButtonsOne.innerText == "/") {
                nums.push(divide)
            } else {return}
            displayContainer.textContent = displayNumsContainer.toString().replaceAll(",", "")
        })
    }
}
makeCalcGrid()

window.addEventListener('keydown', (e)=>{
    if (e.keyCode == 13) {
        for(i=0; i<nums.length; i+=3) {
        
        }
    }
})

//Create a function
//Create a clone array of displayNumsContainer
//On the eventListener of the operator buttons, make it so that on click the contents in the clone of displayNums container are joined together as one number
//and pushed into the nums array and clear the clone array too
//After, make the button add the operator name to the clone and push it to the operator array




