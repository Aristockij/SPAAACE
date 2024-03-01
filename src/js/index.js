import LocomotiveScroll from 'locomotive-scroll';

let selectors = document.querySelectorAll('.acc');

let img_bg = document.querySelectorAll('.acc-bg-img img');
let img_bot = document.querySelectorAll('.acc-bg-bot img');
let video_bg = document.querySelectorAll('.acc-bg-video');

function fullContentLoad(){
    new Promise((resolve)=>{
        resolve();
    }).then(()=>{
        setTimeout(()=>{
            selectors.forEach((el)=>{
                el.classList.add('active');
            })
            img_bg.forEach((el)=>{
                el.setAttribute('data-scroll','');
                el.setAttribute('data-scroll-speed', '4');
                el.setAttribute('data-scroll-delay', '0.04');
            });

            img_bot.forEach((el)=>{
                el.setAttribute('data-scroll','');
                el.setAttribute('data-scroll-speed', '3.5');
                el.setAttribute('data-scroll-delay', '0.17');
            });

            video_bg.forEach((el)=>{
                el.setAttribute('data-scroll','');
                el.setAttribute('data-scroll-speed', '2');
                el.setAttribute('data-scroll-delay', '0.13');
            });

            new LocomotiveScroll({
                el: document.querySelector('[data-scroll-container]'),
                smooth: true,
                smoothMobile: true,
                smartphone: {
                    smooth: true,
                },
                scrollFromAnywhere: true,
            });
        },1000);
    })

}

fullContentLoad();
