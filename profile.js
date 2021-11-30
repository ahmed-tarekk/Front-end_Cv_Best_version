// const nav = document.querySelector('.navbar')
// window.addEventListener('scroll', fixNav)

// function fixNav() { 
//     if ( window.scrollY > nav.offsetHeight + 150 ) { 
//         nav.classList.add('active')
//     }else { 
//         nav.classList.remove('active')
//     }
// }


// <!-- first of all welcome to my world  -->
// <!-- in this template i decided to work on more deferent types of code -->
// <!-- to make myself more felexable on css and html and javascript  -->


// scroll style 

var nav = document.querySelector('.navbar')
window.addEventListener('scroll', function() { 
    nav.classList.toggle('active', window.scrollY > 0)
});

const toTop = document.querySelector(".scroll-up-btn");
window.addEventListener("scroll", () => { 
    if ( window.pageYOffset > 100 ) { 
        toTop.classList.add('show');
    }else { 
        toTop.classList.remove('show');
    }
})
// click style 


const menuBtn = document.querySelector('.menu-btn')  
menuBtn.addEventListener("click", menuBtnn); 

function menuBtnn() { 
    menuBtn.classList.toggle('open');
    const menu = document.querySelector('.menu')
    menu.classList.toggle("active")
}

// animation type script 

const texts = ['Developer', 'Engineer', 'Freelancer']; 
let count = 0;
let index = 0; 
let currenttext= ''; 
let letter = '';

(function type() { 
    if(count === texts.length) { 
        count = 0; 
    }
    currenttext = texts[count];
    letter = currenttext.slice(0, ++index);
    document.querySelector('.typing').textContent = letter;
    if(letter.length === currenttext.length) { 
        count++;
        index = 0;
    }
    setTimeout(type, 400)
})();
