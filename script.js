

function calcularPropina() {
    const tcuenta = parseFloat(document.getElementById('cuenta').value);
    const tpropinas = parseFloat(document.getElementById('propinas').value);
    const totalCuenta = document.getElementById('tCuenta');
    const propinas = document.getElementById('tPropinas');
    const totalPagar = document.getElementById('tPagar');

    const Propinas = tcuenta * tpropinas / 100;
    const Tpagar = tcuenta + Propinas;

    console.log(tcuenta, Propinas, Tpagar)
    totalCuenta.textContent = '${tcuenta}';
    propinas.textContent = '${Propinas}';
    totalPagar.textContent = '${Tpagar}';
}