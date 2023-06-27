function start()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/WJqAj0fTC/', modelReady);
}


function modelReady()
{
    classifier.classify(gotResults);
}