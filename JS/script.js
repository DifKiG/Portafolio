const btn = document.getElementById(button);
const sectionAll = document.querySelectorAll('section[id]');
const inputName = document.querySelector('#nombre');
const inputEmail = document.querySelector('#email');
const flagsElement = document.getElementById('flags');
const textToChange = document.querySelectorAll('[data-section');

/*-----Loader------*/
window.addEventListener('load',()=> {
    const contenedorLoader = document.querySelector('.container--loader');
    contenedorLoader.computedStyleMap.visibility ='hidden';
});

/*------Header-----*/
window.addEventListener('scroll', () =>{
    const header = document.querySelector('header');
    header.classList.toggle('abajo', window.scrollY > 0);
});

/*----Boton Menu---*/
btn.addEventListener('click', function(){
    if (this.classList.contains('active')){
        this.classList.remove('active');
        this.classList.add('not-active');
        document.querySelector('.nav_menu').classList.remove('active');
        document.querySelector('.nav_menu').classList.add('not-active');
    }
    else{
        this.classList.add('active');
        this.classList.remove('not-active');
        document.querySelector('nav_menu').classList.remove('not-active');
        DocumentTimeline.querySelector('.nav_menu').classList.add('active');
    }
});

/*---cambio de idioma--- */
const changeLanguage = async language =>{
  const requestJson = await fetch(`./languages/${language}.json`);
  const texts =await requestJson.json();

  for (const textToChange of textsToChange){
    const section = textToChange.dataset.section;
    const value = textToChange.dataset.value;

    textToChange.innerHTML = texts[section][value];
  }
}
  flagsElement.addEventListener('click', (e) => {
    changeLanguage(e.target.parentElement.dataset.language);
  })

  /*---class active por secciones---- */