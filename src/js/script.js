function scrolll() {
    var textData = document.getElementById('text-data');
    textData.scrollIntoView({ behavior: 'smooth' });
}


async function getIpInfo(){
    const ip = document.getElementById('ip1').value;
    const continente = document.querySelector('.response_continente');
    const pais = document.querySelector('.response_pais');
    const capital = document.querySelector('.response_capital');
    const city = document.querySelector('.response_city');
    const codigo = document.querySelector('.response_codigo');

    const accessKey = '05add74f-9b3d-4d26-8fed-b168d78d73d8';

    const url = 'https://apiip.net/api/check?ip='+ ip +'&accessKey='+ accessKey; 
  
    const response = await fetch(url);
  
    const result = await response.json();

    continente.innerHTML = `<p>${result.continentName}</p>`
    pais.innerHTML = `<p>${result.officialCountryName}</p>`
    capital.innerHTML = `<p>${result.capital}</p>`
    city.innerHTML = `<p>${result.city}</p>`
    codigo.innerHTML = `<p>${result.postalCode}</p>`

  };