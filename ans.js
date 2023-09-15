let i=-1;
let key="CADADBCBCCBBCBBAACADBABACAADDCDCACBCCABBDBBDBDABCBCDAADDAADBDBBABDCDCCBBDAA";
key=key.split('');

console.log(key)

function nextans()
{
    i++;
    document.getElementById("ans").innerHTML=`${(i%25)+1}. ${key[i]}`;
}

function prevans()
{
    i--;
    document.getElementById("ans").innerHTML=`${(i%25)+1}. ${key[i]}`;
}

setInterval(nextans,10000);

document.getElementById("prev").addEventListener('click',prevans);
document.body.addEventListener('keypress',nextans);

