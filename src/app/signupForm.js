const signupForm = document.querySelector('#signup-form')

signupForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const email = signupForm['registro-email'].value
    const password = signupForm['registro-password'].value
    console.log(email);
    console.log(password);
})