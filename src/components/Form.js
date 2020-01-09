export const Form = () => {
  const button = document.getElementById('formSubmit')
  const form = document.getElementById('contactForm')
  const message = document.getElementById('messageForm')

  button.onclick = () => {
    console.log('Enviado')
    form.classList.add('form-hide')
    message.classList.remove('form-hide')
    message.classList.add('form-show')
  }
}
