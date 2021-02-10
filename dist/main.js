const typedSpan = document.querySelector('.typing');
const texts = ['Developer.', 'Designer.', 'Creator.'];
const typingDelay = 250;
const erasingDelay = 150;
const newTextDelay = 1500;
let index = 0;
let charIndex = 0;


function type() {
    if(charIndex < texts[index].length) {
        typedSpan.textContent += texts[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        //erase
        setTimeout(erase, newTextDelay);
    }
};

function erase() {
    if(charIndex > 0) {
        typedSpan.textContent = texts[index].substring(0, charIndex-1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        // type
        index++;
        if(index >= texts.length) index = 0;{
            
            setTimeout(type, typingDelay);
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(type, newTextDelay);
});



