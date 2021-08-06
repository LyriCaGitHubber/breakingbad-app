const getAllCharactersUrl = 'https://www.breakingbadapi.com/api/characters';

export async function getCharacter() {
  const response = await fetch(getAllCharactersUrl);
  const data = await response.json();
  const getCharacter = data.map((character) => {
    const formattedCharacter = {
      name: character.name,
      birthday: character.birthday,
      img: character.img,
    };
    return formattedCharacter;
  });
  return getCharacter;
}
