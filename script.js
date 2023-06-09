const formelem = document.querySelector('#szamzar')
const szamelem1 = document.querySelector('#szam1')
const szamelem2 = document.querySelector('#szam2')
const szamelem3 = document.querySelector('#szam3')
const szamelem4 = document.querySelector('#szam4')
const kod = 1234
const kep = formelem.addEventListener('submit', (e) => {
  let inputkod = szamelem1.value + szamelem2.value + szamelem3.value + szamelem4.value

  if (Number(inputkod) === kod) {
    console.log('nyitva')
    if ((window.document.kep.src = 'zartlakat.png')) window.document.kep.src = 'image.png'
  } else {
    console.log('hibás kód')
    if ((window.document.kep.src = 'image.png')) window.document.kep.src = 'zartlakat.png'
  }
  e.preventDefault()
})

//A változat
// formelem.addEventListener("submit", (e) => {
//     if (szamelem.value == kod){
//         console.log("nyitva")
//     } else {
//         console.log("hibás kód")
//     }
//     e.preventDefault()
// })

//this kulcsszó

function add_old(a, b) {
  return a + b
}

const add = (a, b) => {
  return a + b
}

console.log(add(12, 44))

//B változat
// const submitfunction = (e) => {
//   if (szamelem.value == kod) {
//     console.log("nyitva");
//   } else {
//     console.log("hibás kód");
//   }
//   e.preventDefault();
// };

// formelem.addEventListener("submit", submitfunction);
