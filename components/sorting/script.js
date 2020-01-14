var val
function style1() {
    val = document.getElementById("range").value;
    block1 = document.getElementById("block1");
    block2 = document.getElementById("block2");
    block3 = document.getElementById("block3");
    if (val <= 3) block1.className = "style1";
    if (val > 3) block1.className = "block";

    if (val >= 4) block2.className = "style2";
    if (val > 7) block2.className = "block";
    if (val < 4) block2.className = "block";

    if (val >= 8) block3.className = "style3";
    if (val < 8) block3.className = "block";
}

function showMsg() {
        alert(value);
        block.style.background = '#fff';

       
}
