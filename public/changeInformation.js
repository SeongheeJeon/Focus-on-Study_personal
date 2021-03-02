const changePw = document.querySelector('.changePw');
const changeNn = document.querySelector('.changeNn');

function toggleUpDown(div, btn) {
  // toggle 이벤트 처리
  div.classList.toggle('open');

  if (btn.innerText === '비밀번호 변경하기▼') {
    btn.style.backgroundColor = 'rgb(170, 170, 170)';
    btn.innerText = '비밀번호 변경하기▲';
  } else if (btn.innerText === '비밀번호 변경하기▲') {
    btn.style.backgroundColor = 'rgba(218, 218, 218, 0.753)';
    btn.innerText = '비밀번호 변경하기▼';
  } else if (btn.innerText === '별명 변경하기▼') {
    btn.style.backgroundColor = 'rgb(170, 170, 170)';
    btn.innerText = '별명 변경하기▲';
  } else {
    btn.style.backgroundColor = 'rgba(218, 218, 218, 0.753)';
    btn.innerText = '별명 변경하기▼';
  }
}

function eraseInput(form) {
  // form 안의 내용 모두 지우기(초기화 버튼)
  const input = form.querySelectorAll('input');
  input.forEach((i) => {
    i.value = '';
  });
}

function submitPw() {
  // 비밀번호 변경 제출
}

function submitNn() {
  // 별명 변경 제출
}
