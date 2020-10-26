// иниуиализация vue компонента



var app = new Vue({
    el: '#app',  
    data: {

      projects: [
            {
              title: 'АО Еврохим',
              city: 'г. Кингисепп',
              projectType: 'Бытовка',
              image: 'img/project__item-bg.png',
              duration: 1,
              metters: 115,
              images: [
                'img/kingisep2.jpg',
                'img/kingisep1.jpg',
                'img/kingisep3.jpg',
                'img/kingisep4.jpg',
              ],
            },
             {
              title: 'АО Еврохим',
              city: 'г. Усть - Луга',
              projectType: 'Модульное здание',
              image: 'img/luga__1.jpg',
              duration: 3,
              metters: 180,
              images: [
                'img/luga__1.jpg',
                'img/luga__2.jpg',
                'img/luga__3.jpg',
                'img/luga__4.jpg',
              ],
            },
      ],
        modalIsOpen: false,
        modalProject: [],
        modalTitle: ''
    },
    computed: {
      getActiveImg(){
        return this.modalProject.find(item => item.active == true)
      }
    },
    methods: {
      toggleModal (index, title) {

        this.modalTitle = title

        document.body.classList.add('overHidden')

        this.projects[index].images.forEach(item => {
          this.modalProject.push({img: item, active: false})
        })

        this.modalProject[0].active = true

        this.modalIsOpen = !this.modalIsOpen; 
        
      },
      closeModal(){
        this.modalProject = [];
        document.body.classList.remove('overHidden');
        this.modalIsOpen = !this.modalIsOpen;
      },
      activateMainImg(index){
        this.modalProject.forEach(item =>{
          item.active = false
        })
        this.modalProject[index].active = true
      }
     
      
    },
})




// Mobile Menu

const menuBtn = document.querySelector('.header__bar-burger'),
  menu = document.querySelector('.header__mobileMenu'),
  menuItems = document.querySelectorAll('.header__mobileMenu-item'),
  htmlBlock = document.querySelector('html');


  menuBtn.addEventListener('click', toggleMenu);

  menuItems.forEach((e) => {
    e.addEventListener('click', toggleMenu)
  });

function toggleMenu () {
    menu.classList.toggle('active');
    menuBtn.classList.toggle('open');
    if (menu.classList.contains('active')) {
      document.body.style.overflow = "hidden";
      htmlBlock.style.overflow = "hidden";
    }
    else {
      document.body.style.overflow = "";
      htmlBlock.style.overflow = "";
    }  
  }



  // Open Modal 

  const closeModal = document.querySelector('.modal__form-close'),
    openModal = document.querySelectorAll('.btnOpenModal'),
    modal = document.querySelector('.modal__form');

openModal.forEach((e) => {
  e.addEventListener('click', toggleModal)
});

closeModal.addEventListener('click', toggleModal)

function toggleModal () {
    modal.classList.toggle('open');
    if (modal.classList.contains('open')) {
      document.body.style.overflow = "hidden";
      htmlBlock.style.overflow = "hidden";
    }
    else {
      document.body.style.overflow = "";
      htmlBlock.style.overflow = "";

    }  
  }

// ACCORDION 

const accordionItem = document.querySelectorAll(".accordion__item");

accordionItem.forEach((el) =>
  el.addEventListener("click", () => {
    if (el.classList.contains("active")) {
      el.classList.remove("active");
    } else {
      accordionItem.forEach((item) => item.classList.remove("active"));
      el.classList.add("active");
    }
  })
);



// SMooth Scroll 

const anchors = document.querySelectorAll('.smoothScrollTo')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href')
    
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}


// const projects = document.querySelector('.projects'),
  

// function scrollTo(element) {
//   window.scroll({
//     left: 0, 
//     top: element.offsetTop, 
//     behavior: 'smooth'
//   })
// };

