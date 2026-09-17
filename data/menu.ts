export type MenuItem = {
  name: string;
  price: string;
  description?: string;
};

export type MenuSection = {
  slug: string;
  title: string;
  note?: string;
  items: MenuItem[];
};

export const foodMenu: MenuSection[] = [
  {
    slug: "entradas",
    title: "Entradas",
    items: [
      { name: "Bruschettas", price: "$16.200", description: "Dos rodajas de pan horneado con cebolla, tomate, aceite de oliva y pimienta." },
      { name: "Platico valluno", price: "$24.300", description: "Una porción de empanada, marranita y aborrajado." },
      { name: "Patacones con ahogado", price: "$18.000", description: "Dos patacones con ahogado de tomate, cebolla y ajo." },
      { name: "Empanadas vallunas", price: "$17.400", description: "Tres empanadas." },
    ],
  },
  {
    slug: "cremas",
    title: "Cremas",
    note: "Acompañadas con tostadas de pan.",
    items: [
      { name: "Crema de pollo y champiñones", price: "$16.000" },
      { name: "Crema de tomate", price: "$14.500" },
    ],
  },
  {
    slug: "ensaladas",
    title: "Ensaladas",
    items: [
      { name: "Ensalada César", price: "$24.600", description: "Variedad de lechugas con pollo o jamón, crotones, queso parmesano y vinagreta César." },
      { name: "Ensalada mixta con atún", price: "$25.600", description: "Variedad de hortalizas con atún y vinagreta casera." },
    ],
  },
  {
    slug: "sandwiches",
    title: "Sándwiches",
    items: [
      { name: "Sándwich de pollo gratinado", price: "$27.100", description: "Pan horneado, pollo, mozzarella, salsa bechamel y parmesano, acompañado con papas a la francesa." },
      { name: "Sándwich frío de atún o pollo", price: "$25.000", description: "Pan, atún o pollo desmechado en salsa tártara, lechuga y tomate." },
    ],
  },
  {
    slug: "carnes",
    title: "Carnes a la parrilla",
    note: "Acompañadas con papas a la francesa o arroz y ensalada.",
    items: [
      { name: "Baby beef", price: "$45.000", description: "280 g de lomo de res." },
      { name: "Lomo de cerdo", price: "$37.500", description: "280 g de lomo de cerdo." },
      { name: "Costillas a la BBQ", price: "$45.200", description: "280 g de costilla de cerdo." },
      { name: "Milanesa de pollo o cerdo", price: "$34.500", description: "280 g de pechuga de pollo o carne de cerdo apanada." },
      { name: "Filete de pollo a la plancha", price: "$28.600", description: "280 g de pechuga de pollo." },
    ],
  },
  {
    slug: "pescados",
    title: "Pescados",
    note: "Acompañados con papas a la francesa o arroz y ensalada.",
    items: [
      { name: "Filete de tilapia en salsa de limón", price: "$32.300", description: "200 g de tilapia preparada en salsa de limón." },
      { name: "Trucha al ajillo", price: "$35.500", description: "Trucha preparada en salsa de ajo." },
      { name: "Filete de corvina o pescado de temporada", price: "$49.600", description: "250 g de pescado." },
    ],
  },
  {
    slug: "especialidades",
    title: "Especialidades",
    note: "Acompañadas con papas a la francesa o arroz y ensalada.",
    items: [
      { name: "Lomo Café de París", price: "$49.200", description: "280 g de lomo de res con mantequilla de especias." },
      { name: "Lomo de cerdo en salsa agridulce", price: "$39.500", description: "280 g de lomo de cerdo con salsa de piña y trozos de jamón." },
      { name: "Filete de pollo en salsa de champiñones", price: "$35.300", description: "280 g de pechuga de pollo en salsa de champiñones." },
    ],
  },
  {
    slug: "favoritos",
    title: "Favoritos de la casa",
    items: [
      { name: "Hamburguesa Angus", price: "$29.500", description: "Pan, 120 g de carne de res, queso, tocineta, lechuga y tomate. Acompañada con papas a la francesa." },
      { name: "Pasta carbonara", price: "$31.300", description: "200 g de spaghetti con tocineta y salsa carbonara de cebolla, parmesano, especias, huevo y crema de leche." },
      { name: "Pasta napolitana con pollo", price: "$26.500", description: "200 g de spaghetti con salsa pomodoro y trozos de pollo." },
      { name: "Pizza de pollo y champiñones", price: "$24.000", description: "Pan de pizza, salsa pomodoro, queso, pollo y champiñones." },
      { name: "Pizza hawaiana", price: "$23.200", description: "Pan de pizza, salsa pomodoro, queso, jamón y piña." },
    ],
  },
  {
    slug: "vegetariano",
    title: "Vegetariano",
    items: [
      { name: "Wraps de queso", price: "$26.500", description: "Dos wraps con queso, lechuga, tomate y salsa de la casa." },
      { name: "Pasta con vegetales", price: "$32.500", description: "200 g de spaghetti con vegetales salteados, salsa de soya y teriyaki." },
      { name: "Empanadas de queso", price: "$22.000" },
    ],
  },
  {
    slug: "infantil",
    title: "Menú infantil",
    items: [
      { name: "Nuggets de pollo", price: "$26.500", description: "Seis nuggets de pollo acompañados con papas a la francesa." },
      { name: "Salchipapa", price: "$23.000", description: "Porción de papas a la francesa y salchicha." },
      { name: "Pasta al burro", price: "$24.200", description: "200 g de spaghetti preparados con mantequilla y queso parmesano." },
    ],
  },
  {
    slug: "postres",
    title: "Postres",
    items: [
      { name: "Torta con helado", price: "$18.500" },
      { name: "Brownie con helado", price: "$21.000" },
      { name: "Postre de la casa", price: "$11.000" },
      { name: "Copa con helado", price: "$12.000" },
    ],
  },
];

