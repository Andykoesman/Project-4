// //aray string

// const cars = [
//     'ayla',
//     'agya',
//     'calya',
//     'sigra',
//     'innova',
//     'kijang'
// ]

// const numbers = [1,2,3,4,5,6,7]

// console.log(cars)
// console.log (numbers)

// document.write(cars + '<br>') 
// document.write(numbers + '<br>')
// document.write(cars[3] + '<br>')
// document.write('<span>Tipe Mobil</span> ' + cars[3] + '<br>')
// document.write('<span>Jumlah Data</span> ' +cars.length + '<br>')
// document.write('<span>Join</span> ' +cars.join('-') + '<br>')
// document.write('<span>Pop</span> ' + cars.pop() + '<br>')
// document.write(cars + '<br>') 

// loop
// for (index=0; index<cars.length; index+=2){
//    document.write(cars[index] + '<br>')
// }




//console.log('Jenis Mobil', cars)
//console.log(cars[3])

//length
//console.log('JUMLAH DATA', cars.length)

//join
//console.log('JOIN', cars.join('-'))

//pop 
//console.log('POP', cars.pop())
//console.log(cars)

// function user(name, age) {
//     console.log('Nama: ',name,'Dan Usia : ', age)
// }

// user ('budi', 28),
// user ('dwi', 22),
// user ('john', 32)

// const user2 = function(name, age){
//     const result = `Name : ${name} dan Usia : ${age}`
//     return result
// }

// const dwi = user2('dwi',22)
// const jhon = user2('Jhon',32)
// console.log(dwi)
// console.log(jhon)

// const user3 = (nama,usia) =>{
//     const result = `Nama : ${nama} dan usia : ${usia}`
//     return result
// }

// console.log(user3('Dwi',37))

const score = 40
if(score >50){
    console.log('Lulus')
}else {
    console.log('Tidak Lulus')
}

const scoremtk = 20
if ((scoremtk>80)&& (scoremtk <100)){
    console.log('Lulus')
}else if (scoremtk >50){
    console.log('Lulus Memuaskan')
}else if (scoremtk <50){
    console.log('Tidak Lulus')
}else {
    console.log('Coba Lagi')
}
