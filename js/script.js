


const container = document.querySelector('.slider');
document.querySelector('.slide').addEventListener('input', (e) => {
  container.style.setProperty('--position', `${e.target.value}%`);
})

const tl = gsap.timeline({ paused: true });


function revealMenu() {
  revealMenuItems();

  const toggleBtn = document.getElementById("menu-toggle");
  const closeBtn = document.getElementById("close-menu");

  toggleBtn.onclick = function (e) {
    tl.reversed(!tl.reversed());
  };

  closeBtn.onclick = function (e) {
    tl.reversed(!tl.reversed());
  };
}

revealMenu();

function revealMenuItems() {
  tl.to(".menu-container", 0.01, {
    height: "210px",
  });

  tl.to(".col-1", 1, {
    left: "-200px",
    ease: "power4.inOut",
  });

  tl.to(
    ".col-2",
    0.025,
    {
      left: "0px",
      ease: "power4.inOut",
    },
    "<"
  );

  tl.to(
    ".col-2 > .menu-item",
    1,
    {
      left: 0,
      ease: "power4.inOut",
      stagger: {
        amount: 0.25,
      },
    },
    "<"
  ).reverse();
}

gsap.to(".marquee", {
  x: "-25%",
  duration: 10,
  ease: "none",
  repeat: -1,
  yoyo: true,
});

document.addEventListener("DOMContentLoaded", function () {
  var menuContainer = document.querySelector(".menu-container");
  var marqueeContainer = document.querySelector(".marquee-container");
  var isInsideMenuContainer = false;

  menuContainer.addEventListener("mouseenter", function () {
    isInsideMenuContainer = true;
    marqueeContainer.style.display = "block";
  });

  menuContainer.addEventListener("mousemove", function (event) {
    if (isInsideMenuContainer) {
      marqueeContainer.style.display = "block";
      var pageXOffset =
        window.pageXOffset || document.documentElement.scrollLeft;
      var pageYOffset =
        window.pageYOffset || document.documentElement.scrollTop;

      var cursorX = event.clientX + pageXOffset;
      var cursorY = event.clientY + pageYOffset;

      var containerX = cursorX - marqueeContainer.offsetWidth / 2;
      var containerY = cursorY - marqueeContainer.offsetHeight / 2;

      gsap.to(marqueeContainer, {
        scale: 1,
        left: containerX + 25,
        top: containerY,
        duration: 1,
        ease: "power3.out",
      });
    }
  });

  menuContainer.addEventListener("mouseleave", function () {
    isInsideMenuContainer = false;
    gsap.to(marqueeContainer, {
      scale: 0,
      duration: 0.5,
      ease: "power3.out",
      onComplete: function () {
        marqueeContainer.style.display = "none";
      },
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var menuContainer = document.querySelector(".menu-container");
  var marqueeText = document.querySelector(".marquee");

  var isInsideMenuContainer = false;

  menuContainer.addEventListener("mouseenter", function () {
    isInsideMenuContainer = true;
  });

  menuContainer.addEventListener("mousemove", function (event) {
    if (isInsideMenuContainer) {
      var hoveredMenuItem = event.target.closest(".menu-item");
      var hoveredText = hoveredMenuItem.textContent.trim() || "INSTAGRAM";
      var marqueeContent = (hoveredText + "  ").repeat(12);
      marqueeText.innerHTML = marqueeContent.replace(/\s/g, "&nbsp;");
    }
  });

  menuContainer.addEventListener("mouseleave", function () {
    isInsideMenuContainer = false;
    var marqueeContent = ("home" + "  ").repeat(12);
    marqueeText.innerHTML = marqueeContent.replace(/\s/g, "&nbsp;");
  });
});

let target = 0;
let current = 0;
let ease = 0.075;

const slider = document.querySelector(".slider");
const sliderWrapper = document.querySelector(".slider-wrapper");
const markerWrapper = document.querySelector(".marker-wrapper");
const activeSlide = document.querySelector(".active-slide");

let maxScroll = sliderWrapper.offsetWidth - window.innerWidth;

function lerp(start, end, factor) {
  return start + (end - start) * factor;
}

function updateActiveSlideNumber(markerMove, markerMaxMove) {
  const partWidth = markerMaxMove / 20;
  let currentPart = Math.round((markerMove - 70) / partWidth) + 1;
  currentPart = Math.min(20, currentPart);
  activeSlide.textContent = `${currentPart}/20`;
}

function update() {
  current = lerp(current, target, ease);

  gsap.set(".slider-wrapper", {
    x: -current,
  });

  let moveRatio = current / maxScroll;

  let markerMaxMove = window.innerWidth - markerWrapper.offsetWidth - 170;
  let markerMove = 70 + moveRatio * markerMaxMove;
  gsap.set(".marker-wrapper", {
    x: markerMove,
  });

  updateActiveSlideNumber(markerMove, markerMaxMove);

  requestAnimationFrame(update);
}

window.addEventListener("resize", () => {
  maxScroll = sliderWrapper.offsetWidth - window.innerWidth;
});

window.addEventListener("wheel", (e) => {
  target += e.deltaY;

  target = Math.max(0, target);
  target = Math.min(maxScroll, target);
});

update();






document.addEventListener("DOMContentLoaded", function() {
  // Hide loader after 2 seconds (2000ms)
  setTimeout(function() {
      document.querySelector('.loader-container').style.display = 'none';
  }, 3500);
});


function startLoader() {
  var counterElement = document.querySelector(".counter");
  var currentValue = 0;

  function updateCounter() {
    if (currentValue === 100) {
      return;
    }

    currentValue += Math.floor(Math.random() * 20) + 1;

    if (currentValue > 100) {
      currentValue = 100;
    }

    counterElement.textContent = "+ " + currentValue;

    var delay = Math.floor(Math.random() * 200) + 50;
    setTimeout(updateCounter, delay);
  }

  updateCounter();
}

startLoader();
gsap.to(".counter", 0.25, {
  delay: 2.5,
  opacity: 0,
  
});
gsap.to(".bar", 1.5, {
  delay: 1.5,
  height: 0,
  stagger: {
    amount: 0.5,
  },
  ease: "power4.inOut",
});
gsap.from(".h1", 1.5, {
  delay: 4,
  y: 700,
  stagger: {
    amount: 0.5,
  },
  ease: "power4.inOut",

});

