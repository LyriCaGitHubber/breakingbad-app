import { createElement } from '../../utils/createElement';
import styles from './characters.module.css';

export function createCharacter(character) {
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
            className: 'character__race',
            childElements: [
              createElement('p', {
                innerText: character.birthday,
              }),
            ],
          }),
          createElement('section', {
            className: 'CharacterFirstSeenIn',
            childElements: [
              createElement('p', {
                innerText: 'First seen in',
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
