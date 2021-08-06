export async function getCharacter(offset) {
  const getAllCharactersUrl = `https://www.breakingbadapi.com/api/characters?limit=9&offset=${offset}`;
  const response = await fetch(getAllCharactersUrl);
  const data = await response.json();
  const getCharacter = data.map((character) => {
    const formattedCharacter = {
      name: character.name,
      birthday: character.birthday,
      img: character.img,
      actor: character.portrayed,
    };
    return formattedCharacter;
  });
  return getCharacter;
}
