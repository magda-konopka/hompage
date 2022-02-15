const firstName = "Magda";
const age = "25";

console.log(firstName);
console.log(age);
console.log(`Cześć!Nazywam się ${firstName} i mam ${age}lat.`);
const heading = document.querySelector('.hotpink-header--js');
heading.innerHTML =`Cześć!Nazywam się ${firstName} i mam ${age}lat.` 

greet(age, firstName);

function greet(age,firstName) {
    console.log(
        `Cześć!Nazywam się ${firstName} i mam ${age}lat.`

    );
}

const hamburger = document.querySelector('.hamburger--js');
hamburger.addEventListener('click', () => {
    const nav = document.querySelector('.navigation--js');
    nav.classList.toggle('navigation--open');
})


