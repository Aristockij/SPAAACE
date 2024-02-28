import LocomotiveScroll from 'locomotive-scroll';

let selectors = document.querySelectorAll('.acc');

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});


function fullContentLoad(){
    new Promise((resolve)=>{
        resolve();
    }).then(()=>{
        setTimeout(()=>{
            selectors.forEach((el)=>{
                el.classList.add('active');
            })
        },1000)
    })

}

fullContentLoad();
