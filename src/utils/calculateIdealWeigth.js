// calculateIdealWeight.js

export const calculateIdealWeight = (height, age, sex) => {
  let factor;

  if (sex === 'Hombre') {
    if (age >= 18 && age <= 30) {
      factor = 0.10;
    } else if (age >= 31 && age <= 60) {
      factor = 0.15;
    } else {
      factor = 0.20;
    }
  } else if (sex === 'Mujer') {
    if (age >= 18 && age <= 30) {
      factor = 0.10;
    } else if (age >= 31 && age <= 60) {
      factor = 0.15;
    } else {
      factor = 0.20;
    }
  }

  const idealWeight = (height - 100) - ((height - 100) * factor);
  return idealWeight;
};
