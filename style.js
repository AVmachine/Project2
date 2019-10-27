function changeBackground(newBackground){
    console.log(newBackground);
    switch (newBackground){
        case 0:
            $("body").css("background-image","url('img/bg.jpg')");
            showMenu();
            $("#bigText").html("<div id='bigText' class='bigTextClass'>Home<br>Find Peace<br>_</div>");
        break;
        case 1:
            $("body").css("background-image","url('img/bg1.jpg')");
            showMenu();
            $("#bigText").html("<div id='bigText' class='bigTextClass'>Beach<br>Lift Yourself<br>_</div>");
        break;
        case 2:
            $("body").css("background-image","url('img/bg2.jpg')");
            showMenu();
            $("#bigText").html("<div id='bigText' class='bigTextClass'>Ocean<br>Uncover Beauty<br>_</div>");
        break;
        case 3:
            $("body").css("background-image","url('img/bg3.jpg')");
            showMenu();
            $("#bigText").html("<div id='bigText' class='bigTextClass'>Desert<br>Find Yourself<br>_</div>");
        break;
        case 4:
            $("body").css("background-image","url('img/bg4.jpg')");
            showMenu();
            $("#bigText").html("<div id='bigText' class='bigTextClass'>Explore<br>Find Peace<br>_</div>");
        break;
        case 5:
            $("body").css("background-image","url('img/bg5.jpg')");
            showMenu();
            $("#bigText").html("<div id='bigText' class='bigTextClass'>Mountains<br>Explore Limits<br>_</div>");
        break;
    }
}



$(function(){
$("#wordsbg").hide();
 })


count = 0;
function showMenu()
{
    
    count += 1;
    if(count%2 == 1){
        $("#imgbg").toggleClass("imgbgtrans");
        $("#img1").toggleClass("img1trans");
        $("#img2").toggleClass("img2trans");
        $("#img3").toggleClass("img3trans");
        $("#img4").toggleClass("img4trans");
        $("#img5").toggleClass("img5trans");
        $("#wordsbg").fadeIn(1500);
        $("#words1").fadeIn(1500); 
        $("#words2").fadeIn(1500); 
        $("#words3").fadeIn(1500); 
        $("#words4").fadeIn(1500); 
        $("#words5").fadeIn(1500); 
        $("#wordsbg").toggleClass("wordsBgTrans");
        $("#words1").toggleClass("words1Trans");
        $("#words2").toggleClass("words2Trans");
        $("#words3").toggleClass("words3Trans");
        $("#words4").toggleClass("words4Trans");
        $("#words5").toggleClass("words5Trans");
       
     
       }
    else{
        $("#imgbg").toggleClass("imgbgtrans");
        $("#img1").toggleClass("img1trans");
        $("#img2").toggleClass("img2trans");
        $("#img3").toggleClass("img3trans");
        $("#img4").toggleClass("img4trans");
        $("#img5").toggleClass("img5trans");
        $("#wordsbg").fadeOut();
        $("#words1").fadeOut(); 
        $("#words2").fadeOut(); 
        $("#words3").fadeOut(); 
        $("#words4").fadeOut(); 
        $("#words5").fadeOut(); 
        $("#wordsbg").toggleClass("wordsBgTrans");
        $("#words1").toggleClass("words1Trans");
        $("#words2").toggleClass("words2Trans");
        $("#words3").toggleClass("words3Trans");
        $("#words4").toggleClass("words4Trans");
        $("#words5").toggleClass("words5Trans");
        
    }


}