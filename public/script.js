function searchName(){

const name = document.getElementById("name").value

if(!name){
alert("Digite seu nome")
return
}

localStorage.setItem("guestName", name)

window.location.href = "/confirm.html"

}


async function confirmPresence(){

const name = localStorage.getItem("guestName")
const companions = document.getElementById("companions").value

await fetch("/confirm", {

method: "POST",

headers: {
"Content-Type": "application/json"
},

body: JSON.stringify({
name,
companions
})

})

window.location.href = "/success.html"

}

function goBack(){
window.location.href = "/"
}

let companions = 0
const maxCompanions = 2

function updateDisplay(){

document.getElementById("companionsDisplay").innerText = companions
document.getElementById("companions").value = companions

}

function increase(){

if(companions < maxCompanions){
companions++
updateDisplay()
}

}

function decrease(){

if(companions > 0){
companions--
updateDisplay()
}

}