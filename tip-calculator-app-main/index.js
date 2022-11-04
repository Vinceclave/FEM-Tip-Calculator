const inputBill = document.getElementById("enter-bill")
const inputNumberPeople = document.getElementById("number-people")
const customTip = document.getElementById("enter-custom-tip")
const tipAmountTotal = document.getElementById("tip-total")
const totalPerPerson = document.getElementById("total-per-person")
const tipButton = document.querySelectorAll(".tips")
const removeButton = document.querySelector(".reset")

let errorArea = document.querySelector("error")

// input declaration variables
let getTip = 0
let getBill = 0
let getPeople = 0


// Removing and Adding Active Buttons

// Adding
tipButton.forEach(buttons => {
    buttons.addEventListener('click', (e) => {
        removeActive()
        buttons.classList.add("active")
        if(buttons.value != "") {
            getTip = buttons.value
            removeButton.classList.add("active")
            getBillinput()            
            calculate()
        } else {
            getTip = 0
        }
        customTip.value = ""
        removeButton.classList.add("active")
        calculate()
    })
})




removeButton.addEventListener('click', resetAll)

// Removing
function removeActive() {
    tipButton.forEach(buttons => {
        buttons.classList.remove("active")
})
}

// calculate all the respective variables
function calculate() {
    if (getBill > 0 && getPeople != 0) {
        let totalTip = (getBill * (getTip / 100)) / getPeople
        let totalBill =  totalTip + (getBill / getPeople)
        tipAmountTotal.innerText = `$${totalTip.toFixed(2)}`
        totalPerPerson.innerText = `$${totalBill.toFixed(2)}`
    } else {
        tipAmountTotal.innerText =  "$0.00"
        totalPerPerson.innerText =  "$0.00"
    }
}




// custom tip button 
customTip.addEventListener("input", function() {
    if (customTip.value >= 0) {
        getTip = customTip.value
        calculate()
    }
})


// display bill value
inputBill.addEventListener('input', getBillinput)



// display number of people value
inputNumberPeople.addEventListener('input', getTotalPeople)
let isTipEmpty = inputNumberPeople
isTipEmpty.addEventListener('click', isEmpty)





// functionality of the website 


function isEmpty() {
    if (getTip === 0) {
      alert("Select a tip")    
    } else {
        console.log("true")
    }
    
}
function getBillinput() {
    getBill = Number(inputBill.value)
    if (getBill !== 0) {
        removeButton.classList.add("active")
         document.querySelector(".errorBill").classList.remove("show")
        document.querySelector(".error").classList.add("show")
    }  else {
         document.querySelector(".errorBill").classList.add("show")
         }
    calculate()
}

function getTotalPeople() {
    getPeople = Number(inputNumberPeople.value)
    calculate()
    if (getPeople === 0 ) {
        document.querySelector(".error").classList.add("show")
    } else {
        removeButton.classList.add("active")
        document.querySelector(".error").classList.remove("show")
    }
    isEmpty()
}

function resetAll() {
    if(getBill !== 0 || getTip !== 0 || getPeople !== 0 || getBill === 0) {
        inputBill.value = ""
        inputNumberPeople.value = ""
        buttons = ""
        customTip.value = ""
        document.querySelector(".error").classList.remove("show")
        document.querySelector(".errorBill").classList.remove("show")
        removeActive()
        removeButton.classList.remove("active")
        tipAmountTotal.innerText =  "$0.00"
        totalPerPerson.innerText =  "$0.00"
    }
}