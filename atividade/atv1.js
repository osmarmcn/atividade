
var peso = prompt('digite seu peso: ')
var altura = prompt('digite sua altura: ')

imc = peso/ (altura**2)

if(18 > imc <=24){
    console.log('imc normal')
}
else if(24 > imc <= 29){
    console.log('imc com sobrepeso')

}
else{
    console.log('é uma baleia')
}