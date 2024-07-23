const formEl = document.querySelector('.support-form');
const namelEl = document.querySelector("[name='name']");
const emailEl = document.querySelector("[name='email']");
const feedbackEl = document.querySelector("[name='feedback']");

const LS_KEY = 'feedback-form-state';

if (localStorage.getItem(LS_KEY)) {
  const text = JSON.parse(localStorage.getItem(LS_KEY));
  namelEl.value = text.name;
  emailEl.value = text.email;
  feedbackEl.value = text.feedback;
}

const info = {};
localStorage.getItem(LS_KEY);

export function renderContact() {
  formEl.addEventListener('submit', handleSubmit);
  formEl.addEventListener('input', handleInput);

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const feedback = form.elements.feedback.value;

    if (!name || !email || !feedback) {
      return alert('Please, fill in all fields!');
    }
    localStorage.removeItem(LS_KEY);

    form.reset();
  }

  function handleInput(e) {
    info[e.target.name] = e.target.value;

    localStorage.setItem(LS_KEY, JSON.stringify(info));
  }
}
// formEl.addEventListener('submit', handleSubmit);
// const LS_KEY = 'feedback-form-state';

// formEl.addEventListener('submit', handleSubmit);
// formEl.addEventListener('input', handleInput);

// if (localStorage.getItem(LS_KEY)) {
//   const text = JSON.parse(localStorage.getItem(LS_KEY));
//   namelEl.value = text.name;
//   emailEl.value = text.email;
//   feedbackEl.value = text.feedback;

//   console.log(text);
// }

// const info = {};
// console.log(info);

// localStorage.getItem(LS_KEY);

// function handleSubmit(e) {
//   e.preventDefault();

//   const form = e.target;
//   const name = form.elements.name.value;
//   const email = form.elements.email.value;
//   const feedback = form.elements.feedback.value;

//   if (!email || !name || !feedback) {
//     return alert('Всі поля повинні бути заповнені!');
//   }

//   localStorage.removeItem(LS_KEY);

//   form.reset();
// }

// function handleInput(e) {
//   info[e.target.name] = e.target.value;
//   localStorage.setItem(LS_KEY, JSON.stringify(info));
// }
