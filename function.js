function w3_open() {
    document.getElementById("mySidebar").style.width = "100%";
    document.getElementById("mySidebar").style.display = "block";
}
  
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}

function insertValues(){
    var nome_fiera = 'Nerd Show';
    var city = 'Bologna';
    var address = 'Via pincopallo';
    var date = '14/06/2023 - 18/06/2023'
    var website = 'www.it'
    //document.getElementById('nome_fiera').innerHTML = nome_fiera;
    document.getElementById('city').innerHTML = city;
    document.getElementById('address').innerHTML = address;
    document.getElementById('date').innerHTML = date;
    document.getElementById('website').innerHTML = website;
}



