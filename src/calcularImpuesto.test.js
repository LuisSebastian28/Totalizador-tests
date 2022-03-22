import calcularImpuesto from "./calcularImpuesto.js";
import mostrarImpu from "./estado.js";
import multiplicar from "./multiplicador.js";

describe("Calcular Impuesto", () => {
  it("deberia calcular el impuesto del estado UT  de 3 productos con precio de 15", () => {
    const precioNeto = multiplicar(3,15);
    const impuesto = mostrarImpu('UT');
    const totImpuesto = calcularImpuesto(precioNeto,impuesto);
    expect(totImpuesto).toEqual(2.9475000000000002);
  });
  it("deberia calcular el impuesto del estado NV  de 3 productos con precio de 15", () => {
    const precioNeto = multiplicar(3,15);
    const impuesto = mostrarImpu('NV');
    const totImpuesto = calcularImpuesto(precioNeto,impuesto);
    expect(totImpuesto).toEqual(3.6);
  });
  it("deberia calcular el impuesto del estado TX  de 3 productos con precio de 15", () => {
    const precioNeto = multiplicar(3,15);
    const impuesto = mostrarImpu('TX');
    const totImpuesto = calcularImpuesto(precioNeto,impuesto);
    expect(totImpuesto).toEqual(2.8125);
  });
  it("deberia calcular el impuesto del estado AL  de 3 productos con precio de 15", () => {
    const precioNeto = multiplicar(3,15);
    const impuesto = mostrarImpu('AL');
    const totImpuesto = calcularImpuesto(precioNeto,impuesto);
    expect(totImpuesto).toEqual(1.8);
  });
  it("deberia calcular el impuesto del estado CA  de 3 productos con precio de 15", () => {
    const precioNeto = multiplicar(3,15);
    const impuesto = mostrarImpu('CA');
    const totImpuesto = calcularImpuesto(precioNeto,impuesto);
    expect(totImpuesto).toEqual(3.7125000000000004);
  });
});