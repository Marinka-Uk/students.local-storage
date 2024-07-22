const formRef = document.querySelector('.js-feedback-form');
const textareaRef = document.querySelector('.js-feedback-form textarea');

formRef.addEventListener('submit', handleFormSubmit);
textareaRef.addEventListener('input', handleTextareaInput);




function handleTextareaInput(event){
    const message = event.currentTarget.value
    c
    localStorage.setItem('message', message)
}


function getValueFromLocalStorage(){
    const message = localStorage.getItem('message')
    
}