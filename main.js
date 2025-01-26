const numero = document.querySelector(".numero");
const botonIncrementar = document.querySelector(".btn-incrementar");
const botonDecrementar = document.querySelector(".btn-decrementar");
const botonReset = document.querySelector(".reset");

let contador = 0;

const actualizarContador = () => {
  console.log(contador);
  numero.textContent = contador;
};

botonIncrementar.addEventListener("click", () => {
  contador++;
  actualizarContador();  
})

botonDecrementar.addEventListener("click", () => {
  contador--;
  actualizarContador();
})

botonReset.addEventListener("click", () => {
  contador = 0;
  actualizarContador();
})

