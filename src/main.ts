import './style.css';
import { createElement } from './utils/createElement';
import { createCharacter } from './components/characters/characters';
import { getCharacter } from './utils/api';

let offset = 0;

const characters = await getCharacter(offset);

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
      childElements: characters.map((character) => {
        return createCharacter(character);
      }),
    }),
    createElement('input', {
      className: 'showMore',
      value: 'Mehr anzeigen',
      type: 'button',
      onclick: async () => {
        offset = offset + 9;
        const newCharacters = await getCharacter(offset);
        const newCharacterArray = newCharacters.map((newCharacter) => createCharacter(newCharacter));
        document.querySelector('main').append(...newCharacterArray);
      },
    }),
  ],
});

if (app !== null) {
  app.append(mainPage);
}
