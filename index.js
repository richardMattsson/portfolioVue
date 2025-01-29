const title = document.querySelector('#title');
const ul = document.querySelector('#ul');
const main = document.querySelector('#main');
const home = document.querySelector('#home');

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const titleFromHome = urlParams.get('title');

// title.textContent = titleFromHome;
// console.log(title.textContent);

// if (title.textContent === 'Projects') {
//   const shoppingListVue = {
//     name: 'Todo-list using Vue framework',
//     href: 'https://richardmattsson.github.io/Todo-List/',
//     img: 'todolistvue.png',
//   };
//   const shoppingList = {
//     name: 'Project on making a simple shoppinglist',
//     href: 'https://richardmattsson.github.io/shoppingList/',
//     img: 'shoppingList.png',
//   };
//   const ericaPaintings = {
//     name: 'Example website for a painter artist',
//     href: 'https://richardmattsson.github.io/Erica/',
//     img: 'erica.png',
//   };
//   const soccerStats = {
//     name: 'My site about european fotball',
//     href: 'https://richardmattsson.github.io/SoccerStats/',
//     img: 'soccerStat.png',
//   };
//   const blackJack = {
//     name: "The card game 'Black-jack'",
//     href: 'https://richardmattsson.github.io/blackjack2/',
//     img: 'blackjack.png',
//   };
//   const weatherApp = {
//     name: 'WeatherApp',
//     href: 'https://richardmattsson.github.io/weatherApp/',
//     img: 'weather.png',
//   };

//   createProjectLinks(weatherApp);
//   createProjectLinks(blackJack);
//   createProjectLinks(soccerStats);
//   createProjectLinks(ericaPaintings);
//   createProjectLinks(shoppingList);
//   createProjectLinks(shoppingListVue);

//   function createProjectLinks(project) {
//     const img = document.createElement('img');
//     img.setAttribute('src', project.img);
//     img.classList.add('projectImg');
//     // const li = document.createElement("li");
//     const a = document.createElement('a');
//     a.classList.add('projectLinks');
//     // li.textContent = project.name;
//     // li.appendChild(img);
//     a.setAttribute('href', project.href);
//     // a.appendChild(li);
//     a.appendChild(img);
//     // ul.appendChild(a);
//     main.appendChild(a);
//   }
// }

// home.addEventListener('click', () => {
//   window.location.href = 'index.html';
// });

const app = Vue.createApp({});

const Home = {
  template: `
  <header>
        <h1>Richard Mattsson</h1>
      </header>
      <main>
        <article>
          <figure>
            <img
              class="profileImg"
              src="images/profilbild.jpg"
              alt=""
            />
          </figure>
          <h2>Hej!</h2>
          <p>
            På denna sida lägger jag upp arbeten där jag visar vad jag lärt mig
            inom webutveckling och programmering.
          </p>
        </article>
        <section>
          <a class="innerLinks" href="CV.pdf">CV</a>
          <router-link class="innerLinks" to="/projects"
            >Projects</router-link
          >
        </section>
      </main>

      <footer class="footer">
        <a
          href="http://www.linkedin.com/in/richardmattsson"
          target="_blank"
          ><img
            src="images/LI-Logo.png"
            alt=""
            srcset=""
            id="linkedInLogo"
        /></a>
      </footer>
 `,
};

const Projects = {
  template: `
  <router-link
        style="text-decoration: none; color: rgb(202, 198, 198)"
        to="/"
        >◀</router-link
      >
      <h1>Projects</h1>
<main>
  <a class="projectLinks" href="https://richardmattsson.github.io/Todo-List/"
        ><img
          class="projectImg"
          src="images/todolistvue.png"
          alt=""
      /></a>
      <a class="projectLinks" href="https://richardmattsson.github.io/Erica/"
        ><img
          class="projectImg"
          src="images/erica.png"
          alt=""
      /></a>
      <a class="projectLinks" href="https://richardmattsson.github.io/SoccerStats/"
        ><img
          class="projectImg"
          src="images/soccerStat.png"
          alt=""
      /></a>
      <a class="projectLinks" href="https://richardmattsson.github.io/blackjack2/"
        ><img
          class="projectImg"
          src="images/blackjack.png"
          alt=""
      /></a>
      <a class="projectLinks" href="https://richardmattsson.github.io/weatherApp/"
        ><img
          class="projectImg"
          src="images/weather.png"
          alt=""
      /></a>

  </main>
  `,
};

const routes = [
  { component: Home, path: '/' },
  { component: Projects, path: '/projects' },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

app.use(router);

app.mount('#app');
