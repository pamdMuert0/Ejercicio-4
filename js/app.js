const ingresos=[
    new Ingreso('Salario', '2000.00'),
    new Ingreso('venta coche','1500.00')
]
const egresos=[
    new Ingreso('Renta departamento', '400.00'),
    new Ingreso('ropa','10.00')
]

let totalIngresos=()=>{
    let total=0;
    for (let ingreso of ingresos) {
        total+=ingreso.valor;
    }
    return total;
}

let totalEgresos=()=>{
    let total=0;
    for (let egreso of egresos) {
        total+=egreso.valor;
    }
    return total;
}

let cargarCabecera=()=>{
    let presupuesto=totalIngresos()-totalEgresos();
    document.getElementById("presupuesto").innerHTML=presupuesto;
}