let score = 0
let money = 0
let moneyAmount = 1
let upgr4Count = 0

const showscore = document.getElementById("score")
const showmoney = document.getElementById("money")

function countscore() {
    score = score + 1
    money = money + moneyAmount
    console.log(score)
    console.log(money)
    showscore.textContent = score
    showmoney.textContent = document.querySelector("#money").innerHTML = Math.round(money) + "$"

    const audio = new Audio();
    audio.src = "crisps-mp3-[AudioTrimmer.com].mp3"
    audio.play();

}

function upgr1() {

    if (money >= 125) {
        moneyAmount = moneyAmount + 0.1
        money = money - 125
        showscore.textContent = score
        showmoney.textContent = document.querySelector("#money").innerHTML = Math.round(money) + "$"
        const audio = new Audio();
        audio.src = "adriantnt_u_click.mp3"
        audio.play();
    } else {
        const audio = new Audio();
        audio.src = "sosumi-2.mp3"
        audio.play();
    }
}

function upgr2() {
    if (money >= 2000) {
        moneyAmount = moneyAmount + 5
        money = money - 2000
        showscore.textContent = score
        showmoney.textContent = document.querySelector("#money").innerHTML = Math.round(money) + "$"
        const audio = new Audio();
        audio.src = "adriantnt_u_click.mp3"
        audio.play();
    } else {
        const audio = new Audio();
        audio.src = "sosumi-2.mp3"
        audio.play();
    }
}

function upgr3() {
    if (money >= 10000) {
        moneyAmount = moneyAmount + 20
        money = money - 10000
        showscore.textContent = score
        showmoney.textContent = document.querySelector("#money").innerHTML = Math.round(money) + "$"
        const audio = new Audio();
        audio.src = "adriantnt_u_click.mp3"
        audio.play();
    } else {
        const audio = new Audio();
        audio.src = "sosumi-2.mp3"
        audio.play();
    }
}

function upgr4() {
    if (money >= 500) {
        if (upgr4Count < 1){
        setInterval(function () {
            money = money + 5
            document.querySelector("#money").innerHTML = Math.round(money) + "$"
            upgr4Count++
            innerHTML = "Sold Out"

        }, 1000)
        money = money - 500
        showscore.textContent = score
        showmoney.textContent = document.querySelector("#money").innerHTML = Math.round(money) + "$"
        const audio = new Audio();
        audio.src = "adriantnt_u_click.mp3"
        audio.play();
    }} else {
        const audio = new Audio();
        audio.src = "sosumi-2.mp3"
        audio.play();
    }
}

function upgr5() {
    if (money >= 1000) {
        money = money - 1000

        setInterval(function () {
            money = money + 15
            showscore.textContent = score
            showmoney.textContent = document.querySelector("#money").innerHTML = Math.round(money) + "$"

        }, 1000)
        showscore.textContent = score
        showmoney.textContent = document.querySelector("#money").innerHTML = Math.round(money) + "$"
        const audio = new Audio();
        audio.src = "adriantnt_u_click.mp3"
        audio.play();
    } else {
        const audio = new Audio();
        audio.src = "sosumi-2.mp3"
        audio.play();
    }
}

function upgr6() {
    if (money >= 10000) {
        setInterval(function () {
            money = money + 200
            showscore.textContent = score
            showmoney.textContent = document.querySelector("#money").innerHTML = Math.round(money) + "$"

        }, 1000)
        money = money - 10000
        showscore.textContent = score
        showmoney.textContent = document.querySelector("#money").innerHTML = Math.round(money) + "$"
        const audio = new Audio();
        audio.src = "adriantnt_u_click.mp3"
        audio.play();
    } else {
        const audio = new Audio();
        audio.src = "sosumi-2.mp3"
        audio.play();
    }
}

