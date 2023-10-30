let i=-1;
let prg01="DABBADCCACCCAAAAAAAAAABDBBACBA"; //prg01

let prg02="DDCCDABDDCBBDDBACAACAADCBAADBB";

let prg03="CBBBDBDDACDBCCAAABBDAADBBCCDAB";

let prg04="BCACCBCCBBDBCBDCBCBABCCAADACDB";

let prg05="BDCBDDBCDDDABAACDBCBCBDCACCCAD";

let apt02="CBACBAAABCACCBBBCDADBBAABAAAADBDCACCADBCCDCBADBBDCCBADDDCCACBCADBCDABBBCDDCABCBCDDDBCCBCCCBBBCCBCAAC";

let apt03="DCABABABBACABDBADDCADDCBDBBCBBADBBCCDBDBDBBBBACADAACCACDBADDCBBCDCCCADDBCABDCDDACACAADBCBAADBCDCDADA";
let apt04="BDCDBACCBAADABCADBADCDBACBCBCDCADBBAACBACCCCAADDACBDDDDCBBBBDCDDDDDADBCBBDBACCCDABADDBCBDCACACDCCCBD";
let apt05="ABBDDCBBDABADBBBCCBABAADDABCBAAABBCDBBABDCDCBCDBADACBDABACDBDACBBADCBDCDBACBCDDDADDBCDDBDCACCDACDACA";

let sectionSize;

let key;

function selectkey(test,name)
{
    key=test;

    document.getElementById("change").innerText=`Currently Using : ${name}`;
    i=-1;
    nextans();
    key=key.split('');

    if(name.indexOf("Apt") !== -1)
    sectionSize=100;
    else
    sectionSize=30;
}

function nextans()
{
    i++;
    document.getElementById("ans").innerHTML=`${(i%sectionSize)+1}. ${key[i]}`;
}

function prevans()
{
    i--;
    document.getElementById("ans").innerHTML=`${(i%sectionSize)+1}. ${key[i]}`;
}

document.getElementById("b1").addEventListener('click',selectkey.bind(null,prg01,"LPU Programming 01"));
document.getElementById("b2").addEventListener('click',selectkey.bind(null,prg02,"LPU Programming 02"));
document.getElementById("b3").addEventListener('click',selectkey.bind(null,prg03,"LPU Programming 03"));
document.getElementById("b4").addEventListener('click',selectkey.bind(null,prg04,"LPU Programming 04"));
document.getElementById("b5").addEventListener('click',selectkey.bind(null,prg05,"LPU Programming 05"));
document.getElementById("b6").addEventListener('click',selectkey.bind(null,apt02,"LPU Aptitude 02"));
document.getElementById("b7").addEventListener('click',selectkey.bind(null,apt03,"LPU Aptitude 03"));
document.getElementById("b8").addEventListener('click',selectkey.bind(null,apt04,"LPU Aptitude 04"));
document.getElementById("b9").addEventListener('click',selectkey.bind(null,apt05,"LPU Aptitude 05"));
document.getElementById("prev").addEventListener('click',prevans);
document.body.addEventListener('keypress',nextans);

