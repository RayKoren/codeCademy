
let kicks = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,]
let snares = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,]
let hiHats = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,]
let rideCymbals = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,]
const arrayVars = ['kicks', 'snares', 'hiHats', 'rideCymbals'];

const getDrumArray = (arrayName) => {
  switch (arrayName) {
    case 'kicks':
      return kicks;
    case 'snares':
      return snares;
    case 'hiHats':
      return hiHats;
    case 'rideCymbals':
      return rideCymbals;
      break;
  }

};
const toggleDrum = (arrayName, index) => {

    if (arrayVars.includes(arrayName) && index != null && index >= 0 && index <= 16) {
      let drum = getDrumArray(arrayName);
      if (drum[index] === true){
        drum[index] = false
      } else if (drum[index] === false) {
        drum[index] = true
      }
    }
}


const clear = (arrayName) => {
  if (arrayVars.includes(arrayName)) {
    let drum = getDrumArray(arrayName);
    drum.fill(false);
  }
}

const invert = (arrayName) => {
  if (arrayVars.includes(arrayName)) {
    let drum = getDrumArray(arrayName);
    drum.forEach((o,i,a) => a[i] = !a[i]);
  }
}
