window.onscroll = function() {
    var btn = document.getElementById("whatsapp-chat-btn");
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};


function sendWhatsapp(message){
    let num="+917838169412";
    let arrDate    = document.getElementById("date_check_in").value;
    let depDate    = document.getElementById("date_check_out").value;
    let noOfAdults = document.getElementById("no_of_adults").value;
    let noOfRooms  = document.getElementById("no_of_rooms").value;
    let msg = "Hi, I want to check availability starting : " + arrDate + " and ending : " + depDate + " for " + noOfAdults + " adults and " + noOfRooms + " rooms.";
  
    var win = window.open(`https://wa.me/${num}?text=${msg}`, '_blank');
    win.focus();
  }