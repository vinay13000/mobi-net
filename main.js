Webcam.set({
    width: 310,
    height: 350,
    image_format:"png",
    png_quality:350,
    constraints:{
        facingMode:"environment"
    }
});

camera=document.getElementById("Camera");

Webcam.attach("#Camera");

function takesnapshot(){
   Webcam.snap(function(data_uri){
       document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>'
   });
}

console.log('ml5 version:',ml5.version);

classifier=ml5.imageClassifier('MobileNet',modelLoaded);

function modelLoaded(){
    console.log("model Loaded");
}

function check(){
    img=document.getElementById("captured_image");
    classifier.classify(img,gotResult);

}

function gotResult(error,results){
    if (error){
        console.error(error);
    }
    else{
     console.log(results);
     document.getElementById("object_name").innerHTML=results[0].label;
    }
}
