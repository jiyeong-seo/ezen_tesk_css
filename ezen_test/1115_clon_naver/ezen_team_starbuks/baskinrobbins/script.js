let menu = document.querySelector("#menu");
let submenu = document.querySelector(".dropdown");
let opac = document.querySelector(".opa");

submenu.addEventListener('mouseover', () => {
  menu.style.height = '310px';
  opac.style.opacity = "1";
});

submenu.addEventListener('mouseout', () => {
  menu.style.height = '46px';
  opac.style.opacity = '0';
});


// 이미지 슬라이드
let slider = document.querySelector('#slider');
let slide = document.querySelectorAll('.slider-container');
let currentIdx = 0;
let slideCount = slide.length;
let slideWidth = outerWidth;
let prevBtn = document.querySelector('.prev');
let nextBtn = document.querySelector('.next');


// 이미지 복사해서 앞 뒤로 넣는 부분 
markClone();
function markClone(){
  for(var i=0; i<slideCount; i++){
    let cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add('clone');
    slider.appendChild(cloneSlide);
  }
  for(var i = slideCount -1; i>=0; i--){
    let cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add('clone');
    slider.prepend(cloneSlide);
  }
  updateWidth();
  setInitialPos();
  setTimeout(function(){
    slider.classList.add('animated');
  },100);
}

// slider-container 갯수만큼 width가 늘어남  
function updateWidth(){
  let currentSlides = document.querySelectorAll('.slider-container');
  let newSlideCount = currentSlides.length;
  let newWidth = slideWidth * newSlideCount + 'px';
  slider.style.width = newWidth;
}

function setInitialPos(){
  let initialTranslateValue = -slideWidth * slideCount + 'px';
  slider.style.transform = 'translateX('+ initialTranslateValue + 'px)';
}

// 한 번에 100vw 만큼 움직이고 스르륵 효과 넣어줌
function moveSlide (num){
  slider.style.left = -num * 100 + 'vw';
  currentIdx = num;
  console.log(currentIdx, slideCount);
  if(currentIdx == slideCount){
    setTimeout(function(){
    slider.classList.remove('animated');
    slider.style.left="0px";
    currentIdx = 0;
    },500);
    setTimeout(function(){
      slider.classList.add('animated');
    },600)
  }
}

slider.classList.add("animated")



// 좌우 버튼 누르면 100vw 씩 넘어감 
nextBtn.addEventListener("click", () => {
  moveSlide(currentIdx + 1);
});
prevBtn.addEventListener("click",()=>{
  moveSlide(currentIdx - 1);
});


// 자동으로 넘어가는 이미지
let timer = undefined;

function autoSlide(){
  if(timer == undefined){
    timer = setInterval(function(){
      moveSlide(currentIdx + 1);
    },3000);
  }
}
autoSlide();


// 이미지에 마우스 올리면 멈춤
//떼면 다시 움직임
function stopSlide(){
  clearInterval(timer);
  timer = undefined;
  console.log(timer);
}

slider.addEventListener("mouseenter",()=>{
  stopSlide();
});
slider.addEventListener("mouseleave",()=>{
  autoSlide();
})
