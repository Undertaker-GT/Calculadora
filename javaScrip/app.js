function sumar(){
    const forma=document.getElementById('formulario');
    let operandoA=forma['operandoA'];
    let operandoB=forma['operandoB'];
    let resultado= parseInt(operandoA.value) + parseInt(operandoB.value);
    if(isNaN(resultado)){
        resultado='La Operacion no Incluye Numeros';
    }
    document.getElementById('resultado').innerHTML='Resultado de la suma: '+resultado;
}
function restar(){
    const forma=document.getElementById('formulario');
    let operandoA=forma['operandoA'];
    let operandoB=forma['operandoB'];
    let resultado=parseInt(operandoA.value) - parseInt(operandoB.value);
    if(isNaN(resultado)){
        resultado='La Operacion no Incluye Numeros';
    }
    document.getElementById('resultado').innerHTML='Resultado de la resta: '+ resultado;
}
function multiplicar(){
    const forma=document.getElementById('formulario');
    let operandoA=forma['operandoA'];
    let operandoB=forma['operandoB'];
    let resultado=parseInt(operandoA.value) * parseInt(operandoB.value);
    if(isNaN(resultado)){ 
        resultado='la Operancion no incluye Numeros';
    }
    document.getElementById('resultado').innerHTML='resultado de la multiplicacion: '+ resultado;
}
function dividir(){
    const forma=document.getElementById('formulario');
    let operandoA=forma['operandoA'];
    let operandoB=forma['operandoB'];
    let resultado=parseInt(operandoA.value) / parseInt(operandoB.value);
    if(isNaN(resultado)){
        resultado='la Operancion no incluye Numeros';
    }
    document.getElementById('resultado').innerHTML='resultado de la division: '+ resultado;
}