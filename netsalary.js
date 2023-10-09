function calculateNetSalary(basicSalary, benefits) {
    // Constants (You can replace these with the actual values)
    const kraTaxRate = 0.3; // 30% tax rate
    const nhifRate = 0.02; // 2% NHIF rate
    const nssfRate = 0.06; // 6% NSSF rate
  
    // Calculate Gross Salary
    const grossSalary = basicSalary + benefits;
  
    // Calculate Tax (KRA)
    const tax = grossSalary * kraTaxRate;
  
    // Calculate NHIF Deductions
    const nhifDeductions = grossSalary * nhifRate;
  
    // Calculate NSSF Deductions
    const nssfDeductions = grossSalary * nssfRate;
  
    // Calculate Net Salary
    const netSalary = grossSalary - tax - nhifDeductions - nssfDeductions;
  
    return {
      grossSalary,
      tax,
      nhifDeductions,
      nssfDeductions,
      netSalary,
    };
  }
  
  // Example usage
  const basicSalary = 50000;
  const benefits = 10000;   
  
  const salaryDetails = calculateNetSalary(basicSalary, benefits);
  
  console.log("Gross Salary:", salaryDetails.grossSalary);
  console.log("Tax (KRA):", salaryDetails.tax);
  console.log("NHIF Deductions:", salaryDetails.nhifDeductions);
  console.log("NSSF Deductions:", salaryDetails.nssfDeductions);
  console.log("Net Salary:", salaryDetails.netSalary);
  
