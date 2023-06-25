'use strict'

//ローディングアニメーション
window.onload = ( () => {
    setTimeout( () => {
        const loader = document.querySelector(".loading");
        loader.classList.add("loaded");
        const content = document.querySelector(".loading-hidden");
        content.style.visibility = "visible";
    },2000);
});

// ハンバーガーメニュー
const fixed = document.querySelector("body");
const nav = document.querySelector(".nav-content");
const burger = document.querySelector(".burger");
const highlight = document.querySelector(".back-highlight");
const clickToggle = () => {
    fixed.classList.toggle("back-fixed");
    nav.classList.toggle("nav-active");
    burger.classList.toggle("toggle");
    highlight.classList.toggle("black-cover");
}
burger.addEventListener('click', () => {
    clickToggle();
});
highlight.addEventListener('click', () => {
    clickToggle();
});

//スクロールイベント
const scrollAnime = () => {
    $('.scrollTrigger').each(function(){
        let elemPos = $(this).offset().top;
        let scroll = $(window).scrollTop();
        let windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
        $(this).addClass('explanation-content');
        }
    });
}
const delayScrollAnime = () => {
    let time = 0.5;
    let value = time;
    $('.fadeUpTrigger').each(function(){
        let elemPos = $(this).offset().top;
        let scroll = $(window).scrollTop();
        let windowHeight = $(window).height();
        let childs = $(this).children();

        if(scroll >= elemPos - windowHeight){
            $(childs).each(function(){
                if(!$(this).hasClass("fade-up")){
                    $(this).css("animation-delay",value + "s");
                    $(this).addClass("fade-up");
                    value = value + time;
                }
            })
        }
    })
}
const SlideAnime = () => {
    let time = 0.5;
    let value = time;
    $('.fadeSlideTrigger').each(function(){
        let elemPos = $(this).offset().top;
        let scroll = $(window).scrollTop();
        let windowHeight = $(window).height();
        let childs = $(this).children();

        if(scroll >= elemPos - windowHeight){
            $(childs).each(function(){
                if(!$(this).hasClass("fade-slide")){
                    $(this).css("animation-delay",value + "s");
                    $(this).addClass("fade-slide");
                    value = value + time;
                }
            })
        }
    })
}
const SlideAnimeReverse = () => {
    let time = 0.5;
    let value = time;
    $('.fadeSlideTriggerReverse').each(function(){
        let elemPos = $(this).offset().top;
        let scroll = $(window).scrollTop();
        let windowHeight = $(window).height();
        let childs = $(this).children();

        if(scroll >= elemPos - windowHeight){
            $(childs).each(function(){
                if(!$(this).hasClass("fade-slide-reverse")){
                    $(this).css("animation-delay",value + "s");
                    $(this).addClass("fade-slide-reverse");
                    value = value + time;
                }
            })
        }
    })
}
$(window).scroll( () => {
    scrollAnime();
    delayScrollAnime();
    SlideAnime();
    SlideAnimeReverse();
});

