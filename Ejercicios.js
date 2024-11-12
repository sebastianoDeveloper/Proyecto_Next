// SIN CLOUSURE
function createPetlistUno(myPet) {
	let petList = [];
	if (myPet) {
		petList.push(myPet)
	}
		return petList;	
	
}
// const ListaUno = createPetlistUno();
console.log(createPetlistUno('Boby'));
console.log(createPetlistUno('Cuy'));
console.log(createPetlistUno('Hasmter'));
console.log(createPetlistUno());


// CON CLOUSURE
function createPetlist() {
	let petList = [];

	function addPet(myPet){
		if (myPet) {
			petList.push(myPet)
		}		
		return petList;	
	}
	return addPet;	
}
const Lista1 = createPetlist();
console.log(Lista1('Boby'));
console.log(Lista1('Cuy'));
console.log(Lista1('Hasmter'));
console.log(Lista1());
const Lista2 = createPetlist();
console.log(Lista2(8));
console.log(Lista2(8));
// explicacion: que pueda pasar o dos numeros y me de como resultado la suma

function createPetlistTres() {
	const pets = []
	return (info) => info ? pets.push(info) : pets
}
const Lista3 = createPetlistTres();
console.log(Lista3(10));
console.log(Lista3(20));
console.log(Lista3());
console.log(Lista3(20));
console.log(Lista3(20));
console.log(Lista3());
