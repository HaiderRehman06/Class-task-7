var cityName = "Vatican City";
 function smallestCity() {
    var selectedButton = event.target.innerText;

if (selectedButton.toLowerCase() === cityName.toLowerCase()) {
    alert("Correct!");
        window.location.href = "./second-question.html";
}else {
    alert("Incorrect!");
    window.location.href = "./second-question.html";
    }
}

var builingName = "Burj Khalifa";
function tallestBuiling() {
    var selectedButton = event.target.innerText;

if (selectedButton.toLowerCase() === builingName.toLowerCase()) {
    alert("Correct!");
    window.location.href = "./third-question.html";
    } else {
    alert("Incorrect!");
    window.location.href = "./third-question.html";
    }
}

var date = "1995"
function jsInvented() {
    var selectedButton = event.target.innerText;

if (selectedButton.toLowerCase() === date.toLowerCase()) {
    alert("Correct!");
    } else {
    alert("Incorrect!");
    }
}






