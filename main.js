const nav = document.querySelector('.nav_links');
const openNavBtn = document.querySelector('#nav_toggle-open');
const closeNavBtn = document.querySelector('#nav_toggle-close');


const openNav = () =>{
    nav.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block';
}
openNavBtn.addEventListener('click', openNav)

const closeNav = () =>{
    nav.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = 'none';
}
closeNavBtn.addEventListener('click', closeNav)

ScrollReveal({ 
    reset: true,
    distance: '20px',
    duration: 2500,
    delay: 400
});

ScrollReveal().reveal('.content', { delay: 300, origin:'top' });
ScrollReveal().reveal('.image-content', { delay: 700, origin:'right' });
ScrollReveal().reveal('.main-title', { delay: 500, origin:'left' });
ScrollReveal().reveal('.sec-image', { delay: 600, origin:'bottom' });
ScrollReveal().reveal('.sec-textbox', { delay: 700, origin:'right' });
ScrollReveal().reveal('.sec-mediaicon i', { delay: 500, origin:'bottom' });
ScrollReveal().reveal('.left-container', { delay: 300, origin:'left' });
ScrollReveal().reveal('.right-container', { delay: 300, origin:'right' });
ScrollReveal().reveal('.educ', { delay: 300, origin:'top' });
ScrollReveal().reveal('.right-card', { delay: 400, origin:'right' });
ScrollReveal().reveal('.left-card', { delay: 500, origin:'left' });

var typed = new Typed('.text', {
    strings: ["Web Developer", "Designer" , "Cyclist"],
    typeSpeed: 90,
    backSpeed: 90,
    loop:true
  });


  
  function sendMail(){
    var params = {
      name : document.getElementById("name").value,
      email : document.getElementById("email").value,
      message : document.getElementById("message").value
    };
    const serviceID = "service_xlporri";
    const templateID = "template_1rmfy3e";
  
    emailjs
      .send(serviceID, templateID, params)
      .then((res) => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message sent successfully");
      })
      .catch((err) => console.log(err));
  }

