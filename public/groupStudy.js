const selectGroupForm = document.selectGroupForm;
const selectOptions = document.querySelector('.selectGroup');
const groupToDoBox = document.querySelector('.groupToDoBox');
const liveListBox = document.querySelector('.liveListBox');
const inviteBtn = document.querySelector('#inviteBtn');

function selectGroup() {
  selectGroupForm.submit();
  selectOptions.blur();

  if (selectOptions.value == 'default') {
    selectGroupDefault();
  } else {
    groupToDoBox.style.display = 'inline-block';
    liveListBox.style.display = 'inline-block';
    inviteBtn.style.display = 'inline';
  }
}

function selectGroupDefault() {
  groupToDoBox.style.display = 'none';
  liveListBox.style.display = 'none';
  inviteBtn.style.display = 'none';
}

function createGroup() {
  window.open(
    '/aloneStudy/createGroup',
    'Create Group',
    'toolbar=no, width=360px, height=550px, directories=no, status=no,    scrollorbars=no, resizable=no',
  );
}

// function selectGroupSubmit(e) {
//   console.log(e.target);
// }

function findGroup() {
  window.open(
    '/aloneStudy/findGroup',
    'Find Member',
    'toolbar=no, width=480px, height=550px, directories=no, status=no,    scrollorbars=no, resizable=no',
  );
}

function inviteMember() {
  window.open(
    '/aloneStudy/inviteMember',
    'Invite Member',
    'toolbar=no, width=360px, height=200px, directories=no, status=no,    scrollorbars=no, resizable=no',
  );
}

function init() {
  selectGroupDefault();
  // selectGroupForm.addEventListener('submit', selectGroupSubmit);
}

init();
