const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

// Estilos del Body
document.body.style.backgroundColor = "#1a1a1a"; 
document.body.style.color = "#f5f5f5"; 
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.textAlign = "center";
document.body.style.padding = "20px";

// H1
const titulo = document.createElement("h1");
titulo.textContent = "Metal Legends Albums";
document.body.appendChild(titulo);

// Lista UL
const listaAlbumes = document.createElement("ul");

listaAlbumes.style.listStyle = "none";
listaAlbumes.style.padding = "0";

// Bucle para crear listas LI
for (const album of albums) {
  const elementoLista = document.createElement("li");

  elementoLista.textContent = album;

  elementoLista.style.fontSize = "1.5rem";
  elementoLista.style.margin = "10px 0";
  elementoLista.style.padding = "10px";
  elementoLista.style.border = "1px solid #444";
  elementoLista.style.borderRadius = "8px";

  listaAlbumes.appendChild(elementoLista);
}

// Adjuntamos todo a la pagina
document.body.appendChild(listaAlbumes);
