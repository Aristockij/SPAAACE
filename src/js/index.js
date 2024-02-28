import LocomotiveScroll from 'locomotive-scroll';

let selectors = document.querySelectorAll('.acc');

new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    smoothMobile: true,
    smartphone: {
        smooth: true,
    },
    scrollFromAnywhere: true,
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
