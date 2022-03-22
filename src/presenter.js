import mostrarImpu from "./estado";
import multiplicar from "./multiplicador";
import calcularImpuesto from "./calcularImpuesto";
import mostrarDescu from "./Descuento";
import calcularDes from "./calcularDescuento";
import calcularTotal from "./calcularTotal";

const cant = document.querySelector("#cantidad-item");
const precio = document.querySelector("#precio-item");
const form = document.querySelector("#cantidad-form");
const estado = document.querySelector("#estado-item");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(cant.value);
  const SecondNumber = Number.parseInt(precio.value);
  const est = estado.value;
  const precioNeto = multiplicar(firstNumber,SecondNumber);
  const porceImpu = mostrarImpu(est);
  const impu = calcularImpuesto(precioNeto,porceImpu);
  const porceDescu = mostrarDescu(firstNumber);
  const des = calcularDes(precioNeto,impu,porceDescu);
  const total = calcularTotal(precioNeto,impu,des);

  div.innerHTML = "<p>Cantidad de item: " + firstNumber + "</p>";      
  div.innerHTML = div.innerHTML +  "<p>Precio por Item: " + SecondNumber + "</p>";
  div.innerHTML = div.innerHTML +  "<p>Codigo de estado: " + est +"</p>";
  div.innerHTML = div.innerHTML +  "<p>Precio Neto ("+firstNumber+"*$"+SecondNumber+"): $" + precioNeto + "</p>";
  div.innerHTML = div.innerHTML +  "<p>Impuesto para "+ est+"(%"+porceImpu+"): $" + impu + "</p>";
  div.innerHTML = div.innerHTML +  "<p>Descuento ("+porceDescu+"%): "+ des +"</p>";
  div.innerHTML = div.innerHTML +  "<p>Precio Total (descuento e impuesto): $"+ total +"</p>";
});