//image on click fill screen
$('img[data-enlargeable]').addClass('img-enlargeable img-background').click(function(){
    var src = $(this).attr('src');
    var modal;
    var background;
    function removeModal(){ modal.remove(); $('body').off('keyup.modal-close'); }
    modal = $('<div>').css({
        background: 'RGBA(0,0,0,0) url('+src+') no-repeat center',
        backgroundSize: 'contain',
        width:'100%', height:'80%',
        position:'fixed',
        zIndex:'10000',
        top:'10%', left:'0',
        cursor: 'zoom-out'
    }).click(function(){
        removeModal(),removeBackground();
    }).appendTo('body');
    //handling ESC
    $('body').on('keyup.modal-close', function(e){
      if(e.key==='Escape'){ removeModal(); }
    });

    function removeBackground(){ background.remove(); $('body').off('keyup.background-close'); }
    background = $('<div>').css({
      background: 'RGBA(0,0,0,.5)',
      backgroundSize: 'contain',
      width:'100%', height:'100%',
      position:'fixed',
      zIndex:'9000',
      top:'0', left:'0',
      cursor: 'zoom-out'
  }).click(function(){
  }).appendTo('body');  
  //handling ESC
  $('body').on('keyup.background-close', function(e){
    if(e.key==='Escape'){ removeBackground(); }
  });
});

//enlargable certificates
var imageSources1 = ["images/certificates/photoshop-certificate.png","images/certificates/photoshop-certificate-black-white.png"]
var buttons = document.getElementsByClassName("change-image")[0];
var imageSources2 = ["images/certificates/illustrator-certificate.png","images/certificates/illustrator-certificate-black-white.png"]
var buttons = document.getElementsByClassName("change-image")[0];
var imageSources3 = ["images/certificates/secriuty-fundamentals-certificate.png","images/certificates/secriuty-fundamentals-certificate-black-white.png"]
var buttons = document.getElementsByClassName("change-image")[0];
var imageSources4 = ["images/certificates/js-certificate.png","images/certificates/js-certificate-black-white.png"]
var buttons = document.getElementsByClassName("change-image")[0];
var imageSources5 = ["images/certificates/html5-certificate.png","images/certificates/html5-certificate-black-white.png"]
var buttons = document.getElementsByClassName("change-image")[0];
var imageSources6 = ["images/certificates/html-and-css-certificate.png","images/certificates/html-and-css-certificate-black-white.png"]
var buttons = document.getElementsByClassName("change-image")[0];

var index = 0;
var indexOne = 0;
var indexTwo = 0;
var indexThree = 0;
var indexFour = 0;
var indexFive = 0;

buttons.addEventListener('click', function() {
  if (index === imageSources1.length) {
    index = 0;
  }
     
    document.getElementById("photoshop-enlarge").src = imageSources1[indexFive];
    indexFive++;
    if (indexOne === imageSources2.length) {
      indexOne = 0;
    }

    document.getElementById("illustrator-enlarge").src = imageSources2[indexOne];
    indexOne++;
    if (indexTwo === imageSources3.length) {
      indexTwo = 0;
    }

    document.getElementById("secriuty-enlarge").src = imageSources3[indexTwo];
    indexTwo++;
    if (indexThree === imageSources4.length) {
      indexThree = 0;
    }

    document.getElementById("js-enlarge").src = imageSources4[indexThree];
    indexThree++;
    if (indexFour === imageSources5.length) {
      indexFour = 0;
    }

    document.getElementById("html5-enlarge").src = imageSources5[indexFour];
    indexFour++;
    if (indexFive === imageSources6.length) {
      indexFive = 0;
    }

    document.getElementById("html-css-enlarge").src = imageSources6[indexFive];
    indexFive++;
    if (indexSix === imageSources11.length){
      indexSix = 0;
    }
});