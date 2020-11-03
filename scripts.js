/**
 * Verkefni 8 – Caesar dulmál með vefviðmóti
 *
 * Verður að passa _nákvæmlega_ við gefið HTML, mun annars brotna.
 * Þ.e.a.s., ekki þarf að skrifa meðhöndlun á HTML elementum sem vantar
 */

/**
 * Kóðar streng með því að hliðra honum um n stök.
 *
 * @param {string} str Strengur sem skal kóða, aðeins stafir í stafrófi
 * @param {number} n Hliðrun, heiltala á bilinu [0, lengd stafrófs]
 * @param {string} alphabet Stafróf sem afkóða á út frá
 * @returns {string} Upprunalegi strengurinn hliðraður um n til hægri
 */
function encode(str, n, alphabet = '') {
  const upper = str.toLocaleUpperCase();
  
  let result = '';
  for (let i = 0; i < str.length; i++) {
    result += alphabet[(alphabet.indexOf(upper[i]) + n) % alphabet.length];
  }
  return result;
}

/**
 * Afkóðar streng með því að hliðra honum um n stök.
 *
 * @param {string} str Strengur sem skal afkóða, aðeins stafir í stafrófi
 * @param {number} n Hliðrun, heiltala á bilinu [0, lengd stafrófs]
 * @param {string} alphabet Stafróf sem afkóða á út frá
 * @returns {string} Upprunalegi strengurinn hliðraður um n til vinstri
 */
function decode(str, n, alphabet = '') {
  return str
  .toLocaleUpperCase()
  .split('')
  .map(s => alphabet.indexOf(s) - n) // hliðruð staðsetning stafs
  .map(i => i < 0 ? alphabet.length + i : i) // ef i verður neikvætt, förum aftast í stafróf
  .map(i => alphabet[i])
  .join('');
}

const Caesar = (() => {
  // Default stafróf, uppfært þegar slegið inn í "alphabet"
  let alphabet = 'AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ';

  // Default type, uppfært af radio input
  let type = 'encode';

  // Default hliðrun, uppfært af "shift"
  let shift = 3;

  let input = '';

  let inputElement;
  let sliderElement;
  let resultElement;

  function inputChanged() {
    input = inputElement.value;
    console.log(inputElement.value)

    writeResults()
  }

  function sliderChanged() {
    shift = sliderElement.value;
    console.log(sliderElement.value)
    writeResults()
  }

  function writeResults() {
    resultElement.textContent = input + shift
  }

  function init(el) {
    // Setja event handlera á viðeigandi element 
    inputElement = el.querySelector('#input'); 
    sliderElement = el.querySelector('#shift');
    resultElement = el.querySelector('.result');
    //todo rest

    inputElement.addEventListener('input', inputChanged);
    sliderElement.addEventListener('input', sliderChanged)
    // todo rest
  }

  function init(el) {
    // kalla á annað hvort encode eða decode
   resultElement = Document.getElementsByClassName('result');
  switch (type) {
    case 'encode': resultElement[0]. innerText = encode(input, shift, alphabet);
      break;
    case 'decode': resultElement[0]. innerText = decode(input, shift, alphabet);
      break;
    default: resultElement[0]. innerText = 'inntak er ógilt'; 
    }
  }

  return {
    init,
  };
})();

document.addEventListener('DOMContentLoaded', () => {
  const ceasarForm = document.querySelector('.ceasar');

  Caesar.init(ceasarForm);
});
