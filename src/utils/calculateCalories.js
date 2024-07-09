const calculateCalories = (weight, height, age, sex, activityLevel, goal) => {
    let tmb;
    
    if (sex === 'Hombre') {
      tmb = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
      tmb = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }
  
    let activityFactor;
  
    switch (activityLevel) {
      case 'Sedentario':
        activityFactor = 1.2;
        break;
      case 'Ligero':
        activityFactor = 1.375;
        break;
      case 'Moderado':
        activityFactor = 1.725;
        break;
      case 'Alto Rendimiento':
        activityFactor = 1.9;
        break;
      default:
        activityFactor = 1.2;
    }
  
    let maintenanceCalories = tmb * activityFactor;
    
    // Calorías para ganar masa muscular
    let caloriesToGain = maintenanceCalories + 250; // Excedente calórico de 250 calorías por día
  
    return caloriesToGain;
  };
  
  // Uso de la función
  const calories = calculateCalories(70, 170, 25, 'Hombre', 'moderadamente activo', 'ganar masa muscular');
  console.log(`Calorías para ganar masa muscular: ${calories} kcal`);

  export default calculateCalories;