export const drinkMenu: MenuSection[] = [
  {
    slug: "jugos",
    title: "Jugos y bebidas sin alcohol",
    note: "Los jugos preparados en leche tienen un valor adicional de $2.000.",
    items: [
      { name: "Jugo de mango", price: "$10.500" },
      { name: "Jugo de mora", price: "$9.800" },
      { name: "Jugo de maracuyá", price: "$10.500" },
      { name: "Jugo de guanábana", price: "$10.000" },
      { name: "Limonada", price: "$9.500" },
      { name: "Gaseosa", price: "$6.200" },
      { name: "Botella de agua", price: "$5.000" },
    ],
  },
  {
    slug: "sodas",
    title: "Sodas italianas",
    items: [
      { name: "Maracuyá", price: "$18.000" },
      { name: "Lulo", price: "$18.000" },
      { name: "Frutos rojos", price: "$18.000" },
    ],
  },
  {
    slug: "sodas-con-licor",
    title: "Sodas italianas con licor",
    items: [
      { name: "Maracuyá", price: "$34.000" },
      { name: "Lulo", price: "$36.000" },
    ],
  },
  {
    slug: "cervezas",
    title: "Cervezas",
    items: [
      { name: "Poker", price: "$9.000" },
      { name: "Club Colombia", price: "$10.000" },
      { name: "Stella Artois", price: "$13.900" },
    ],
  },
  {
    slug: "licores",
    title: "Vinos y licores",
    items: [
      { name: "Copa de vino tinto", price: "$23.000" },
      { name: "Copa de vino blanco", price: "$23.600" },
      { name: "Trago de Ron Viejo de Caldas", price: "$25.000" },
      { name: "Trago de Ron Bacardí", price: "$28.000" },
      { name: "Trago de Ron Zacapa", price: "$44.000" },
      { name: "Buchanan’s 12 años", price: "$35.000" },
    ],
  },
];

export const allergenNotice =
  "Todos los platos se preparan al momento. Algunos ingredientes pueden contener o haber estado en contacto con gluten, frutos secos, huevo, mostaza, leche, lácteos, semillas de sésamo, pescados, mariscos, soya, apio, sulfitos, moluscos o altramuces. Informa al equipo al hacer tu pedido si tienes alguna alergia alimentaria. Aunque tomamos precauciones, no podemos garantizar platos completamente libres de alérgenos.";
