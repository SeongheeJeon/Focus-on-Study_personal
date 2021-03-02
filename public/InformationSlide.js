const SHOWING_CLASS = 'showing';

function movePrev(current, last) {
  if (current) {
    current.classList.remove(SHOWING_CLASS);
    const prev = current.previousElementSibling;
    if (prev) {
      prev.classList.add(SHOWING_CLASS);
    } else {
      last.classList.add(SHOWING_CLASS);
    }
  } else {
    last.classList.add(SHOWING_CLASS);
  }
}

function movePrevEvent() {
  const currentSlide = document.querySelector(
    '.siteInformationBox .slideImages img.showing',
  );
  const currentSlideText = document.querySelector(
    '.siteInformationBox .information p.showing',
  );
  const lastSlide = document.querySelector(
    '.siteInformationBox .slideBox .slideImages img:last-child',
  );

  const lastSlideText = document.querySelector(
    '.siteInformationBox .information p:last-child',
  );

  //슬라이드 변경
  movePrev(currentSlide, lastSlide);

  //슬라이드 소개 변경
  movePrev(currentSlideText, lastSlideText);
}

function moveNext(current, first) {
  if (current) {
    current.classList.remove(SHOWING_CLASS);
    const next = current.nextElementSibling;
    if (next) {
      next.classList.add(SHOWING_CLASS);
    } else {
      first.classList.add(SHOWING_CLASS);
    }
  } else {
    first.classList.add(SHOWING_CLASS);
  }
}

function moveNextEvent() {
  const firstSlide = document.querySelector(
    '.siteInformationBox .slideBox .slideImages img:first-child',
  );
  const firstSlideText = document.querySelector(
    '.siteInformationBox .information p:first-child',
  );
  const currentSlide = document.querySelector(
    '.siteInformationBox .slideImages img.showing',
  );
  const currentSlideText = document.querySelector(
    '.siteInformationBox .information p.showing',
  );

  //슬라이드 변경
  moveNext(currentSlide, firstSlide);

  //슬라이드 소개 변경
  moveNext(currentSlideText, firstSlideText);
}

function init() {
  const slideButtonPrev = document.querySelector(
    '.siteInformationBox .slideBox button.prev',
  );
  const slideButtonNext = document.querySelector(
    '.siteInformationBox .slideBox button.next',
  );

  slideButtonPrev.onclick = movePrevEvent;
  slideButtonNext.onclick = moveNextEvent;
}

init();
