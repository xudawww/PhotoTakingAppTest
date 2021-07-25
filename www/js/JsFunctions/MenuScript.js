//Listen click menu item event
function adjustMenu(){
    console.log($(this).attr('id'))
    var MenuitemPage1 = $('#photonTakingPage');
    var MenuitemPage2 = $('#PostsPage');
    //Hide both page 
    MenuitemPage1.hide();
    MenuitemPage2.hide()
    //Set all background color to white 
    $('.MenuItem').css('background','white');
    $('.MenuItem').css('color','black');
    //Set active menu item blue
    $(this).css('background','#0069d9');
    $(this).css('color','white');
    $(this).attr('id')==='firstMenuItem'? MenuitemPage1.show():MenuitemPage2.show();
}


