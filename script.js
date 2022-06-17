// Mobile Menu Starts Here
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
    imageURL: './assets/snapshoot.png',
    privateClasses: {
      seeProjectBtn: 'see-projec-btn-1',
      modalContainer: 'modal-container1',
      modalCloseBtn: 'modal-close-btn1',
    },
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
    imageURL: './assets/snapshoot.png',
    privateClasses: {
      seeProjectBtn: 'see-projec-btn-2',
      modalContainer: 'modal-container2',
      modalCloseBtn: 'modal-close-btn2',
    },
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
    imageURL: './assets/snapshoot.png',
    privateClasses: {
      seeProjectBtn: 'see-projec-btn-3',
      modalContainer: 'modal-container3',
      modalCloseBtn: 'modal-close-btn3',
    },
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
    imageURL: './assets/snapshoot.png',
    privateClasses: {
      seeProjectBtn: 'see-projec-btn-4',
      modalContainer: 'modal-container4',
      modalCloseBtn: 'modal-close-btn4',
    },
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
    imageURL: './assets/snapshoot.png',
    privateClasses: {
      seeProjectBtn: 'see-projec-btn-5',
      modalContainer: 'modal-container5',
      modalCloseBtn: 'modal-close-btn5',
    },
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
    imageURL: './assets/snapshoot.png',
    privateClasses: {
      seeProjectBtn: 'see-projec-btn-6',
      modalContainer: 'modal-container6',
      modalCloseBtn: 'modal-close-btn6',
    },
  },
];

document.addEventListener('DOMContentLoaded', () => {
  const projectsContainer = document.querySelector('.posts');
  let projectContent;
  let projectLanguages;
  let projectCardContainer;
  let modalContent;
  let modalContainer;
  projects.forEach((project) => {
    projectLanguages = project.languages.map(
      (lang) => `<li>${lang}</li>`,
    );
    projectContent = `
                <h2>${project.title}</h2>
                <p>${project.description}</p>
                <ul class="languages">
                </ul>
                <a 
                class="cards-cta desktop ${project.privateClasses.seeProjectBtn}" target="blank">See Projects
                </a>
              `;

    projectCardContainer = document.createElement('div');
    projectCardContainer.innerHTML = projectContent;
    // set element class card
    projectCardContainer.setAttribute('class', 'cards', 'posts');
    projectsContainer.appendChild(projectCardContainer);

    modalContent = `
                  <div class="modal-content">
                    <div class="modal-header">
                      <h2>${project.title}</h2>
                      <button class="modal-close-btn ${project.privateClasses.modalCloseBtn}">&times;</button>
                    </div>
                    <ul class="modal-langs">
                      ${projectLanguages.join('')}
                    </ul>
                    <div class="modal-details">
                      <div> 
                        <img  class="modal-image" src=${project.imageURL} alt="Project Image">
                      </div>
                          <div class="modal-description">
                            <div>${project.details}</div>
                            <div class="modal-buttons">
                              <button class="modal-cta">See Live</button>
                              <button class="modal-cta">See Source</button>
                            </div>
                          </div>
                      </div>
                      
                    </div>
                    
                  </div>
                  `;

    modalContainer = document.createElement('div');
    modalContainer.innerHTML = modalContent;
    // set element class card
    modalContainer.setAttribute('class', `modal ${project.privateClasses.modalContainer}`);
    modalContainer.setAttribute('id', `${project.privateClasses.modalContainer}`);
    projectsContainer.appendChild(modalContainer);
  });
});
// show and hide modal
document.addEventListener('click', (event) => {
  let modalContainer;
  projects.forEach((project) => {
    modalContainer = document.getElementById(project.privateClasses.modalContainer);
    if (event.target.classList.contains(project.privateClasses.seeProjectBtn)) {
      modalContainer.style.display = 'block';
    }
    if (event.target.classList.contains(project.privateClasses.modalCloseBtn)) {
      modalContainer.style.display = 'none';
    }
  });
});

// Email Validation
document.querySelector('.submit').addEventListener('click', (event) => {
  const email = document.getElementById('email').value;
  const error = document.querySelector('.error');
  const isLowerCase = (str) => str === str.toLowerCase();
  if (!isLowerCase(email)) {
    event.preventDefault();
    error.innerHTML = 'Error: email should be in lowercase!';
    // Hide error after 5 seconds.
    setTimeout(() => {
      error.innerHTML = '';
    }, 5000);
  }
});
