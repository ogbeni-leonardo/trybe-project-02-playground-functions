function repeatNumber(array) {
  let object = {};
  for (let number of array) {
    if (number in object) object[number] += 1;
    else object[number] = 1;
  }
  return object;
}

function validNumber(number) {
  if (number <= 9 && number >= 0) return true;
  return false;
}

function formatPhoneNumber(array) {
  let phoneNumber = `(${array[0]}${array[1]}) `;
  for (let index = 2; index < array.length; index += 1) {
    phoneNumber += array[index];
    if (index === 6) phoneNumber += '-';
  }
  return phoneNumber;
}

function generatePhoneNumber(array) {
  if (array.length !== 11) return 'Array com tamanho incorreto.';
  let numbersRepetition = repeatNumber(array);
  for (let key in numbersRepetition) {
    if (numbersRepetition[key] > 2 || validNumber(parseInt(key, 10)) === false) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return formatPhoneNumber(array);
}

function triangleCheck(lineA, lineB, lineC) {
  if (lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC)) return true;
  return false;
}

function hydrate(string) {
  let list = string.split(' ');
  let counter = 0;
  for (let word of list) {
    if (parseInt(word, 10)) {
      counter += parseInt(word, 10);
    }
  }
  return `${counter} ${(counter > 1) ? 'copos' : 'copo'} de água`;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
