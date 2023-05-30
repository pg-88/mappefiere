
function hamburger(){
    // document.getElementById("model").classList.toggle("show");
    if (document.getElementById("mySidebar").style.display == "block"){
        document.getElementById("mySidebar").style.display="none";
        document.getElementById("reset").style.display="inline";
        document.getElementById("footer").style.display="block";
        document.getElementById("model").style.display="flex";

    }else{
        document.getElementById("mySidebar").style.display="block";
        document.getElementById("reset").style.display="none";
        document.getElementById("footer").style.display="none";
        document.getElementById("model").style.display="none";
        console.log(document.getElementById("model").style.display);
    }

}
function hiddenFrame(){
    document.getElementById("model").style.display="none";
    // document.getElementById("reset").style.display="none";
}

function showHome(){
    document.getElementById("mySidebar").style.display="none";

    document.getElementById("side_info").style.display="block";

    document.getElementById("result").style.display="none";

    document.getElementById("footer").style.display="block";

    document.getElementById("model").style.display="block";
    console.log(document.getElementById("model").style.display+'');
}

function activeSearchBtn(){
    let categoria= document.getElementById("categoria").value;
    let periodo = document.getElementById("periodo").value;
    let regione = document.getElementById("regione").value;
    let citta= document.getElementById("citta").value;

    if (categoria && periodo && regione && citta !=''){
        document.getElementById("search").disab
    }
}

function toggleSidebar() {
    var sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('open');
}




