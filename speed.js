function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
  
    if (speed <= speedLimit) {
      return "Ok";
    }
  
    const excessSpeed = speed - speedLimit;
    const demeritPoints = Math.floor(excessSpeed / kmPerDemeritPoint);
  
    if (demeritPoints >= 12) {
      return "License suspended";
    }
  
    return `Points: ${demeritPoints}`;
  }
  
  const speed = parseFloat(prompt("Enter the car's speed (in km/h):"));
  
  if (isNaN(speed)) {
    console.log("Invalid input. Please enter a valid number.");
  } else {
    const result = calculateDemeritPoints(speed);
    console.log(result);
  }
  
