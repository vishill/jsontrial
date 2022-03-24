function testGS(){
	const url = "https://script.google.com/macros/s/AKfycbwZsKP8Q955AdqBD9M04qjNAwiSnC4SZuiP4wNGZtl8u4wJdgjHCl3IXPh5uW6t-qHz/exec";
	
	fetch(url)
		.then(d => d.json())
		.then(d => {
			document.getElementById("app").textContent = d[0].status;
		});
}
document.getElementById("btn").addEventListener("click",testGS);
