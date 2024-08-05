let celulares = [
  {
    ip: 1,
    modelo: "xiaomi mi A2",
    precio: 350,
    marca: "xiaomi",
    bateria: "3000mah",
    procesador: "Snapdragon 660",
    pantalla: "IPS Full HD+",
    almacenamiento: "32/64 GB",
  },

  {
    ip: 2,
    modelo: "xiaomi redmi note 13",
    precio: 500,
    marca: "xiaomi",
    bateria: "5000mah",
    procesador: "Snapdragon 685",
    pantalla: "Amoled Full HD+",
    almacenamiento: "256 GB",
  },
  {
    ip: 3,
    modelo: "Samsung galaxy s24",
    precio: 1000,
    marca: "Samsung",
    bateria: "4000mah",
    procesador: "Exynos 2400",
    pantalla: "DYNAMIC AMOLED 2X",
    almacenamiento: "256 GB",
  },
  {
    ip: 4,
    modelo: "Samsung galaxy A15",
    precio: 300,
    marca: "Samsung",
    bateria: "5000mah",
    procesador: "Mediatek MT6789V/CD",
    pantalla: "Super Amoled Full HD+",
    almacenamiento: "128 GB",
  },
  {
    ip: 5,
    modelo: "Iphone 15",
    precio: 1200,
    marca: "Apple",
    bateria: "4900mah",
    procesador: "A16 Bionic",
    pantalla: "OLED",
    almacenamiento: "128 GB/257 GB/512 GB",
  },
  {
    ip: 6,
    modelo: "Iphone 14",
    precio: 1000,
    marca: "Apple",
    bateria: "3279mah",
    procesador: "A15 Bionic",
    pantalla: "OLED",
    almacenamiento: "128 GB/257 GB/512 GB",
  },
];

let carrito = [];

let seccion = document.createElement("section");
document.body.append(seccion);

celulares.forEach((celular) => {
  const cuadro = document.createElement("section");
  cuadro.innerHTML = `<h3>Modelo: ${celular.modelo}</h3>
          <h3>Almacenamiento: ${celular.almacenamiento}</h3>
          <h3>Bateria: ${celular.bateria}</h3>
          <h3>Pantalla: ${celular.pantalla}</h3>
          <h3>Procesador: ${celular.procesador}</h3>
          <h3>Marca: ${celular.marca}</h3>
          <h3>Precio: ${celular.precio}</h3>
          <button onclick="agregarAlCarrito(${celular.ip})">Agregar al carro</button>`;

  seccion.appendChild(cuadro);

  cuadro.className = "tabla";
});

let agregarAlCarrito = (ip) => {
  let celu = celulares.find((elemento) => elemento.ip === ip);
  carrito.push(celu);
  console.log(carrito);
};
