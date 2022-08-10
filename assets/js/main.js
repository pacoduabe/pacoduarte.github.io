// Grab elements
const selectElement = (selector) => {
    const element = document.querySelector(selector);
    if(element) return element;
    throw new Error(`Something went wrong! Make sure that ${selector} exists/is typed correctly.`);  
};

//Nav styles on scroll
const scrollHeader = () =>{
    const navbarElement = selectElement('#header');
    if(this.scrollY >= 15) {
        navbarElement.classList.add('activated');
    } else {
        navbarElement.classList.remove('activated');
    }
}

window.addEventListener('scroll', scrollHeader);

// Open menu & search pop-up
const menuToggleIcon = selectElement('#menu-toggle-icon');
const formOpenBtn = selectElement('#search-icon');
const formCloseBtn = selectElement('#form-close-btn');
const searchContainer = selectElement('#search-form-container');

const toggleMenu = () =>{
    const mobileMenu = selectElement('#menu');
    mobileMenu.classList.toggle('activated');
    menuToggleIcon.classList.toggle('activated');
}

menuToggleIcon.addEventListener('click', toggleMenu);

document.onclick = function(e){
    if(e.target.id !== '3-line-button' && e.target.id !== 'back-menu'){
        const mobileMenu = selectElement('#menu');
        mobileMenu.classList.remove('activated');
        menuToggleIcon.classList.remove('activated');
    }
};

// Open/Close search form popup
formOpenBtn.addEventListener('click', () => searchContainer.classList.add('activated'));
formCloseBtn.addEventListener('click', () => searchContainer.classList.remove('activated'));
// -- Close the search form popup on ESC keypress
window.addEventListener('keyup', (event) => {
    if(event.key === 'Escape') searchContainer.classList.remove('activated');
});

// Switch theme/add to local storage
const body = document.body;
const themeToggleBtn = selectElement('#theme-toggle-btn');
const currentTheme = localStorage.getItem('currentTheme');

// Check to see if there is a theme preference in local Storage, if so add the ligt theme to the body
if (currentTheme) {
    body.classList.add('light-theme');
}

themeToggleBtn.addEventListener('click', function () {
    // Add light theme on click
    body.classList.toggle('light-theme');

    // If the body has the class of light theme then add it to local Storage, if not remove it
    if (body.classList.contains('light-theme')) {
        localStorage.setItem('currentTheme', 'themeActive');
    } else {
        localStorage.removeItem('currentTheme');
    }
});

// Accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {

        panel.style.maxHeight = null;
        
    } else {

        panel.style.maxHeight = panel.scrollHeight + "px";
        
    }
    });
}

// Search Algorithm
var KeyValues = '{"KeyValues":[' +
'{"cardinality-test": ["cardinality", "relationship"] },' +
'{"world-map": ["flowmap", "custom", "visual"] },' +
'{"js-try": ["JS","javascript"] }]}';

var Points = '{"Points":[' +
'{"cardinality-test": 0 },' +
'{"world-map": 0 },' +
'{"js-try": 0 }]}';

var jsonKeyValues = JSON.parse(KeyValues);
var jsonPoints = JSON.parse(Points);

var CurrentPost = "";
var CurrentKeyword = "";



// var temp = "This is a string.";
// var count = (temp.match(/is/g) || []).length;
// console.log(count);

document.onclick = function(e){
    
    

    

    if(e.target.id !== '3-line-button' && e.target.id !== 'back-menu'){
        var TestWord = "Cardinality";
        let Result = TestWord.toLowerCase();

        for (var i = 0; i < jsonKeyValues["KeyValues"].length; i++) {
            let CurrentPost = Object.getOwnPropertyNames(jsonKeyValues["KeyValues"][i]).toString();

            for (var j = 0; j < jsonKeyValues["KeyValues"][i][CurrentPost].length; j++) {
                let CurrentKeyword = jsonKeyValues["KeyValues"][i][CurrentPost][j];
                console.log(CurrentPost + " and " + CurrentKeyword);
                
            }
        }
        
        
        var a = fetch("http://127.0.0.1:62035/posts/post.html").then((result) => { return result.text(); });

        console.log(" ");
        console.log(a);

        // console.log(" ")

        // console.log(jsonKeyValues)
        // console.log(jsonPoints)
        // console.log(Result);
    }
};


