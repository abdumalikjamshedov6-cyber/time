<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="/homeWork.css">
</head>
<body>

<div class="calculator">
  <div class="inputs-container">
    <input id="Jonibek1" class="my-input" placeholder="№1">
    <input id="Jonibek2" class="my-input" placeholder="№2">
  </div>

  <div class="buttons">
    <button class="op-btn" id="AmirPlus">+</button>
    <button class="op-btn" id="AmirMinus">-</button>
    <button class="op-btn" id="AmirMult">*</button>
    <button class="op-btn" id="AmirDiv">/</button>
    
    <button>7</button><button>8</button><button>9</button><button>C</button>
    <button>4</button><button>5</button><button>6</button><button>←</button>
    <button>1</button><button>2</button><button>3</button><button>=</button>
  </div>
</div>

<script>
    // ТВОЙ КОД (с исправленными ID для уникальности)
    let in1 = document.getElementById("Jonibek1");
    let in2 = document.getElementById("Jonibek2");
    
    let btn = document.getElementById("AmirPlus");
    let btn1 = document.getElementById("AmirMinus");
    let btn2 = document.getElementById("AmirMult");
    let btn3 = document.getElementById("AmirDiv");

    btn.onclick = function() {
        btn.innerText = Number(in1.value) + Number(in2.value);
    };
    btn1.onclick = function() {
        btn1.innerText = Number(in1.value) - Number(in2.value);
    };
    btn2.onclick = function() {
        btn2.innerText = Number(in1.value) * Number(in2.value);
    };
    btn3.onclick = function() {
        btn3.innerText = Number(in1.value) / Number(in2.value);
    };
</script>

</body>
</html>