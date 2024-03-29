import LocomotiveScroll from 'locomotive-scroll';

let selectors = document.querySelectorAll('.acc');

let img_bg = document.querySelectorAll('.acc-bg-img img');
let img_bot = document.querySelectorAll('.acc-bg-bot img');
let video_bg = document.querySelectorAll('.video-scroll');

function fullContentLoad(){
    new Promise((resolve)=>{
        resolve();
    }).then(()=>{
        setTimeout(()=>{
            selectors.forEach((el)=>{
                el.classList.add('active');
            })
            img_bg.forEach((el) => {
                let speedVal = '3'
                let delayVal = '0.04'

                if(window.innerWidth < 650){
                    speedVal = 0;
                    delayVal = 0
                }

                el.setAttribute('data-scroll','');
                el.setAttribute('data-scroll-speed', `${speedVal}`);
                el.setAttribute('data-scroll-delay', `${delayVal}`);
            });

            img_bot.forEach((el)=>{
                let speedVal = Math.floor(Math.random() * (3 - 1) + 1);
                let delayVal = Math.random() * (0.18 - 0.15) + 0.15;

                if(window.innerWidth < 650){
                    speedVal = 0;
                    delayVal = 0
                }
                el.setAttribute('data-scroll','');
                el.setAttribute('data-scroll-speed', `${speedVal}`);
                el.setAttribute('data-scroll-delay', `${delayVal}`);
            });

            video_bg.forEach((el)=>{
                el.setAttribute('data-scroll','');
                el.setAttribute('data-scroll-speed', '2');
                el.setAttribute('data-scroll-delay', '0.13');
            });

            new LocomotiveScroll({
                el: document.querySelector('[data-scroll-container]'),
                smooth: true,
                smoothMobile: false,
                scrollFromAnywhere: true,
            });
        },1000);
    })

}

fullContentLoad();
