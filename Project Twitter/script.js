//main page
const goToLoginPage = () =>{
    mainPage.style.display = 'none';
    goToLoginPage.style.display = 'grid'
}
middleContent.addEventListener('click',(e)=>{
    if(e.target.classList[1]==='main-btn'){
        goToLoginPage();
    }
})
btnTop.addEventListener('click',()=>{
    const inputUserInfo = document.querySelector('.user-info')
    const inputPasword = document.querySelector('.password')
    if()inputUserInfo.value{}
})