
// for header section 

let menu = document.querySelector('#menuBtn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');

    LoginForm.classList.remove('active');
    SearchBox.classList.remove('active');
    SavedBox.classList.remove('active');
}

// for login form 

let Profile = document.querySelector('#userBtn');
let LoginForm = document.querySelector('#user');

Profile.onclick = () =>{
    LoginForm.classList.toggle('active');

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    SearchBox.classList.remove('active');
    SavedBox.classList.remove('active');
}

// for search box 

let Search = document.querySelector('#searchBtn');
let SearchBox = document.querySelector('#search');

Search.onclick = () =>{
    SearchBox.classList.toggle('active');

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    LoginForm.classList.remove('active');
    SavedBox.classList.remove('active');
}

// for saved box 

let Saved = document.querySelector('#heartBtn');
let SavedBox = document.querySelector('#saved');

Saved.onclick = () =>{
    SavedBox.classList.toggle('active');

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    LoginForm.classList.remove('active');
    SearchBox.classList.remove('active');
}


// for window onscroll  

window.onscroll = () =>{
    // menu.classList.remove('fa-times');
    // navbar.classList.remove('active');
    // LoginForm.classList.remove('active');
    // SearchBox.classList.remove('active');
    // SavedBox.classList.remove('active');

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
}