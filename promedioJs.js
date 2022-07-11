let x=1;
let suma= 0;
let promedio=0;
let n=0
n=prompt('Notas a promediar');
while(x<=n){
    valor=prompt('Ingrese Nota' + x);
    valor=parseInt(valor);
    suma=suma+valor;
    x=x+1;
}
promedio=suma/(x-1); //Resto para que me de 1(?)

document.write('El promedio de notas es '+ promedio);


