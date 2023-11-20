var MenuItems = document.getElementById("MenuItems");

    MenuItems.style.maxHeight = "0px"

    function menutoggle(){
        if(MenuItems.style.maxHeight == "0px")
    {
        MenuItems.style.maxHeight ="200px"
    }
    else{
        MenuItems.stylr.maxHeight ="0px"
    }
}