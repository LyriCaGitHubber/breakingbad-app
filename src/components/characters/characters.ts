import { createElement } from '../../utils/createElement';
import styles from './characters.module.css';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function createCharacter(character): HTMLElement {
  return createElement('article', {
    className: styles.character,
    childElements: [
      createElement('img', {
        className: styles.character__image,
        src: character.img,
        alt: 'Character',
      }),
      createElement('div', {
        childElements: [
          createElement('h2', {
            className: 'character__name',
            innerText: character.name,
          }),
          createElement('section', {
            className: 'character__aliveStatus',
            childElements: [
              createElement('p', {
                innerText: 'Alive',
              }),
            ],
          }),
          createElement('section', {
            className: 'character__birthday',
            childElements: [
              createElement('p', {
                innerText: `Birthday: ${character.birthday}`,
              }),
            ],
          }),
          createElement('section', {
            className: 'character__actor',
            childElements: [
              createElement('p', {
                innerText: `Actor: ${character.actor}`,
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
