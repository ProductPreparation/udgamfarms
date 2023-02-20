/* Function to show static whatsapp window on scroll */
window.onscroll = function() {
    var btn = document.getElementById("whatsapp-chat-btn");
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

/* Function to send message to the user */
function sendQueryWhatsapp(message){
    saveQueryDB(message);
    let num="+919234551799";
    let arrDate    = document.getElementById("date_check_in").value;
    let depDate    = document.getElementById("date_check_out").value;
    let noOfAdults = document.getElementById("no_of_adults").value;
    let noOfRooms  = document.getElementById("no_of_rooms").value;
    let msg = "Hi, I want to check availability starting : " + arrDate + " and ending : " + depDate + " for " + noOfAdults + " adults and " + noOfRooms + " rooms.";
  
    var win = window.open(`https://wa.me/${num}?text=${msg}`, '_blank');
    win.focus();
  }

function saveQueryDB(message){
    let arrDate    = document.getElementById("date_check_in").value;
    let depDate    = document.getElementById("date_check_out").value;
    let noOfAdults = document.getElementById("no_of_adults").value;
    let noOfRooms  = document.getElementById("no_of_rooms").value;
    let msg = "Hi, I want to check availability starting : " + arrDate + " and ending : " + depDate + " for " + noOfAdults + " adults and " + noOfRooms + " rooms.";

    let apiUrl = 'http://localhost/api/online-queries';
    let data = {arrival_date: arrDate, departure_date: depDate, no_of_adults: noOfAdults, no_of_rooms: noOfRooms};

    fetch(`${apiUrl}`, {
        method: "POST",
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify(data)
    }).then(res => {
        console.log("Request complete! response:", res);
    });
}