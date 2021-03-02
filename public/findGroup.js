function findedGroupClickEvent(e) {
  const confirmV = confirm('선택한 그룹에 가입하시겠습니까?');
  if (confirmV == true) {
    console.log('yes');

    //DB처리

    alert('가입되었습니다.');
  } else {
    console.log('no');
  }
}
