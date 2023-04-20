const openModal=document.querySelector('.modal');
const Register=document.querySelector('.js-register');
const ModalLogin=document.querySelector('.js-login-layout');
const Login=document.querySelector('.js-login');
const ModalRegister=document.querySelector('.js-register-layout');
const ExitModal=document.querySelector('.modal__overlay');
function open(){
  openModal.classList.add('open');
  ModalRegister.classList.add('openLogin');
  ModalLogin.classList.add('off');
  
}
Register.addEventListener('click',open)
// login
function openLogin(){
    openModal.classList.add('open');
    ModalLogin.classList.add('openLogin');
    ModalRegister.classList.add('off');
}
Login.addEventListener('click',openLogin)

ExitModal.addEventListener('click',function(event){
    openModal.classList.remove('open');
    ModalLogin.classList.remove('openLogin');
    ModalRegister.classList.remove('openLogin');
})

// switch login
const switchBtnLogin=document.querySelector('.js-authr-form__switch-btn');
function switchLogin(){
  ModalRegister.classList.remove('openLogin');
  ModalLogin.classList.add('openLogin');
}
switchBtnLogin.addEventListener('click',switchLogin);

// switch register
const switchBtnRegister=document.querySelector('.js-authr-form__switch-btn-register');
function switchRegister(){
  ModalLogin.classList.remove('openLogin');
  ModalRegister.classList.add('openLogin');
}
switchBtnRegister.addEventListener('click',switchRegister)