const image = document.querySelector('.random-image');

const getRandomPokemon = async () => {
    const id = Math.floor(Math.random() * 151) + 1;
    
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        
        image.src = data.sprites.other['official-artwork'].front_default;
        
    } catch (error) {
        console.error("Error al obtener el Pokemon:", error);
    }
};

getRandomPokemon();