function question1() {
    var answer1 = document.getElementById("question1").value
    var anies = document.getElementById("3")
    if(answer1 === "bee" || answer1 === "Bee" || answer1 === "Be" || answer1 === "be") {
        anies.style.backgroundColor = "#26961e"
        anies.style.color = "#26961e"
        document.getElementById("questionC1").classList.add("hidden")
        document.getElementById("questionC2").classList.remove("hidden")
    } else {
        document.getElementById("button1").style.backgroundColor = "#b5504c"
        document.getElementById("button1").style.color = "white"
        document.getElementById("button1").textContent = "Ulang"
    }
}

function question2() {
    var answer1 = document.getElementById("question2").value
    var anies = document.getElementById("4")
    if(answer1 === "my" || answer1 === "My") {
        anies.style.backgroundColor = "#26961e"
        anies.style.color = "#26961e"
        document.getElementById("questionC2").classList.add("hidden")
        document.getElementById("questionC3").classList.remove("hidden")
    } else {
        document.getElementById("button2").style.backgroundColor = "#b5504c"
        document.getElementById("button2").style.color = "white"
        document.getElementById("button2").textContent = "Ulang"
    }
}

function question3() {
    var answer1 = document.getElementById("question3").value
    var anies = document.getElementById("1")
    if(answer1 === "Will" || answer1 === "will") {
        anies.style.backgroundColor = "#26961e"
        anies.style.color = "#26961e"
        document.getElementById("questionC3").classList.add("hidden")
        document.getElementById("questionC4").classList.remove("hidden")
    } else {
        document.getElementById("button3").style.backgroundColor = "#b5504c"
        document.getElementById("button3").style.color = "white"
        document.getElementById("button3").textContent = "Ulang"
    }
}

function question4() {
    var answer1 = document.getElementById("question4").value
    var anies = document.getElementById("2")
    if(answer1 === "You" || answer1 === "you") {
        anies.style.backgroundColor = "#26961e"
        anies.style.color = "#26961e"
        document.getElementById("questionC4").classList.add("hidden")
        document.getElementById("questionC5").classList.remove("hidden")
    } else {
        document.getElementById("button4").style.backgroundColor = "#b5504c"
        document.getElementById("button4").style.color = "white"
        document.getElementById("button4").textContent = "Ulang"
    }
}

function question5() {
    var answer1 = document.getElementById("question5").value
    var anies = document.getElementById("6")
    if(answer1 === "date" || answer1 === "Date") {
        anies.style.backgroundColor = "#26961e"
        anies.style.color = "#26961e"
        document.getElementById("questionC5").classList.add("hidden")
        document.getElementById("questionC6").classList.remove("hidden")
    } else {
        document.getElementById("button5").style.backgroundColor = "#b5504c"
        document.getElementById("button5").style.color = "white"
        document.getElementById("button5").textContent = "Ulang"
    }
}

function question6() {
    var answer1 = document.getElementById("question6").value
    var anies1 = document.getElementById("1")
    var anies2 = document.getElementById("2")
    var anies3 = document.getElementById("3")
    var anies4 = document.getElementById("4")
    var anies5 = document.getElementById("5")
    var anies6 = document.getElementById("6")
    if(answer1 === "prom" || answer1 === "Prom") {
        anies1.style.backgroundColor = "white"
        anies1.style.color = "black"
        anies2.style.backgroundColor = "white"
        anies2.style.color = "black"
        anies3.style.backgroundColor = "white"
        anies3.style.color = "black"
        anies4.style.backgroundColor = "white"
        anies4.style.color = "black"
        anies5.style.backgroundColor = "white"
        anies5.style.color = "black"
        anies6.style.backgroundColor = "white"
        anies6.style.color = "black"
        document.getElementById("questionC6").classList.add("hidden")
        document.getElementById("cat").classList.remove("hidden")
        document.getElementById("buttonC").classList.remove("hidden")
        document.getElementById("buttonC").style.display = "flex"
    } else {
        document.getElementById("button6").style.backgroundColor = "#b5504c"
        document.getElementById("button6").style.color = "white"
        document.getElementById("button6").textContent = "Ulang"
    }
}

function yesprotocol() {
    document.getElementById("cat").src = "happy.gif"
}

function noprotocol() {
    document.getElementById("cat").src = "sad.jpg"
}