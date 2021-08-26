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