
const side = document.querySelectorAll('.pro_side .proSide')
const color = document.querySelectorAll('.color_btn_wrap .color_btn')
side.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        // 1. 모든 버튼에서 active 클래스 제거
        side.forEach((b) => b.classList.remove('active'));
        
        // 2. 클릭된 버튼에만 active 클래스 추가
        e.currentTarget.classList.add('active');
    });
});
color.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        // 1. 모든 버튼에서 active 클래스 제거
        color.forEach((b) => b.classList.remove('active'));
        
        // 2. 클릭된 버튼에만 active 클래스 추가
        e.currentTarget.classList.add('active');
    });
});