function processSentence( name, age, adress, hobby){
    return `Nama saya ${name}, umur saya ${age} tahun, alamat saya ${adress}, dan saya punya hobby yaitu ${hobby}.`
}

var name = 'Agus';
var age = 30;
var address = 'Jln. Malioboro, Yogjakarta';
var hobby = 'gaming';

var fullSentence = processSentence(name, age, address , hobby);
console.log(fullSentence)