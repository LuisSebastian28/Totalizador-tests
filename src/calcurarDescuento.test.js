import calcularDes from "./calcularDescuento.js";
import mostrarDescu from "./Descuento";// manda el porcentaje de descuento
import mostrarImpu from "./estado.js";
import calcularImpuesto from "./calcularImpuesto.js"; // calcula el impuesto
import multiplicar from "./multiplicador.js"; //manda el precio neto

describe("Calcular Impuesto", () => {
  it("deberia calcular el descuento del estado UT  de 3 productos con precio de 15", () => {
    const precioNeto = multiplicar(3,15);
    const impuesto = mostrarImpu('UT');
    const totImpuesto = calcularImpuesto(precioNeto,impuesto);
    const mDescuento = mostrarDescu(3);
    const totDescuento = calcularDes(precioNeto,totImpuesto,mDescuento);
    expect(totDescuento).toEqual(0);
  });

  //TEST PARA EL DECUENTO EN DIFERENTES ESTADOS CON EL MISMO PRECIO Y CANTIDAD

  it("deberia calcular el descuento del estado UT  de 1000 productos con precio de 15", () => {
    const precioNeto = multiplicar(1000,15);
    const impuesto = mostrarImpu('UT');
    const totImpuesto = calcularImpuesto(precioNeto,impuesto);
    const mDescuento = mostrarDescu(1000);
    const totDescuento = calcularDes(precioNeto,totImpuesto,mDescuento);
    expect(totDescuento).toEqual(479.475);
  });
  it("deberia calcular el descuento del estado NV  de 1000 productos con precio de 15", () => {
    const precioNeto = multiplicar(1000,15);
    const impuesto = mostrarImpu('NV');
    const totImpuesto = calcularImpuesto(precioNeto,impuesto);
    const mDescuento = mostrarDescu(1000);
    const totDescuento = calcularDes(precioNeto,totImpuesto,mDescuento);
    expect(totDescuento).toEqual(486);
  });
  it("deberia calcular el descuento del estado TX  de 1000 productos con precio de 15", () => {
    const precioNeto = multiplicar(1000,15);
    const impuesto = mostrarImpu('TX');
    const totImpuesto = calcularImpuesto(precioNeto,impuesto);
    const mDescuento = mostrarDescu(1000);
    const totDescuento = calcularDes(precioNeto,totImpuesto,mDescuento);
    expect(totDescuento).toEqual(478.125);
  });
  it("deberia calcular el descuento del estado AL  de 1000 productos con precio de 15", () => {
    const precioNeto = multiplicar(1000,15);
    const impuesto = mostrarImpu('AL');
    const totImpuesto = calcularImpuesto(precioNeto,impuesto);
    const mDescuento = mostrarDescu(1000);
    const totDescuento = calcularDes(precioNeto,totImpuesto,mDescuento);
    expect(totDescuento).toEqual(468);
  });
  it("deberia calcular el descuento del estado CA  de 1000 productos con precio de 15", () => {
    const precioNeto = multiplicar(1000,15);
    const impuesto = mostrarImpu('CA');
    const totImpuesto = calcularImpuesto(precioNeto,impuesto);
    const mDescuento = mostrarDescu(1000);
    const totDescuento = calcularDes(precioNeto,totImpuesto,mDescuento);
    expect(totDescuento).toEqual(487.125);
  });

  // TEST DE DESCUENTOS CON DIFERENTES PRECIOS Y DIFERENTES CANTIDADES


  it("deberia calcular el descuento del estado UT  de 2000 productos con precio de 50", () => {
    const precioNeto = multiplicar(2000,50);
    const impuesto = mostrarImpu('UT');
    const totImpuesto = calcularImpuesto(precioNeto,impuesto);
    const mDescuento = mostrarDescu(2000);
    const totDescuento = calcularDes(precioNeto,totImpuesto,mDescuento);
    expect(totDescuento).toEqual(3196.5);
  });
  it("deberia calcular el descuento del estado NV  de 5000 productos con precio de 7", () => {
    const precioNeto = multiplicar(5000,7);
    const impuesto = mostrarImpu('NV');
    const totImpuesto = calcularImpuesto(precioNeto,impuesto);
    const mDescuento = mostrarDescu(5000);
    const totDescuento = calcularDes(precioNeto,totImpuesto,mDescuento);
    expect(totDescuento).toEqual(1890);
  });
  it("deberia calcular el descuento del estado TX  de 10000 productos con precio de 15", () => {
    const precioNeto = multiplicar(10000,15);
    const impuesto = mostrarImpu('TX');
    const totImpuesto = calcularImpuesto(precioNeto,impuesto);
    const mDescuento = mostrarDescu(10000);
    const totDescuento = calcularDes(precioNeto,totImpuesto,mDescuento);
    expect(totDescuento).toEqual(15937.5);
  });
  it("deberia calcular el descuento del estado AL  de 3500 productos con precio de 26", () => {
    const precioNeto = multiplicar(3500,26);
    const impuesto = mostrarImpu('AL');
    const totImpuesto = calcularImpuesto(precioNeto,impuesto);
    const mDescuento = mostrarDescu(3500);
    const totDescuento = calcularDes(precioNeto,totImpuesto,mDescuento);
    expect(totDescuento).toEqual(4732);
  });
  it("deberia calcular el descuento del estado CA  de 15000 productos con precio de 50", () => {
    const precioNeto = multiplicar(15000,50);
    const impuesto = mostrarImpu('CA');
    const totImpuesto = calcularImpuesto(precioNeto,impuesto);
    const mDescuento = mostrarDescu(15000);
    const totDescuento = calcularDes(precioNeto,totImpuesto,mDescuento);
    expect(totDescuento).toEqual(81187.5);
  });
});