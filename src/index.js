module.exports = function toReadable (number) {
  if (number === 0) return 'zero';
  else if(number / 10 < 2) return numberLowerTwentyToReadable(number);
  else if(number / 10 < 10) {
    if (number % 10 === 0) return `${numberFromTwentyToReadable((Math.floor(number / 10)) * 10)}`;
    else return `${numberFromTwentyToReadable((Math.floor(number / 10)) * 10)} ${numberLowerTwentyToReadable(number % 10)}`;
  }
  else {
    let numberStr = `${numberLowerTwentyToReadable(Math.floor(number / 100))} hundred`;

    if (number % 100 === 0) return numberStr;
    else if (number % 100 < 20) return numberStr += ` ${numberLowerTwentyToReadable(number % 100)}`;
    else if (number % 10 === 0) return numberStr += ` ${numberFromTwentyToReadable(Math.floor((number % 100) / 10) * 10)}`;
    else return numberStr += ` ${numberFromTwentyToReadable(Math.floor((number % 100) / 10) * 10)} ${numberLowerTwentyToReadable(number % 10)}`;
  } 
}

function numberLowerTwentyToReadable(number) {
    if (number === 1) return 'one';
    else if (number === 2) return 'two';
    else if (number === 3) return 'three';
    else if (number === 4) return 'four';
    else if (number === 5) return 'five';
    else if (number === 6) return 'six';
    else if (number === 7) return 'seven';
    else if (number === 8) return 'eight';
    else if (number === 9) return 'nine';
    else if (number === 10) return 'ten';
    else if (number === 11) return 'eleven';
    else if (number === 12) return 'twelve';
    else if (number === 13) return 'thirteen';
    else if (number === 14) return 'fourteen';
    else if (number === 15) return 'fifteen';
    else if (number === 16) return 'sixteen';
    else if (number === 17) return 'seventeen';
    else if (number === 18) return 'eighteen';
    else if (number === 19) return 'nineteen';
    else return '';
}

function numberFromTwentyToReadable(number) {
    if (number === 20) return 'twenty';
    else if (number === 30) return 'thirty';
    else if (number === 40) return 'forty';
    else if (number === 50) return 'fifty';
    else if (number === 60) return 'sixty';
    else if (number === 70) return 'seventy';
    else if (number === 80) return 'eighty';
    else if (number === 90) return 'ninety';
    else return '';
}
