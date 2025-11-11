const STORAGE_KEY = 'feedback-form-state';

let formData = {
    email: '',
    message: '',
};


const form = document.querySelector('.feedback-form');

const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
    try {
    formData = JSON.parse(savedData);

    form.elements.email.value = formData.email || '';
    form.elements.message.value = formData.message || '';
    } catch (error) {
    console.error('Помилка при зчитуванні даних:', error);
    }
}

form.addEventListener('input', event => {
    const { name, value } = event.target;
    formData[name] = value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});


form.addEventListener('submit', event => {
    event.preventDefault();


    if (!formData.email || !formData.message) {
    alert('Будь ласка, заповніть усі поля.');
    return;
    }

    console.log('Submitted form data:', formData);

    form.reset();
    localStorage.removeItem(STORAGE_KEY);
    formData = { email: '', message: '' };
});