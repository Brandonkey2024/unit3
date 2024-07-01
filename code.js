let page1 =document.querySelector(".page1");
page1.style.display="none";
let page2 = document.querySelector(".page2");
page2.style.display="none";
let page3 = document.querySelector(".page3");
page3.style.display="none";
let head1 = document.querySelector(".head1");
head1.style.display="none";
let head2 = document.querySelector(".head2");
head2.style.display="none";
let head3 = document.querySelector(".head3");
head3.style.display="none";
let head4 = document.querySelector(".head4");
head4.style.display="none";
let head5 = document.querySelector(".head5");
head5.style.display="none";
let page4 = document.querySelector(".page4");
page4.style.display="none";
let wrongButton1 = document.querySelector(".wrong1");
let image1 = document.querySelector(".one");
image1.style.display="none";
let rightButton = document.querySelector(".right");
let wrongButton = document.querySelector(".wrong");
let start = document.querySelector(".start");
let question = document.querySelector(".question");


rightButton.addEventListener("click", function(){
    image1.style.display= "block";
    head1.style.display= "block";
    page1.style.display= "block";
    start.style.display= "none";
    question.style.display= "none";
    rightButton.style.display= "none";
    wrongButton.style.display= "none";
    
});
wrongButton.addEventListener("mousedown", function(){
    wrongButton.classList.add("revealed");
    wrongButton.style.animation= "shake .2s"
});
 wrongButton.addEventListener("mouseup", function(){
    wrongButton.classList.remove("revealed");
    wrongButton.style.animation= ""
 });

console.log("wrong1",wrongButton1)
wrongButton1.addEventListener("mousedown", function(){
    wrongButton1.classList.add("revealed");
    wrongButton1.style.animation= "shake .2s"
});
 wrongButton1.addEventListener("mouseup", function(){
    wrongButton1.classList.remove("revealed");
    wrongButton1.style.animation= ""
 });
 let wrongButton2 = document.querySelector(".wrong2");
console.log("wrong2",wrongButton1)
wrongButton2.addEventListener("mousedown", function(){
    wrongButton2.classList.add("revealed");
    wrongButton2.style.animation= "shake .2s"
});
 wrongButton2.addEventListener("mouseup", function(){
    wrongButton2.classList.remove("revealed");
    wrongButton2.style.animation= ""
 });
let rightButton1 = document.querySelector(".right1");
let image2 = document.querySelector(".two");
rightButton1.addEventListener("click", function(){
    image2.style.display= "block";
    image1.style.display= "none";
    page1.style.display= "none";
    page2.style.display= "block";
    head1.style.display= "none";
    head2.style.display= "block";



});
let wrongButton3 = document.querySelector(".wrong3");
wrongButton3.addEventListener("mousedown", function(){
    wrongButton3.classList.add("revealed");
    wrongButton3.style.animation= "shake .2s"
});
 wrongButton3.addEventListener("mouseup", function(){
    wrongButton3.classList.remove("revealed");
    wrongButton3.style.animation= ""
 });
 let wrongButton4 = document.querySelector(".wrong4");
wrongButton4.addEventListener("mousedown", function(){
    wrongButton4.classList.add("revealed");
    wrongButton4.style.animation= "shake .2s"
});
 wrongButton4.addEventListener("mouseup", function(){
    wrongButton4.classList.remove("revealed");
    wrongButton4.style.animation= ""
});
let rightButton2 = document.querySelector(".right2");
let image3 = document.querySelector(".three");
rightButton2.addEventListener("click", function(){
    image2.style.display= "none";
    page2.style.display= "none";
    head2.style.display= "none";
    image3.style.display= "block";
    head3.style.display= "block";
    page3.style.display= "block";
});
let wrongButton5 = document.querySelector(".wrong5");
wrongButton5.addEventListener("mousedown", function(){
    wrongButton5.classList.add("revealed");
    wrongButton5.style.animation= "shake .2s"
});
 wrongButton5.addEventListener("mouseup", function(){
    wrongButton5.classList.remove("revealed");
    wrongButton5.style.animation= ""
 });
 let wrongButton6 = document.querySelector(".wrong6");
wrongButton6.addEventListener("mousedown", function(){
    wrongButton6.classList.add("revealed");
    wrongButton6.style.animation= "shake .2s"
});
 wrongButton6.addEventListener("mouseup", function(){
    wrongButton6.classList.remove("revealed");
    wrongButton6.style.animation= ""
 });
let rightButton3 = document.querySelector(".right3");
let image4 = document.querySelector(".four")
rightButton3.addEventListener("click", function(){
    image3.style.display= "none";
    head3.style.display= "none";
    image4.style.display= "block";
    head4.style.display= "block";
    page3.style.display= "none";
    page4.style.display= "block";
    
});
let wrongButton7 = document.querySelector(".wrong7");
wrongButton7.addEventListener("mousedown", function(){
    wrongButton7.classList.add("revealed");
    wrongButton7.style.animation= "shake .2s"
});
 wrongButton7.addEventListener("mouseup", function(){
    wrongButton7.classList.remove("revealed");
    wrongButton7.style.animation= ""
 });

 let wrongButton8 = document.querySelector(".wrong8");
 wrongButton8.addEventListener("mousedown", function(){
     wrongButton8.classList.add("revealed");
     wrongButton8.style.animation= "shake .2s"
 });
  wrongButton8.addEventListener("mouseup", function(){
     wrongButton8.classList.remove("revealed");
     wrongButton8.style.animation= ""
  });
let rightButton4 = document.querySelector(".right4");
let image5 = document.querySelector(".five")
rightButton4.addEventListener("click", function(){
    image4.style.display= "none";
    head4.style.display= "none";
    image5.style.display= "block";
    head5.style.display= "block";
    page4.style.display= "none";
});
   
