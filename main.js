// Objects

const user = {
	name: "miguel",
	idade: 27,
	address: {
		street: "Rua onde moro",
		number: 123,
	},
};

// Manipulacao de objetos

document.body.innerText = "name" in user; // isto retorna true e estamos a verificar se existe a propriedade nome dentro do objeto user
Object.keys(user); // retorna todas as keys do objeto
Object.values(user); //retorna todos os valores das keys
JSON.stringify(Object.values(user));
JSON.stringify(Object.entries(user));

//Desestruturacao de objetos
const { address, idade: age, nickname = "Fernandes" } = user; //como a key e igual ao nome da variavel fazemos as detruturcacao

console.log({ address, age, nickname });
