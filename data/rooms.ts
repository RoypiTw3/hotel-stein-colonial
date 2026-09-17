export type Room = {
  name: string;
  image: string;
  description: string;
  capacity: string;
  bed: string;
};

export const rooms: Room[] = [
  {
    name: "Habitación doble",
    image: "/images/room-double.jpg",
    description: "Decorada en tonos cálidos y muebles tipo colonial, pensada para descansar con calma después de recorrer Cali.",
    capacity: "1–2 huéspedes",
    bed: "1 cama doble",
  },
  {
    name: "Doble familiar",
    image: "/images/room-family.jpg",
    description: "Una opción amplia para compartir en familia, con la comodidad y el trato cercano que distingue al hotel.",
    capacity: "Hasta 4 huéspedes",
    bed: "Configuración familiar",
  },
  {
    name: "Doble superior",
    image: "/images/room-superior.jpg",
    description: "Un ambiente sereno, de tonos cálidos y mobiliario colonial, con espacio adicional para una estadía más cómoda.",
    capacity: "1–2 huéspedes",
    bed: "1 cama doble",
  },
  {
    name: "Twin o cuádruple",
    image: "/images/room-twin.jpg",
    description: "Distribución flexible para amigos, familias o equipos de trabajo que prefieren camas separadas.",
    capacity: "Hasta 4 huéspedes",
    bed: "Camas separadas",
  },
];
