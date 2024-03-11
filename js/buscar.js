function getIpBuscar(callback)
{
    function response(s)
    {
        callback(window.userip);

        s.onload = s.onerror = null;
        document.body.removeChild(s);
    }

    function trigger()
    {
        window.userip = false;

        var s = document.createElement("script");
        s.async = true;
        s.onload = function() {
            response(s);
        };
        s.onerror = function() {
            response(s);
        };

        s.src = "https://l2.io/ip.js?var=userip";
        document.body.appendChild(s);
    }

    if (/^(interactive|complete)$/i.test(document.readyState)) {
        trigger();
    } else {
        document.addEventListener('DOMContentLoaded', trigger);
    }
}

async function getIp(ip){
    const Ip = document.getElementById('ip1');

    Ip.value = ip;

    const accessKey = '05add74f-9b3d-4d26-8fed-b168d78d73d8';

    const url = 'https://apiip.net/api/check?ip='+ ip +'&accessKey='+ accessKey; 
  
    const response = await fetch(url);
  
    const result = await response.json();

    console.log(result);
}