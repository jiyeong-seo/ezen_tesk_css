

document.addEventListener("DOMContentLoaded", function () {
    const slideWrap = document.querySelector("#slider");
    const slideContainer = document.querySelector(".slide_container");
    const slide = document.querySelectorAll(".slide");
    let slideHeight = 0;
    let pagerHTML = "";
    let pager = document.getElementById("pager");
    let slideTwo = document.querySelectorAll(".slide2");


    for (let i = 0; i < slide.length; i++) {
        if (slideHeight < slide[i].offsetHeight) {
            slideHeight = slide[i].offsetHeight;
        }
    }

    slideWrap.style.height = slideHeight + "px";
    slideContainer.style.height = slideHeight + "px";

    for (let a = 0; a < slide.length; a++) {
        slide[a].style.left += a * 960 + "px";
        pagerHTML += '<button data-idx="' + a + '"class=button>' + (a + 1) + '</button>';
        pager.innerHTML = pagerHTML;
    }


    for (let c = 0; c < slideTwo.length; c++) {
        slideTwo[c].style.left += c * 1040 + "px";
    }




    let pagerBtn = document.querySelectorAll(".button");

    let navPrev = document.getElementById("prev");
    let navNext = document.getElementById("next");
    let currentIdx = 0;

    function moveSlide(num) {
        slideContainer.style.left = -num * 960 + "px";
        currentIdx = num;
        for (let y = 0; y < pagerBtn.length; y++) {
            pagerBtn[y].classList.remove("active");
        }
        pagerBtn[num].classList.add("active");

        if (currentIdx == 0) {
            navPrev.classList.add("disabled");
        } else {
            navPrev.classList.remove("disabled");
        }

        if (currentIdx == slide.length - 1) {
            navNext.classList.add("disabled");
        } else {
            navNext.classList.remove("disabled");
        }

    }

    moveSlide(0);

    slideContainer.classList.add("animated");

    navPrev.addEventListener("click", function () {
        moveSlide(currentIdx - 1);
    });
    navNext.addEventListener("click", function () {
        moveSlide(currentIdx + 1);

    });


    const sliderContainer = document.querySelector(".slider_container2");
    let aPrev = document.querySelector(".aprev");
    let aNext = document.querySelector(".anext");
    let cidx = 0;


    function goToSlide(wid) {
        sliderContainer.style.left = -wid * 960 + "px";
        cidx = wid;
        if (cidx == 0) {
            aPrev.classList.add("disabled");
        } else {
            aPrev.classList.remove("disabled");
        }
        if (cidx == slideTwo.length - 1) {
            aNext.classList.add("disabled");
        } else {
            aNext.classList.remove("disabled");
        }
    }
    goToSlide(0);

    aPrev.addEventListener("click", function () {
        goToSlide(cidx - 1);
    });
    aNext.addEventListener("click", function () {
        goToSlide(cidx + 1);

    });





    for (let x = 0; x < pagerBtn.length; x++) {
        pagerBtn[x].addEventListener("click", function (event) {
            let pagerNum = event.target.innerText - 1;
            moveSlide(pagerNum);
        });
    }








    // 헤더 
    let header = document.querySelector(".menu");
    let headerHeight = header.offsetHeight;

    window.onscroll = () => {
        let windowTop = window.scrollY;
        if (windowTop >= headerHeight) {
            header.classList.add("drop");
        } else {
            header.classList.remove("drop");
        }
    }

    //슬라이더2 
    let article = document.querySelectorAll(".article");
    for (let d = 0; d < article.length; d++) {
        article[d].style.left += d * 20 + "px";
    }


    //탑버튼
    let btt = document.querySelector("#topbtn");
    let docElem = document.documentElement;
    let offset = '';
    let docHeight = Math.max(docElem.offsetHeight, docElem.scrollHeight);

    if (docHeight !== 0) {
        offset = docHeight / 5;
    }

    window.addEventListener("scroll", () => {
        let scrollPos = docElem.scrollTop;
        btt.className = (scrollPos > offset) ? 'visible' : '';
    });

    //사이드메뉴 
    document.querySelector(".open").addEventListener("click", () => {
        document.querySelector(".sidemenu").style.width = "260px";
    });
    document.querySelector(".close").addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(".sidemenu").style.width = "0px";
    });

    //탭 메뉴 
    let tablink = document.querySelectorAll(".tablink");

    for(const tab of tablink) {
        tab.addEventListener("click", e=> {
          for(const item of document.querySelectorAll(".tablink")){
            item.classList.remove("active");
          }
          e.currentTarget.classList.add("active");
   
          for (const tc of document.querySelectorAll(".tabcontent")){
            tc.classList.remove("active");
          }
          const menu = e.currentTarget.dataset.menu;
          document.getElementById(menu).classList.add("active");
        })
      }

});






