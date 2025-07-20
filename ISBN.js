document.getElementById('isbnForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const isbn = document.getElementById('isbn').value.trim();//trim seextra char/whitespace ko khattam karwaayenge
  const result = document.getElementById('result');

  if (isValidISBN(isbn)) {// yeh dekhega ki agar isValidISBN true degi ya false, ussi hisaab se yeh phir output dega
    result.textContent = 'Valid ISBN!';//yi chu yal function true dee
    result.style.color = 'green';
  } else {
    result.textContent = 'You have entered an invalid ISBN number!';//yi chu yal false dee
    result.style.color = 'red';
  }
});
function isValidISBN(isbn) {
  // agar user ne galti se koi whitespace daal dee, toh phir jo \s usko dekhega aur phir ham usko replace karenge
  isbn = isbn.replace(/[-\s]/g, '');

  // agar ISBN-10 toh yeh waali condition execute ho jaayegi
  if (isbn.length === 10) {
    return isValidISBN10(isbn); //idhar yeh isValidISBN10 function par chala jaayega
  }
  // magar agar ISBN-13 huwa toh yeh waala if-block execute hoga
  if (isbn.length === 13) {
    return isValidISBN13(isbn); //idhar yeh isValidISBN13 function par chala jaayega
  }
  return false;//warna agar dono mei se kuch nahi hai toh seedha galat
}
//Multiply each digit by a descending weight from 10 to 1
//Phir sum karo
//Sum 11 se divisible hona chahiye
function isValidISBN10(isbn) {
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    if (!isDigit(isbn[i])) return false;
    sum += (10 - i) * parseInt(isbn[i]);
  }
  //last character digit hoga ya phir X hoga, agar digit hai toh digit add karwaao, warna X hai toh 10 add karo
  //aur agar kuch aur hee huwa, toh phir 0 karaa do
  const lastChar = isbn[9];
  sum += lastChar === 'X' ? 10 : isDigit(lastChar) ? parseInt(lastChar) : 0;

  return sum % 11 === 0;
}
//odd position waalo ko 1 se multiply karo aur even waalo ko 3 se
// har ek product ko add karwaao
//phir dekho sum 10 se divisible hai yaa nahi
function isValidISBN13(isbn) {
  let sum = 0;
  for (let i = 0; i < 13; i++) {
    if (!isDigit(isbn[i])) return false;
    sum += parseInt(isbn[i]) * (i % 2 === 0 ? 1 : 3);
  }

  return sum % 10 === 0;
}

function isDigit(char) {
  return /^\d$/.test(char);//dekho kya....jo ^ haina....isse ham string ke pehle ko determine karte haina aur phir jo $ haina, yeh last dikhaayega..aur phir bacha \d....yeh hame digits batayega....cxhattis manz...ham 0-9 ek ek digit check karenge, taaki koi aur character input naa le le
}
