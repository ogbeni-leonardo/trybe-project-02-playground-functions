// Desafio 11
function repeatNumbers(array) {
  let object = {};
  for (let number of array) {
    if (`${number}` in object) {
      object[`${number}`] += 1;
    } else {
      object[`${number}`] = 1;
    }
  }
  for (let number in object) {
    if (object[number] > 2) {
      return false;
    }
  }
  return true;
}

function validNumbers(array) {
  for (let number of array) {
    if (number < 0 || number > 9) {
      return false;
    }
  }
  return true;
}

function generatePhoneNumber(array) {
  let phone = '';
  if (array.length === 11){
    if (repeatNumbers(array) && validNumbers(array)) {
      for (let index = 0; index < array.length; index += 1) {
        if (index === 0) {
          phone += `(${array[index]}`;
        } else if (index === 1) {
          phone += `${array[index]}) `;
        } else {
          phone += array[index];
          if (index === 6) {
            phone += '-';
          }
        }
      }
      return phone;
    }
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return 'Array com tamanho incorreto.';
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC)) {
    return true;
  } else if (lineB < (lineA + lineC) && lineB > Math.abs(lineA - lineC)) {
    return true;
  } else if (lineC < (lineA + lineB) && lineC > Math.abs(lineA - lineB)) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(string) {
  let list = string.split(' ');
  let counter = 0;
  for (let word of list) {
    if (isNaN(word) === false) {
      counter += parseInt(word);
    }
  }
  if (counter === 1){
    return `${counter} copo de água`
  }
  return `${counter} copos de água`
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
