//pendefinisian variabel untuk melakukan kalkulasi
let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';

//dari sini sampai 25 untuk menampilkan tombol yang ditekan pada screen
const calculatorScreen = document.querySelector('.calculator-screen');

const updateScreen = (number) => {
  calculatorScreen.value = number;
};

//BAGIAN tombol NUMBER
//mengambil elemen <button> dengan class "number"
const numbers = document.querySelectorAll('.number');

//biar bisa input lebih dari 1 digit dan tidak diawal angka 0
const inputNumber = (number) => {
  if (currentNumber === '0') {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
};

numbers.forEach((number) => {
  number.addEventListener('click', (event) => {
    inputNumber(event.target.value);
    updateScreen(currentNumber);
  });
});

//BAGIAN tombol OPERATOR
//mengambil elemen <button> dengan class "operator"
const operators = document.querySelectorAll('.operator');

operators.forEach((operator) => {
  operator.addEventListener('click', (event) => {
    inputOperator(event.target.value);
  });
});

//fungsi input operator
const inputOperator = (operator) => {
  //agar ketika menekan operator lebih dari 1 kali, hasil kalkulasi menunjukkan nilai yang diharapkan (operator terakhir ditekan yang merupakan operator kalkulasinya)
  if (calculationOperator === '') {
    prevNumber = currentNumber;
  }
  calculationOperator = operator;
  currentNumber = '';
};

//BAGIAN tombol "="
//mengambil elemen <button> dengan class "equal-sign"
const equalSign = document.querySelector('.equal-sign');

//mendefinisikan fungsi kalkulasi (calculate)
const calculate = () => {
  let result = '';
  switch (calculationOperator) {
    case '+':
      //ganti prevNumber dan currentNumber dari string menjadi float : agar fungsi desimal bekerja
      result = parseFloat(prevNumber) + parseFloat(currentNumber);
      break;
    case '-':
      result = prevNumber - currentNumber;
      break;
    case '*':
      result = prevNumber * currentNumber;
      break;
    case '/':
      result = prevNumber / currentNumber;
      break;
    default:
      break;
  }
  currentNumber = result;
  calculationOperator = '';
};

//menjalankan fungsi calculate saat tombol "=" ditekan dan memperbarui screen
equalSign.addEventListener('click', () => {
  calculate();
  updateScreen(currentNumber);
});

//BAGIAN tombol "AC"
//mengambil elemen <button> dengan class "all-clear"
const clearBtn = document.querySelector('.all-clear');

//menjalankan fungsi saat tombol AC ditekan serta memperbarui screen
clearBtn.addEventListener('click', () => {
  clearAll();
  updateScreen(currentNumber);
});

//mendefinisikan fungsi clearAll
const clearAll = () => {
  prevNumber = '';
  calculationOperator = '';
  currentNumber = '0';
};

//BAGIAN tombol desimal (agar bisa kalkulasi angka desimal)
//mengambil elemen dari <button>
const decimal = document.querySelector('.decimal');

//mendefinisikan fungsi inputdecimal
inputDecimal = (dot) => {
  //agar "." tidak dapat diinput lebih dari 1 kali, sehingga hasil yang diperoleh sesuai dengan yang diharapkan
  if (currentNumber.includes('.')) {
    return;
  }
  currentNumber += dot;
};

//menjalankan fungsi saat tombol "." ditekan dan memperbarui screen
decimal.addEventListener('click', (event) => {
  inputDecimal(event.target.value);
  updateScreen(currentNumber);
});
