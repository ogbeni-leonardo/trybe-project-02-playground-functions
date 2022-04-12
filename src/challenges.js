// Desafio 1
function compareTrue(bool1, bool2) {
  return bool1 && bool2;
}

// Desafio 2
function calcArea(base, altura) {
  return (base * altura) / 2;
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ');
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(array) {
  let bigger;
  let repeat;

  for (let index = 0; index < array.length; index += 1) {
    let number = array[index];
    if (index === 0 || number > bigger) {
      bigger = number;
      repeat = 1;
    } else if (number === bigger) {
      repeat += 1;
    }
  }
  return repeat;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance1 = mouse - cat1; // -1
  let distance2 = mouse - cat2; // -1
  // Se a distância que existe entre o rato, o gato 1 e o gato 2 for positiva
  if (distance1 > 0 && distance2 > 0) {
    // Se a distância for a mesma
    if (distance1 === distance2) {
      return 'os gatos trombam e o rato foge';
    } else if (distance1 < distance2) {
      return 'cat 1';
    }
    // Caso nenhuma das afirmações acima tenham sido verdadeiras
    return 'cat2';
  // Se um dos valores de distância for negativo
  } else {
    // Se a soma do(s) valor(es) for igual a zero (distância igual)
    if (distance1 + distance2 === 0 || distance1 === distance2) {
      return 'os gatos trombam e o rato foge';
    } else if (distance1 > distance2) {
      return 'cat1'
    }
    // Caso nenhuma das afirmações acima tenham sido verdadeiras
    return 'cat2'
  }
}

// Desafio 8
function fizzBuzz(array) {
  let result = [];

  for (let number of array) {
    if (number % 3 === 0 && number % 5 === 0) {
      result.push('fizzBuzz');
    } else if (number % 3 === 0) {
      result.push('fizz');
    } else if (number % 5 === 0) {
      result.push('buzz')
    } else {
      result.push('bug!');
    }
  }
  return result;
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
