const mainBnr = new Swiper('.main_bnr',{
    navigation:{
        prevEl:'.main_bnr_prev',
        nextEl:'.main_bnr_next',
    },
    pagination: {
        el: '.swiper-pagination',
        //type:'bullets'(기본)
        //type:'fraction' (숫자)
        //type:'progressbar' (바)
        type:'bullets',
    }
})

const guitar = new Swiper('.guitar_pro',{
    navigation:{
        prevEl:'.pro_prev',
        nextEl:'.pro_next',
    },
    slidesPerView: 1.3,
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    breakpoints: { //반응형 조건 속성
        1120: { //640 이상일 경우
            slidesPerView: 5, //레이아웃 2열
            centeredSlides: false,
            loop: false,
            slidesOffsetBefore: 0
        },
    }
})
const amp = new Swiper('.amp_pro',{
    navigation:{
        prevEl:'.pro_prev',
        nextEl:'.pro_next',
    },
    slidesPerView: 4, //640~1024 해상도 외 레이아웃 뷰 개수
    spaceBetween: 10, //위 slidesPerview 여백
        1120: { //640 이상일 경우
            slidesPerView: 4, //레이아웃 2열
            centeredSlides: false,
            loop: false,
            slidesOffsetBefore: 0
        },
})
const agui_selec = new Swiper('.guitar_selec',{
    navigation:{
        prevEl:'.selec_prev',
        nextEl:'.selec_next',
    },
    slidesPerView: 1, //640~1024 해상도 외 레이아웃 뷰 개수
    spaceBetween: 10, //위 slidesPerview 여백
    pagination: {
        el: '.swiper-pagination',
        //type:'bullets'(기본)
        //type:'fraction' (숫자)
        //type:'progressbar' (바)
        type:'bullets',
    }
})
const news = new Swiper('.news',{
    slidesPerView: 1.2, //640~1024 해상도 외 레이아웃 뷰 개수
    spaceBetween: 10, //위 slidesPerview 여백
    pagination: {
        el: '.swiper-pagination',
        type:'bullets',
    }
})
const guitarSelec = new Swiper('.guitar_selec',{
    slidesPerView: 1, //640~1024 해상도 외 레이아웃 뷰 개수
    spaceBetween: 10, //위 slidesPerview 여백
    pagination: {
        el: '.selec_pag',
        type:'bullets',
    }
})

const newsBtns = document.querySelectorAll('.news .news_btn');
const selec = document.querySelectorAll('.guitar_selec .selec_btm');

newsBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        // 1. 모든 버튼에서 active 클래스 제거
        newsBtns.forEach((b) => b.classList.remove('active'));
        
        // 2. 클릭된 버튼에만 active 클래스 추가
        e.currentTarget.classList.add('active');
    });
});
selec.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        // 1. 모든 버튼에서 active 클래스 제거
        selec.forEach((b) => b.classList.remove('active'));
        
        // 2. 클릭된 버튼에만 active 클래스 추가
        e.currentTarget.classList.add('active');
    });
});