import LocomotiveScroll from 'locomotive-scroll';

let selectors = document.querySelectorAll('.acc');

let img_bg = document.querySelectorAll('.acc-bg-img img');
let img_bot = document.querySelectorAll('.acc-bg-bot img');
let video_bg = document.querySelectorAll('.video-scroll');

let frogCloud_1 =  document.querySelector('.acc-bg-cloud-mob-1');
let frogCloud_2 =  document.querySelector('.acc-bg-cloud-mob-2');

let monsterHand =  document.querySelector('.acc-bg-monster_mobile-hand');
let monsterCloud =  document.querySelector('.acc-bg-monster_mobile-cloud');

let flowerTop =  document.querySelector('.paralax_flower_top');
let flowerBot =  document.querySelector('.paralax_flower_bottom');

function fullContentLoad(){
    new Promise((resolve)=>{
        resolve();
    }).then(()=>{
        setTimeout(()=>{
            selectors.forEach((el)=>{
                el.classList.add('active');
            })

            let speedValVideo = '2';
            let delayValVideo = '0.13';

            img_bg.forEach((el) => {
                let speedVal = '3';
                let delayVal = '0.04';

                if(window.innerWidth < 650){
                    speedVal = ".3";
                    delayVal = '0.04'
                }


                el.setAttribute('data-scroll','');
                el.setAttribute('data-scroll-speed', `${speedVal}`);
                el.setAttribute('data-scroll-delay', `${delayVal}`);
            });

            img_bot.forEach((el)=>{
                let speedVal = Math.random() * (3 - 1) + 1;
                let delayVal = Math.random() * (0.18 - 0.15) + 0.15;

                if(window.innerWidth < 650){
                    speedVal = ".3";
                    delayVal = '0.04'
                }

                el.setAttribute('data-scroll','');
                el.setAttribute('data-scroll-speed', `${speedVal}`);
                el.setAttribute('data-scroll-delay', `${delayVal}`);
            });

            video_bg.forEach((el)=>{

                if(window.innerWidth < 650){
                    speedValVideo = "0";
                    delayValVideo = '0'
                }

                el.setAttribute('data-scroll','');
                el.setAttribute('data-scroll-speed', `${speedValVideo}`);
                el.setAttribute('data-scroll-delay', `${delayValVideo}`);
            });

            frogCloud_1.setAttribute('data-scroll','');
            frogCloud_1.setAttribute('data-scroll-speed', `3`);
            frogCloud_1.setAttribute('data-scroll-delay', `0.05`);

            frogCloud_2.setAttribute('data-scroll','');
            frogCloud_2.setAttribute('data-scroll-speed', `1`);
            frogCloud_2.setAttribute('data-scroll-delay', `0.03`);

            monsterHand.setAttribute('data-scroll','');
            monsterHand.setAttribute('data-scroll-speed', `1`);
            monsterHand.setAttribute('data-scroll-delay', `0.03`);

            monsterCloud.setAttribute('data-scroll','');
            monsterCloud.setAttribute('data-scroll-speed', `3`);
            monsterCloud.setAttribute('data-scroll-delay', `0.07`);

            flowerTop.setAttribute('data-scroll','');
            flowerTop.setAttribute('data-scroll-speed', `1`);
            flowerTop.setAttribute('data-scroll-delay', `0.2`);

            flowerBot.setAttribute('data-scroll','');
            flowerBot.setAttribute('data-scroll-speed', `1`);
            flowerBot.setAttribute('data-scroll-delay', `0.1`);

            new LocomotiveScroll({
                el: document.querySelector('[data-scroll-container]'),
                smooth: true,
                smoothMobile: true,
                scrollFromAnywhere: true,
                reloadOnContextChange: true,
                mobile:{
                    breakpoint:0,
                    smooth: true,
                    multiplier: 15,
                    class: "is-reveal",
                },
                tablet:{
                    breakpoint:0,
                    smooth: true,
                    multiplier: 1,
                    class: "is-reveal",
                },
            });
        },1000);
    })
}

fullContentLoad();
