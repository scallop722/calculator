var result = 0;
var operator = '';


/** 数字ボタンが押されたときのイベント */
function num(num) {
  document.getElementById('result').value += num;
  console.log(num);
}

/** ゼロが押されたときのイベント */
function zero(zero) {
  let resultTag = document.getElementById('result');
  let num = resultTag.value;
  if (num) {
    resultTag.value += zero;
    console.log(zero);
  }
}

/** 小数点が押されたときのイベント */
function point() {
  let resultTag = document.getElementById('result');
  let num = resultTag.value;
  
  // 数字が入力されているかの確認
  if (num) { 
    // すでに小数点があるかの確認
    if (counter(num, '.') == 0) {
      resultTag.value += '.';
      console.log('.');
    }
  } else {
    // 数字が入力されていない場合は"0."にする
    resultTag.value = '0.'
    conosole.log('0.');
  }
}

/** Cボタンが押されたときのイベント */
function clearNum() {
  result = 0;
  operator = '';
  document.getElementById('result').value = '';
  tempClear()
  console.log('clear');
}

/** 戻るボタンが押されたときのイベント */
function back() {
  let resultTag = document.getElementById('result');
  let num = resultTag.value;
  if (num) {
    resultTag.value = num.slice(0, -1);
    console.log('back');
  }
}

function plusminus() {
  let resultTag = document.getElementById('result');
  

}

function equal() {
  let resultTag = document.getElementById('result');
  let num = resultTag.value;
  
  if (!parseInt(num)) {
    return;
  }
  
  if(operator == '') {
    result = parseInt(num);
  } else if (operator == '+') {
    result += parseInt(num);
  } else if (operator == '-') {
    result -= parseInt(num);
  } else if (operator == '×') {
    result *= parseInt(num);
  } else if (operator == '/') {
    result /= parseInt(num);
  }
  
  resultTag.value = result;
  result = 0;
  tempClear();
}

/** str内にseqが何文字があるかカウントします。 */
function counter(str, seq) {
  return str.split(seq).length - 1;
}

/** tempを空白文字に置き換えます。 */
function tempClear() {
  document.getElementById('temp').innerText = '\u00a0';
}

function calc(ope) {

  let resultTag = document.getElementById('result');
  let num = resultTag.value;
  if (!parseInt(num)) {
    return;
  }
  if(operator == '') {
    result = parseInt(num);
  } else if (operator == '+') {
    result += parseInt(num);
  } else if (operator == '-') {
    result -= parseInt(num);
  } else if (operator == '×') {
    result *= parseInt(num);
  } else if (operator == '/') {
    result /= parseInt(num);
  }
  document.getElementById('temp').innerText = result + ope;
  resultTag.value = '';
  operator = ope;
}

