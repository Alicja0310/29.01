let name = "Martyna"
const surName = "Nowak"
const age = 25
const country = "Polska"
const hasChildren = false

const a = 3
const b = 2
const c = 6
const sum = (a * b) / c

function obliczenie(a, b, c) {
    return (a * b) / c
}

const calosc = obliczenie(a, b, c)
// console.log(calosc)



function sumAndDivision(par1, par2, par3) {
    if(par3 === 0 || par1 + par2 === 0){
     par3 = 1
     return (par1 + par2) / par3
    } else {
    return (par1 + par2) / par3
    }
}

let wynik = sumAndDivision(10, 10, 2)
console.log(wynik)



/*function sumString(par1, par2) {
    if(par1 !== '' && par2){
        return par1.trim() + ' ' + par2.trim()
    
    } else{
        return 'Dałeś pusty string'
    } 
}

const aaa = sumString("       Jan      ", "      Kowalski      ")
console.log(aaa)


let zeSpacjami = "            bez spacji          "
console.log(zeSpacjami)
const spacje = zeSpacjami.trim()
console.log(spacje)*/


function sumString(par1, par2, par3) {
    if(par1 !== '' || par2 !== '' || par3 !==''){
        return par1.trim() + ' ' + par2.trim() + ' ' + par3.trim()
    } else{
        return 'jeden bądź więcej argumentów jest pustym stringiem'
    }

}

const zdanie = sumString("  Ala    ", "    ma    ", "      kota       ")
console.log(zdanie)