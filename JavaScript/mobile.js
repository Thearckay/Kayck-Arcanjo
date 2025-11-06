
//Importanto butões

    const menuButton = document.getElementById('bi-header-list-button')
    const closeMenuButton = document.getElementById('close-menu-mobile-button')
    const menuMobileSkills = document.getElementById('menuMobileSkills') 
    const menuMobileCurriculum = document.getElementById('menuMobileCurriculum')
    const menuMobileCertificates = document.getElementById('menuMobileCertificates')

//


//funções

    function hideMobileMenu() {
        const menuMobile = document.getElementById('mobile-options')
        menuMobile.style.display = 'none'
    }

    function showMobileMenu() {
        const menuMobile = document.getElementById('mobile-options')
        menuMobile.style.display = 'block'
    }

    function alertDevelper() {
        alert('Essa função ainda está em desenvolvimento! Tente novamente em outro momento ;)')
    }
//



//Dando Funcionalidade de Click

    menuButton.addEventListener('click', showMobileMenu) //Menu mobile
    closeMenuButton.addEventListener('click', hideMobileMenu) //Fechar menu mobile

    //Botões do menu
    menuMobileSkills.addEventListener('click', hideMobileMenu) 
    menuMobileCurriculum.addEventListener('click', hideMobileMenu)
    menuMobileCertificates.addEventListener('click',hideMobileMenu)

//