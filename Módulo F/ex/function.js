function parimp(n){
    if (n % 2 == 0){
        return 'Par'
    }else{
        return 'Ímpar'
    }
}
let res = parimp(19)
console.log(`${res}`)