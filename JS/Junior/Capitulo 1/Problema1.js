"use strict";

const definirCompra = (n)=>{
	let din = prompt(`Dinero de ${n}`);
	if(din >= 0.6 && din < 1) return (`${n}: helado de agua y te sobra ${din - 0.6}`);
	if(din >= 1 && din < 1.6) return (`${n}: helado de crema y te sobra ${din - 1}`);
	if(din >= 1.6 && din < 1.7) return (`${n}: helado de chocolate y te sobra ${din - 1.6}`);
	if(din >= 1.7 && din < 1.8) return (`${n}: helado de mango y te sobra ${din - 1.7}`);
	if(din >= 1.8 && din < 2.9) return (`${n}: helado de frutilla y te sobra ${din - 1.8}`);
	if(din >= 2.9) return (`${n}: helado de confites o pote de 1/4kg y te sobra ${din - 2.9}`);
	else return (`${n}: No te alcanza para ningun helado pobre de mierda`);
}

console.log(definirCompra("Rulo"));
console.log(definirCompra("Ruso"));
console.log(definirCompra("Ale"));
