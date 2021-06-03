const form = document.querySelector('form');
const botResponse = document.querySelector('#bot__response');

const questionBase = {
  'Как дела?': 'Все хорошо, а у тебя?',
  'Какая сегодня погода?': 'Погода как всегда отличная!'
};

const animationName = 'animate__pulse';

form.addEventListener('submit', event => {
  event.preventDefault();
  const value = event.target.question.value;
  const response = questionBase[value];
  if (response === undefined) {
    botResponse.innerHTML = 'Не понял ваш вопрос. Пожалуйста, повторите.'
  } else {
    botResponse.innerHTML = response;
    }
  event.target.question.value = '';
  botResponse.addEventListener('animationend', () => {
    botResponse.classList.remove(animationName);
    }, {once: true})
  botResponse.classList.add(animationName);
  
})
