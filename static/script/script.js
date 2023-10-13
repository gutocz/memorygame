const numbers = [];
const imagens = document.querySelectorAll(".imgGrid img");
const restartBtn = document.getElementById("restartBtn");

document.addEventListener("DOMContentLoaded", function () {
    associateNumbers();
    var countClicks = 0;
    var actual = 0;
    var past = 0;
    for (let i = 0; i < 20; i++) {
        imagens[i].onclick = function () {
            imagens[i].src = `static/img/${numbers[i]}.png`;
            countClicks++;
            if (countClicks == 1) {
                actual = numbers[i];
                past = i;
            } else if (countClicks == 2) {
                if (actual == numbers[i]) {
                    imagens[i].src = `static/img/${numbers[i]}.png`;
                    imagens[past].src = `static/img/${numbers[past]}.png`;
                    countClicks = 0;
                } else {
                    setTimeout(function () {
                        imagens[i].src = `static/img/background.jpg`;
                        imagens[past].src = `static/img/background.jpg`;
                        countClicks = 0;
                    }, 600);
                }
            }
        };
    }
});

function associateNumbers() {
    var count0 = 2;
    var count1 = 2;
    var count2 = 2;
    var count3 = 2;
    var count4 = 2;
    var count5 = 2;
    var count6 = 2;
    var count7 = 2;
    var count8 = 2;
    var count9 = 2;

    for (let i = 0; i < 20; i++) {
        var number = Math.floor(Math.random() * 10);

        if (number == 0 && count0 > 0) {
            numbers.push(number);
            count0--;
        } else if (number == 1 && count1 > 0) {
            numbers.push(number);
            count1--;
        } else if (number == 2 && count2 > 0) {
            numbers.push(number);
            count2--;
        } else if (number == 3 && count3 > 0) {
            numbers.push(number);
            count3--;
        } else if (number == 4 && count4 > 0) {
            numbers.push(number);
            count4--;
        } else if (number == 5 && count5 > 0) {
            numbers.push(number);
            count5--;
        } else if (number == 6 && count6 > 0) {
            numbers.push(number);
            count6--;
        } else if (number == 7 && count7 > 0) {
            numbers.push(number);
            count7--;
        } else if (number == 8 && count8 > 0) {
            numbers.push(number);
            count8--;
        } else if (number == 9 && count9 > 0) {
            numbers.push(number);
            count9--;
        } else {
            i--;
        }
    }
};

restartBtn.addEventListener("click", function () {
    window.location.href = "/";
});