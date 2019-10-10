function changeBackground(newBackground){
    console.log(newBackground);
    switch (newBackground){
        case 0:
            $("body").css("background-image","url('img/bg.jpg')");
            showMenu();
        break;
        case 1:
            $("body").css("background-image","url('img/bg1.jpg')");
            showMenu();
        break;
        case 2:
            $("body").css("background-image","url('img/bg2.jpg')");
            showMenu();
        break;
        case 3:
            $("body").css("background-image","url('img/bg3.jpg')");
            showMenu();
        break;
        case 4:
            $("body").css("background-image","url('img/bg4.jpg')");
            showMenu();
        break;
        case 5:
            $("body").css("background-image","url('img/bg5.jpg')");
            showMenu();
        break;
    }
}



// $(function(){
// $("img").hide();
// })


count = 0;
function showMenu()
{
    
    count += 1;
    if(count%2 == 1){
        // $("img").fadeIn(3000);
        $("#imgbg").toggleClass("imgbgtrans");
        $("#img1").toggleClass("img1trans");
        $("#img2").toggleClass("img2trans");

        
    }
    else{
        $("#imgbg").toggleClass("imgbgtrans");
        $("#img1").toggleClass("img1trans");
        $("#img2").toggleClass("img2trans");

        // $("img").fadeOut(3000);
    }
}