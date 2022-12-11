var menu = document.querySelector(".menu-icon");
var nav = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle('cross')
    nav.classList.toggle('open-nav')
};
// close navbar

var head = document.querySelector("header");
window.addEventListener('scroll', () => {
    head.classList.toggle("header-active", window.scrollY > 0)
})

var scrollcon = document.querySelector(".scroll-icon");
window.addEventListener('scroll', () => {
    scrollcon.classList.toggle("scroll-active", window.scrollY >= 300)
})

// Email  Js
function authorise(){
    var name = document.querySelector('.name');
    var number = document.querySelector('.number');
    var email = document.querySelector('.email');
    var msg = document.querySelector('.message');
    var sendBtn = document.querySelector('.send-btn');

    sendBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (name.value == '' || email.value == '' || number.value == '' || msg.value == ''){
            emptyerror();
        }else{
            sendmail(name.value, email.value, msg.value);
            success();
        }
    })    
}
authorise();

// alert js
function sendmail(name, email, msg){
    emailjs.send("service_dji1uwj","template_jkqxm2o",{
        from_name: email,
        to_name: name,
        message: msg,
        });
}
function emptyerror(){
    swal({
        title: "Error!",
        text: "Fields cannot be left empty!",
        icon: "error",
        button: "Retry"
      });
}
function success(){
    swal({
        title: "Sent Successfully!",
        text: "We will do well to reply in 24hrs",
        icon: "success",
        button: "Close"
      });
}
