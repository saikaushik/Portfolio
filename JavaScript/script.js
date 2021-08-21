const nav = document.querySelector("#navbar");
const navTop = nav.offsetTop;

window.addEventListener('scroll', stickyNav);

function stickyNav(){
    // console.log(navTop, window.scrollY);
    if(window.scrollY >= navTop){
        nav.classList.add("sticky");
    }
    else{
        nav.classList.remove("sticky");
    }
}

let line1 = "Hello, World!";
let line2 = "I'm Sai Kaushik";
let line3 = "About";
let line4 = "Projects";
let line5 = "Tech Stack";
let line6 = "Certifications";
let line7 = "Contact";

let home = document.querySelector("#home");

for(let i = 0; i < line1.length + line2.length; i++){
    task(i);
}

function task(i){

    function a(){
        let item = document.createElement("span");
        item.innerHTML = line1[i];
        item.classList.add("animate");
        item.classList.add("Animate");
        home.appendChild(item);
        if(line1[i] == " "){
            home.innerHTML += "&nbsp";
        }
    }
    let n = line1.length;
    function b(){
        let item = document.createElement("span");
        item.innerHTML = line2[i-n];
        item.classList.add("animate");
        item.classList.add("Animate");
        if((i-n) == 0){
            home.innerHTML += "<br>";
        }
        home.appendChild(item);
        if(line2[i-n] == " "){
            home.innerHTML += "&nbsp";
        }
    }

    if(i < n){
        a();
        // setTimeout(a, i*100);
    }
    else{
        b();
        // setTimeout(b, i*100);
    }
}
let about = document.querySelector("#about-title-container");

for(let i = 0; i < line3.length; i++){
    let item = document.createElement("span");
    item.classList.add("title");
    item.classList.add("animate");
    item.classList.add("Animate");
    item.innerHTML = line3[i];
    about.appendChild(item);
    if(i == line3.length-1){
        about.innerHTML += "<br>";
    }
}

let projects = document.querySelector("#projects-title-container");

for(let i = 0; i < line4.length; i++){
    let item = document.createElement("span");
    item.classList.add("title");
    item.classList.add("animate");
    item.classList.add("Animate");
    item.innerHTML = line4[i];
    projects.appendChild(item);
    if(i == line4.length-1){
        projects.innerHTML += "<br>";
    }
}


// let skills = document.querySelector("#skills-title-container");

// for(let i = 0; i < line5.length; i++){
//     let item = document.createElement("span");
//     item.classList.add("title");
//     item.classList.add("animate");
//     item.classList.add("Animate");
//     item.innerHTML = line5[i];
//     skills.appendChild(item);    
//     if(line5[i] == " "){
//         skills.innerHTML += "&nbsp";
//     }
//     if(i == line5.length-1){
//         skills.innerHTML += "<br>";
//     }
// }

let certifications = document.querySelector("#c-title-container");

for(let i = 0; i < line6.length; i++){
    let item = document.createElement("span");
    item.classList.add("title");
    item.classList.add("animate");
    item.classList.add("Animate");
    item.innerHTML = line6[i];
    certifications.appendChild(item);
    if(i == line6.length-1){
        certifications.innerHTML += "<br>";
    }
}

let contact = document.getElementById("co-title-container");
console.log(contact);

for(let i = 0; i < line7.length; i++){
    let item = document.createElement("span");
    item.classList.add("title");
    item.classList.add("animate");
    item.classList.add("Animate");
    item.innerHTML = line7[i];
    contact.appendChild(item);
    if(i == line7.length-1){
        contact.innerHTML += "<br>";
    }
}

//Smooth Scroll

// let navTags = document.querySelectorAll("#navbarList  a");
// console.log(navTags);

// for(let i = 0; i < navTags.length; i++){
//     navTags[i].addEventListener('click', function(event){
//         event.preventDefault();
//         let target = navTags[i].textContent.trim().toLocaleLowerCase();
//         console.log(target);
//         let targetSection = document.getElementById(target);
//         var interval = setInterval(function(){
//             if(targetSection.getBoundingClientRect().top <= 0){
//                 clearInterval(interval);
//                 return;
//             }
//             window.scrollBy(0,20);
//         }, 1);

//         var anotherInterval = setInterval(function(){
//             if(targetSection.getBoundingClientRect().top <= 0){

//             }
//         }, 1);
//     });
// }