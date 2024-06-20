

var idade = prompt('sua idade: ')
var produto = prompt('valor do produto: ')

if(idade >= 18){
    desc = (produto * 0.1)
    valor = produto - desc
    console.log(`valor do produto: ${produto}, valor com deconto: ${valor}`)
}
else{
    console.log('você não é maior de idade, não ha desconto!')
}