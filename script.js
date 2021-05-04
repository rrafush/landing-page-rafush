let checkbox = document.querySelector('input[name=theme]')
checkbox.addEventListener('change', pageTheme)

let olhos = document.querySelectorAll('.olho')
let brancoOlho = document.querySelectorAll('.brancoOlho')
setInterval(blink, 4000)

function blink(){
    if(!checkbox.checked){
        setTimeout(() => {
            olhos.forEach((item) =>{
                item.classList.toggle('hide')
            })
            brancoOlho.forEach((item) =>{
                item.classList.add('roxo')
            })
        }, 0);
        setTimeout(() => {
            olhos.forEach((item) =>{
                item.classList.toggle('hide')
            })
            brancoOlho.forEach((item) =>{
                item.classList.remove('roxo')
            })
        }, 300);
    }
    }

let elementosQueMudam = document.querySelectorAll('.mudar')

function pageTheme(){
    if(checkbox.checked){
        document.documentElement.setAttribute('data-theme', 'dark')
        elementosQueMudam.forEach(i => {
            i.classList.toggle('hide')
        });
        brancoOlho.forEach((item) =>{
            item.classList.toggle('roxo')
        })
    } else {
        document.documentElement.setAttribute('data-theme', 'light')
        elementosQueMudam.forEach(i => {
            i.classList.toggle('hide')
        });
        brancoOlho.forEach((item) =>{
            item.classList.toggle('roxo')
        })
    }
}


gsap.from("#nuvem01", {duration: 10, scaleY:0.95, scaleX:0.9, transformOrigin: 'center', xPercent: 100})
gsap.from("#nuvem02", {duration: 15, scaleX:0.9, transformOrigin: 'center', xPercent: -100})
gsap.from("#nuvem03", {duration: 20, scaleX:0.9, transformOrigin: 'center', xPercent: 200})
gsap.to(".marker01", {scaleX:1, rotation: -2, duration: 1, transformOrigin: "left"})
gsap.to(".marker02", {scaleX:1, duration: 1, transformOrigin: "left", delay:.5})
gsap.from("#waves", {duration: 3, xPercent:200, yPercent: 100})
gsap.from(".fillWhite", {duration: 3, yPercent: 100, delay: .5})


let tl = gsap.timeline({defaults:{opacity:0}})
    tl.from("#letra-r circle", {duration: .5, stagger: {amount: 1}})
    tl.from("#letra-a circle", {duration: .5, stagger: {amount: 1, from: "end"}}, "-=1")
    tl.from("#letra-f ellipse", {duration: .7, stagger: {amount: 1, from: "end"}}, "-=1")
    tl.from("#letra-f2 circle", {duration: .2,stagger: {amount: .5, from: "end"}}, "-=.5")
    tl.from("#letra-u circle", {duration: .3, stagger: {amount: 1, from: "end"}}, "-=1")
    tl.from("#letra-s circle", {duration: .5,stagger: {amount: 1, from: "end"}}, "-=1")
    tl.from("#letra-h circle", {duration: .5,stagger: {amount: 1, from: "end"}}, "-=1")
    tl.from(".maos", {duration:.1})
    tl.from(".bichinhoCorpo", {yPercent:300, duration:1})
    tl.from("#habilidades", {})

gsap.from(".estrela", {duration: .3, scale: 0, transformOrigin: "center", stagger: {amount:1, from:"random"}})
gsap.to(".estrela", {duration: .5, ease: Power1. easeInOut, duration:1, rotation: 30, repeat: -1, yoyo:true, transformOrigin:'center'})
gsap.to("#boca02", {scale:.8, yoyo:true, repeat:-1, duration:1})
gsap.to(".brilho", {scale: 1.5, yoyo:true, repeat: -1, duration:1, stagger: {amount:.5, from:"random"}})

let largura = window.innerWidth

console.log(largura)