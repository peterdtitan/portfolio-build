const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const logo = document.querySelector('.logo');
const navItem = document.querySelector('.nav-item');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  logo.classList.toggle('active');
  navItem.classList.toggle('active');
});

document.querySelectorAll('.nav-item').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  logo.classList.remove('active');
}));

// Initialize an array to store cards.
const projects = [
  {
    title: 'Professional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry´s standard',
    languages: ['html', 'css', 'bootstrap'],
    details: 
              `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s 
              with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax 
              map lapora verita.
              `,
    seeLiveLink: '',
    seeSourceLink: '',
    imageURL: '../assets/card.png'
  },
  {
    title: 'Professional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry´s standard',
    languages: ['html', 'css', 'bootstrap'],
    details: 
              `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s 
              with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax 
              map lapora verita.
              `,
    seeLiveLink: '',
    seeSourceLink: '',
    imageURL: '../assets/card.png'
  },
  {
    title: 'Professional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry´s standard',
    languages: ['html', 'css', 'bootstrap'],
    details: 
              `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s 
              with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax 
              map lapora verita.
              `,
    seeLiveLink: '',
    seeSourceLink: '',
    imageURL: '../assets/card.png'
  },
  {
    title: 'Professional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry´s standard',
    languages: ['html', 'css', 'bootstrap'],
    details: 
              `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s 
              with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax 
              map lapora verita.
              `,
    seeLiveLink: '',
    seeSourceLink: '',
    imageURL: '../assets/card.png'
  },
  {
    title: 'Professional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry´s standard',
    languages: ['html', 'css', 'bootstrap'],
    details: 
              `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s 
              with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax 
              map lapora verita.
              `,
    seeLiveLink: '',
    seeSourceLink: '',
    imageURL: '../assets/card.png'
  },
  {
    title: 'Professional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry´s standard',
    languages: ['html', 'css', 'bootstrap'],
    details: 
              `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s 
              with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax 
              map lapora verita.
              `,
    seeLiveLink: '',
    seeSourceLink: '',
    imageURL: '../assets/card.png'
  },
]

document.addEventListener('DOMContentLoaded', () => {
  const projectsContainer = document.querySelector('.posts');
  let projectContent;
  let projectLanguages;
  let projectCardContainer;
  let modalContent;
  projects.forEach((project) => {
    projectLanguages = project.languages.map(
      (lang) => `<li>${lang}</li>`,
    );
    projectContent = 
    `            
                <h2>${project.title}</h2>
                <p>${project.description}</p>
                <ul class="languages">
                </ul>
                <a href="https://github.com/peterdtitan/portfolio-build" class="cards-cta desktop" target="blank">See Projects</a>
              `;
    
    projectCardContainer = document.createElement('div');
    projectCardContainer.innerHTML = projectContent;
    // set element class card
    projectCardContainer.setAttribute('class', 'cards', 'posts');
    projectsContainer.appendChild(projectCardContainer);

    modalContent = `  
                  <div class="modal-content">
                    <h2>Multi-Post Stories</h2>
                    <ul class="modal-langs">
                        <li>html</li>
                        <li>bootstrap</li>
                        <li>ruby</li>
                    </ul>
                    <img src="./assets/card.png" alt="Porject Image">
                    <description>Heloo theissskdrjklewndkadnkscn vcsvjjvnscknkdvnk</description>
                  </div>
                  `;

    modalContainer = document.createElement('div');
    modalContainer.innerHTML = projectContent;
    // set element class card
    projectCardContainer.setAttribute('class', 'modal');
    projectsContainer.appendChild(modalContainer);
  })
})