import './style.css';
import { createElement } from './utils/createElement';
import { createCharacter } from './components/characters/characters';

const app = document.querySelector<HTMLDivElement>('#app');

const mainPage = createElement('div', {
  childElements: [
    createElement('header', {
      childElements: [
        createElement('h1', {
          innerHTML: 'Break<span class="greenChars">in</span>g Bad App',
        }),
      ],
    }),
    createElement('nav', {
      className: 'main-navigation',
      childElements: [
        createElement('ul', {
          childElements: [
            createElement('li', {
              childElements: [
                createElement('a', {
                  className: 'main-navigation__links',
                  href: 'Link',
                  innerText: 'Characters',
                }),
                createElement('a', {
                  className: 'main-navigation__links',
                  href: 'Link',
                  innerText: 'Episodes',
                }),
                createElement('a', {
                  className: 'main-navigation__links',
                  href: 'Link',
                  innerText: 'Information',
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    createElement('main', {
      childElements: [
        createCharacter(),
        createCharacter(),
        createCharacter(),
        createCharacter(),
      ],
    }),
  ],
});

if (app !== null) {
  app.append(mainPage);
}
