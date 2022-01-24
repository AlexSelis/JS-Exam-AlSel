/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */


var count = 0;
var btn = document.getElementById('btn__element');
var disp = document.getElementById('btn__state');

btn.onclick = function() {
    count++;
    disp.innerHTML = count;
}