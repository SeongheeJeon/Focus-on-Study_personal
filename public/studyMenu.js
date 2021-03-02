const studyMenus = document.querySelector('.study-menu');
const lis = document.querySelectorAll('.study-menu li');

studyMenus.addEventListener('click', (event) => {
  const target = event.target;
  if (target.dataset) {
    lis.forEach((li) => {
      li.classList.remove('on');
      studyDisplayNone(li.dataset.link);
    });
    target.classList.add('on');
    studyDisplayOn(target.dataset.link);
  }
});

function studyDisplayNone(selector) {
  const selectedDiv = document.querySelector(selector);
  selectedDiv.style.display = 'none';
}

function studyDisplayOn(selector) {
  const selectedDiv = document.querySelector(selector);
  selectedDiv.style.display = 'block';
}
