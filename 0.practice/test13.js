const hola = {
  casa: 12,
  perro: "gato",
  lista: [1, 2, 3, 4],
};

cama = { ...hola, lista: [...hola.lista, "cacadasdfasfs"] };

console.log(hola);

console.log(cama);
