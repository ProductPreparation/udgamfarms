window.onscroll = function() {
    var btn = document.getElementById("whatsapp-chat-btn");
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};
