function changeBackground(newBackground){
    console.log(newBackground);
    switch (newBackground){
        case 0:
            $("body").css("background-image","url('img/bg.jpg')");
        case 1:
            $("body").css("background-image","url('img/bg1.jpg')");
        break;
        case 2:
            $("body").css("background-image","url('img/bg2.jpg')");
        break;
        case 3:
            $("body").css("background-image","url('img/bg3.jpg')");
        break;
        case 4:
            $("body").css("background-image","url('img/bg4.jpg')");
        break;
        case 5:
            $("body").css("background-image","url('img/bg5.jpg')");
        break;
    }
}