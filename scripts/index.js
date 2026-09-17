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
        prevEl:'.main_bnr_prev',
        nextEl:'.main_bnr_next',
    },
    slidesPerView: 1, //640~1024 해상도 외 레이아웃 뷰 개수
    spaceBetween: 10, //위 slidesPerview 여백
})