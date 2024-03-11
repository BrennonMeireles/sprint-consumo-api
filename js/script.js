function scrolll() {
    var textData = document.getElementById('text-data');
    textData.scrollIntoView({ behavior: 'smooth' });
}

const ip = document.getElementById('ip1').value;

async function getIpInfo(){
    const accessKey = '05add74f-9b3d-4d26-8fed-b168d78d73d8';
    const url = 'https://apiip.net/api/check?ip='+ ip +'&accessKey='+ accessKey; 
  
    // Make a request and store the response
    const response = await fetch(url);
  
    // Decode JSON response:
    const result = await response.json();

    const print = await console.log(result)
  
  };