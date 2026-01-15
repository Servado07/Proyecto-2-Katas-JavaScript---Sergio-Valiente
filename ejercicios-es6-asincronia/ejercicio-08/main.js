const select = document.querySelector('#character-list');
const image = document.querySelector('.character-image');
const url = 'https://thronesapi.com/api/v2/Characters';

const getCharacters = async () => {
    try {
        const response = await fetch(url);
        const characters = await response.json();
        
        printCharacters(characters);
        
    } catch (error) {
        console.error("Hubo un error al traer los personajes:", error);
    }
};

const printCharacters = (characters) => {
    characters.forEach(character => {
        const option = document.createElement('option');
        
        option.value = character.imageUrl; 
        option.textContent = character.fullName;
        
        select.appendChild(option);
    });
};

select.addEventListener('change', (event) => {
    image.src = event.target.value; 
});

getCharacters();