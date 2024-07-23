const formEl = document.querySelector("[name='issue_report_form']");
const emailEl = document.querySelector("[name='user_email']");

const LS_KEY = 'feedback-form-subscribe';

if (localStorage.getItem(LS_KEY)) {
  const text = JSON.parse(localStorage.getItem(LS_KEY));
  emailEl.value = text.user_email;
}

const info = {};
localStorage.getItem(LS_KEY);

export function renderHome() {
  formEl.addEventListener('submit', handleSubmit);
  formEl.addEventListener('input', handleInput);

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const email = form.elements.user_email.value;

    if (!email) {
      return alert('Please enter a valid email!');
    }
    localStorage.removeItem(LS_KEY);

    form.reset();
  }

  function handleInput(e) {
    info[e.target.name] = e.target.value;
    localStorage.setItem(LS_KEY, JSON.stringify(info));
  }
}
