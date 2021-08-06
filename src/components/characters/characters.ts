import { createElement } from '../../utils/createElement';
import styles from './characters.module.css';

export function createCharacter() {
  return createElement('article', {
    className: styles.character,
    childElements: [
      createElement('img', {
        className: styles.character__image,
        src: 'https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg',
        alt: 'Character',
      }),
      createElement('div', {
        childElements: [
          createElement('h2', {
            className: 'character__name',
            innerText: 'Name',
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
                innerText: 'Species',
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
