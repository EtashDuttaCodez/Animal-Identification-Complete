function start() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/SqoKB2TDT/model.json', modelLoaded)
}
function modelLoaded() {
    classifier.classify(gotresults)
}
function gotresults(error, result) {
    if (error) {
        console.log(error)
    }
    else {
        console.log(result)
        label = result[0].label
        confidence = (result[0].confidence * 100).toFixed(2)
        r = Math.floor(Math.random() * 255) + 1;
        g = Math.floor(Math.random() * 255) + 1;
        b = Math.floor(Math.random() * 255) + 1;
        document.getElementById("lable").innerHTML = "I Can Hear " + label
        document.getElementById("confidence").innerHTML = "Accuracy : " + confidence + "%"

        document.getElementById("lable").style.color = "rgb(" + r + "," + g + "," + b + ")";
        document.getElementById("confidence").style.color = "rgb(" + r + "," + g + "," + b + ")";


        a1 = document.getElementById("a1");
        a2 = document.getElementById("a2");
        a3 = document.getElementById("a3");
        a4 = document.getElementById("a4");

        if (label == "Lion") {
            a1.src = 'Blue Whale.jpg';
            a2.src = 'Hawk.png'
            a3.src = 'Lion Gif.gif';
            a4.src = 'T-REX.png'
        }
        else if(label == "Hawk") {
            a1.src = 'Blue Whale.jpg'
            a2.src = 'Hawk Gif.gif'
            a3.src = 'Lion.jpg'
            a4.src = 'T-REX.wepb'
        }
        else if(label == "Blue Whale") {
            a1.src = 'Blue Whale GIF.gif'
            a2.src = 'Hawk.png'
            a3.src = 'Lion.jpg'
            a4.src = 'T-REX.wepb'
        }
        else if(label == "T-REX") {
            a1.src = 'Blue Whale.jpg'
            a2.src = 'Hawk.png'
            a3.src = 'Lion.jpg'
            a4.src = 'T-REXGif.gif'
        }
    }
}



















