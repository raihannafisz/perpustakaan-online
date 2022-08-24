
const mockup1 = document.querySelector('.satu.kanan .satu');
const mockup2 = document.querySelector('.satu.kanan .dua');

const exchange = document.querySelector('nav ul li i.fas.fa-exchange-alt');
const hero = document.querySelector('.hero');
exchange.addEventListener('click', ()=>{
    hero.classList.toggle('toggleBG');
	
	const mockup1value = mockup1.src;
	const mockup2value = mockup2.src;
	mockup1.src = mockup2value;
	mockup2.src = mockup1value;
})