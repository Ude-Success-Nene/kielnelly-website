const questions =
document.querySelectorAll('.faq-question');

questions.forEach(question => {

question.addEventListener('click', () => {

const answer =
question.nextElementSibling;

if(answer.style.display === 'block'){

answer.style.display = 'none';

}else{

answer.style.display = 'block';

}

});

});

const registrationForm =
document.getElementById("registrationForm");

registrationForm.addEventListener(
"submit",
function(e){

    e.preventDefault();

    const fullname =
    document.getElementById("fullname").value;

    const phone =
    document.getElementById("phone").value;

    const email =
    document.getElementById("email").value;

    const course =
    document.getElementById("course").value;

    const message =
`Hello KielNelly Computer Services,

I would like to register for computer training.

Full Name: ${fullname}

Phone Number: ${phone}

Email Address: ${email}

Course: ${course}`;

    const whatsappURL =
`https://wa.me/2349022343902?text=${encodeURIComponent(message)}`;

    window.open(
    whatsappURL,
    "_blank"
    );

});

const contactForm =
document.getElementById("contactForm");

contactForm.addEventListener(
"submit",
function(e){

e.preventDefault();

const name =
document.getElementById("contactName").value;

const email =
document.getElementById("contactEmail").value;

const phone =
document.getElementById("contactPhone").value;

const subject =
document.getElementById("contactSubject").value;

const message =
document.getElementById("contactMessage").value;

const whatsappMessage =
`Hello KielNelly Computer Services,

New Contact Form Message

Name: ${name}

Email: ${email}

Phone: ${phone}

Subject: ${subject}

Message:
${message}`;

const whatsappURL =
`https://wa.me/2349022343902?text=${encodeURIComponent(whatsappMessage)}`;

window.open(
whatsappURL,
"_blank"
);

});

const reveals =
document.querySelectorAll(".reveal");

window.addEventListener(
"scroll",
function(){

reveals.forEach(reveal=>{

const windowHeight =
window.innerHeight;

const revealTop =
reveal.getBoundingClientRect().top;

const revealPoint = 100;

if(revealTop < windowHeight - revealPoint){

reveal.classList.add("active");

}

});

});

// Back To Top Button

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if(window.pageYOffset > 300){
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});

const printingForm =
document.getElementById("printingForm");

printingForm.addEventListener(
"submit",
function(e){

e.preventDefault();

const name =
document.getElementById("printName").value;

const phone =
document.getElementById("printPhone").value;

const email =
document.getElementById("printEmail").value;

const service =
document.getElementById("printService").value;

const copies =
document.getElementById("copies").value;

const instructions =
document.getElementById("instructions").value;

const message =
`Hello KielNelly Computer Services,

New Printing Request

Name: ${name}

Phone: ${phone}

Email: ${email}

Service: ${service}

Copies: ${copies}

Instructions:
${instructions}

I will send my document shortly.`;

const whatsappURL =
`https://wa.me/2349022343902?text=${encodeURIComponent(message)}`;

window.open(
whatsappURL,
"_blank"
);

});
