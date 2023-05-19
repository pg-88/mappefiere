
function hamburger(){
    if (document.getElementById("mySidebar").style.display == "block"){
        document.getElementById("mySidebar").style.display="none";
        document.getElementById("side_info").style.display="block";
        document.getElementById("footer").style.display="block";
        document.getElementById("frame").style.display="block";
    }else{
        document.getElementById("mySidebar").style.display="block";
        document.getElementById("side_info").style.display="none";
        document.getElementById("footer").style.display="none";
        document.getElementById("frame").style.display="none";
    }

}

function showHome(){
    document.getElementById("mySidebar").style.display="none";

    document.getElementById("side_info").style.display="block";

    document.getElementById("result").style.display="none";
}





