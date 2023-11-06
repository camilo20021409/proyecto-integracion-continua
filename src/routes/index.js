const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => res.json([{
  "_id": {
    "$oid": "6546d813784ee9001e24028a"
  },
  "acertijo": "¿Cuál de las siguientes es una fruta cítrica?",
  "opciones": {
    "A": "Manzana",
    "B": "Plátano",
    "C": "Naranja",
    "D": "Uva"
  },
  "respuesta_correcta": "C"
},
{
  "_id": {
    "$oid": "6546d867784ee9001e24028c"
  },
  "acertijo": "¿Cuál de los siguientes planetas es el más cercano al Sol?",
  "opciones": {
    "A": "Tierra",
    "B": "Júpiter",
    "C": "Marte",
    "D": "Mercurio"
  },
  "respuesta_correcta": "D"
},
{
  "_id": {
    "$oid": "6546d8aa784ee9001e240290"
  },
  "acertijo": "¿Qué instrumento musical se toca golpeando con martillos?",
  "opciones": {
    "A": "Guitarra",
    "B": "Piano",
    "C": "Violín",
    "D": "Xilófono"
  },
  "respuesta_correcta": "D"
},
{
  "_id": {
    "$oid": "6546d8ba784ee9001e240292"
  },
  "acertijo": "¿Cuál de las siguientes estaciones del año es la más fría?",
  "opciones": {
    "A": "Primavera",
    "B": "Verano",
    "C": "Otoño",
    "D": "Invierno"
  },
  "respuesta_correcta": "D"
},
{
  "_id": {
    "$oid": "6546d8dd784ee9001e240294"
  },
  "acertijo": "¿Cuál de las siguientes ciudades es la capital de Francia?",
  "opciones": {
    "A": "Roma",
    "B": "Madrid",
    "C": "Berlín",
    "D": "París"
  },
  "respuesta_correcta": "D"
},
{
  "_id": {
    "$oid": "6546d8e9784ee9001e240296"
  },
  "acertijo": "¿Cuál de los siguientes animales es un mamífero volador?",
  "opciones": {
    "A": "Tiburón",
    "B": "Águila",
    "C": "Murciélago",
    "D": "Serpiente"
  },
  "respuesta_correcta": "C"
},
{
  "_id": {
    "$oid": "6546d8f2784ee9001e240298"
  },
  "acertijo": "¿Cuál de las siguientes películas fue dirigida por Steven Spielberg?",
  "opciones": {
    "A": "Jurassic Park",
    "B": "Titanic",
    "C": "Star Wars",
    "D": "The Matrix"
  },
  "respuesta_correcta": "A"
},
{
  "_id": {
    "$oid": "6546d90b784ee9001e24029a"
  },
  "acertijo": "¿Cuál de los siguientes elementos químicos tiene el símbolo 'H'?",
  "opciones": {
    "A": "Helio",
    "B": "Oxígeno",
    "C": "Hidrógeno",
    "D": "Carbono"
  },
  "respuesta_correcta": "C"
},
{
  "_id": { "$oid": "1" },
  "acertijo": "¿Qué filósofo griego es conocido por sus diálogos y su teoría de las Ideas?",
  "opciones": {
    "A": "Sócrates",
    "B": "Aristóteles",
    "C": "Platón",
    "D": "Heráclito"
  },
  "respuesta_correcta": "C"
},
{
  "_id": { "$oid": "2" },
  "acertijo": "¿En qué año Albert Einstein publicó su teoría de la relatividad especial?",
  "opciones": {
    "A": "1905",
    "B": "1921",
    "C": "1935",
    "D": "1945"
  },
  "respuesta_correcta": "A"
},
{
  "_id": { "$oid": "3" },
  "acertijo": "¿Quién escribió 'Cien años de soledad'?",
  "opciones": {
    "A": "Mario Vargas Llosa",
    "B": "Gabriel García Márquez",
    "C": "Julio Cortázar",
    "D": "Pablo Neruda"
  },
  "respuesta_correcta": "B"
},
{
  "_id": { "$oid": "4" },
  "acertijo": "¿Cuál es el número atómico del elemento químico helio?",
  "opciones": {
    "A": "2",
    "B": "8",
    "C": "4",
    "D": "18"
  },
  "respuesta_correcta": "A"
},
{
  "_id": { "$oid": "5" },
  "acertijo": "¿Quién pintó la 'Mona Lisa'?",
  "opciones": {
    "A": "Vincent van Gogh",
    "B": "Pablo Picasso",
    "C": "Leonardo da Vinci",
    "D": "Rembrandt"
  },
  "respuesta_correcta": "C"
},
{
  "_id": { "$oid": "6" },
  "acertijo": "¿Cuál es el país más grande del mundo en términos de superficie terrestre?",
  "opciones": {
    "A": "China",
    "B": "Estados Unidos",
    "C": "Rusia",
    "D": "Canadá"
  },
  "respuesta_correcta": "C"
},
{
  "_id": { "$oid": "7" },
  "acertijo": "¿Qué pintor neerlandés es conocido por sus autorretratos y 'La noche estrellada'?",
  "opciones": {
    "A": "Vermeer",
    "B": "Mondrian",
    "C": "Van Gogh",
    "D": "Bosch"
  },
  "respuesta_correcta": "C"
},
{
  "_id": { "$oid": "8" },
  "acertijo": "¿Cuál es el planeta más grande del sistema solar?",
  "opciones": {
    "A": "La Tierra",
    "B": "Marte",
    "C": "Júpiter",
    "D": "Urano"
  },
  "respuesta_correcta": "C"
},
{
  "_id": { "$oid": "9" },
  "acertijo": "¿Cuál es el río más largo del mundo?",
  "opciones": {
    "A": "Nilo",
    "B": "Amazonas",
    "C": "Misisipi",
    "D": "Yangtsé"
  },
  "respuesta_correcta": "A"
},
{
  "_id": { "$oid": "10" },
  "acertijo": "¿Cuál es la montaña más alta del mundo?",
  "opciones": {
    "A": "Monte McKinley",
    "B": "Monte Kilimanjaro",
    "C": "Monte Everest",
    "D": "Monte Fuji"
  },
  "respuesta_correcta": "C"
},
{
  "_id": { "$oid": "11" },
  "acertijo": "¿Cuál es el océano más grande del mundo?",
  "opciones": {
    "A": "Océano Atlántico",
    "B": "Océano Pacífico",
    "C": "Océano Índico",
    "D": "Océano Ártico"
  },
  "respuesta_correcta": "B"
},
{
  "_id": { "$oid": "12" },
  "acertijo": "¿Cuál es el símbolo químico del oro?",
  "opciones": {
    "A": "Ag",
    "B": "Au",
    "C": "Fe",
    "D": "Hg"
  },
  "respuesta_correcta": "B"
},
{
  "_id": { "$oid": "13" },
  "acertijo": "¿En qué año se hizo la primera llamada telefónica?",
  "opciones": {
    "A": "1867",
    "B": "1885",
    "C": "1876",
    "D": "1903"
  },
  "respuesta_correcta": "C"
},
{
  "_id": { "$oid": "14" },
  "acertijo": "¿Cuál es el metal más abundante en la corteza terrestre?",
  "opciones": {
    "A": "Aluminio",
    "B": "Hierro",
    "C": "Oro",
    "D": "Cobre"
  },
  "respuesta_correcta": "A"
},
{
  "_id": { "$oid": "15" },
  "acertijo": "¿Cuál es el idioma más hablado en el mundo?",
  "opciones": {
    "A": "Inglés",
    "B": "Chino mandarín",
    "C": "Español",
    "D": "Hindi"
  },
  "respuesta_correcta": "B"
},
{
  "_id": { "$oid": "16" },
  "acertijo": "¿Cuál es la fórmula química del agua?",
  "opciones": {
    "A": "H2O",
    "B": "CO2",
    "C": "O2",
    "D": "H2SO4"
  },
  "respuesta_correcta": "A"
},
{
  "_id": { "$oid": "17" },
  "acertijo": "¿Cuál es la capital de Japón?",
  "opciones": {
    "A": "Pekín",
    "B": "Bangkok",
    "C": "Tokio",
    "D": "Nueva Delhi"
  },
  "respuesta_correcta": "C"
},
{
  "_id": { "$oid": "18" },
  "acertijo": "¿Cuál es la novela más vendida de todos los tiempos?",
  "opciones": {
    "A": "Cien años de soledad",
    "B": "Don Quijote de la Mancha",
    "C": "El Señor de los Anillos",
    "D": "Harry Potter y la piedra filosofal"
  },
  "respuesta_correcta": "B"
},
{
  "_id": { "$oid": "19" },
  "acertijo": "¿En qué año se fundó la Organización de las Naciones Unidas (ONU)?",
  "opciones": {
    "A": "1945",
    "B": "1956",
    "C": "1932",
    "D": "1967"
  },
  "respuesta_correcta": "A"
},
{
  "_id": { "$oid": "20" },
  "acertijo": "¿Cuál es el proceso por el cual las plantas convierten la luz solar en energía?",
  "opciones": {
    "A": "Fotosíntesis",
    "B": "Respiración",
    "C": "Fotografía",
    "D": "Clorofila"
  },
  "respuesta_correcta": "A"
},
{
  "_id": { "$oid": "21" },
  "acertijo": "¿Cuál es el instrumento musical conocido como 'el rey de los instrumentos'?",
  "opciones": {
    "A": "Violín",
    "B": "Piano",
    "C": "Flauta",
    "D": "Guitarra"
  },
  "respuesta_correcta": "B"
},
{
  "_id": { "$oid": "22" },
  "acertijo": "¿Cuál es el gas más abundante en la atmósfera de la Tierra?",
  "opciones": {
    "A": "Oxígeno",
    "B": "Dióxido de carbono",
    "C": "Nitrógeno",
    "D": "Hidrógeno"
  },
  "respuesta_correcta": "C"
},
{
  "_id": { "$oid": "23" },
  "acertijo": "¿Cuál es el país más poblado del mundo?",
  "opciones": {
    "A": "India",
    "B": "Estados Unidos",
    "C": "China",
    "D": "Rusia"
  },
  "respuesta_correcta": "C"
},
{
  "_id": { "$oid": "24" },
  "acertijo": "¿Cuál es el proceso de eliminación de sales disueltas en agua para obtener agua potable?",
  "opciones": {
    "A": "Desalación",
    "B": "Ebullición",
    "C": "Destilación",
    "D": "Filtración"
  },
  "respuesta_correcta": "A"
},
{
  "_id": { "$oid": "25" },
  "acertijo": "¿Cuál es la montaña más alta de América?",
  "opciones": {
    "A": "Monte McKinley",
    "B": "Monte Kilimanjaro",
    "C": "Monte Aconcagua",
    "D": "Monte Everest"
  },
  "respuesta_correcta": "C"
},
{
  "_id": { "$oid": "26" },
  "acertijo": "¿Cuál es el océano más pequeño del mundo?",
  "opciones": {
    "A": "Océano Atlántico",
    "B": "Océano Pacífico",
    "C": "Océano Índico",
    "D": "Océano Ártico"
  },
  "respuesta_correcta": "D"
},
{
  "_id": { "$oid": "27" },
  "acertijo": "¿Cuál es el río más largo de América del Norte?",
  "opciones": {
    "A": "Río Amazonas",
    "B": "Río Misisipi",
    "C": "Río Colorado",
    "D": "Río Hudson"
  },
  "respuesta_correcta": "B"
},
{
  "_id": { "$oid": "28" },
  "acertijo": "¿Cuál es el mayor planeta del sistema solar?",
  "opciones": {
    "A": "Júpiter",
    "B": "Saturno",
    "C": "Neptuno",
    "D": "Urano"
  },
  "respuesta_correcta": "A"
},
{
  "_id": { "$oid": "29" },
  "acertijo": "¿Cuál es la moneda oficial de Japón?",
  "opciones": {
    "A": "Won",
    "B": "Yuan",
    "C": "Yen",
    "D": "Baht"
  },
  "respuesta_correcta": "C"
}
]));
module.exports = router;
