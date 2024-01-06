function calculateNetSalary(basicSalary, benefits) {
    var basicSalary = parseFloat(document.getElementById("basicSalary").value);
    var benefits = parseFloat(document.getElementById("benefits").value);
   
    const KRA_RATES = [
        [0, 0.16],
        [9440, 0.17],
        [16440, 0.18],
        [21440, 0.19],
        [24440, 0.20],
        [Infinity, 0.21],
    ];

    const NHIF_RATE = 0.04;
    const NSSF_RATE = 0.08;

    let totalIncome = basicSalary + benefits;
    let payee = 0;
    for (let i = 0; i < KRA_RATES.length; i++) {
        if (totalIncome <= KRA_RATES[i][0]) {
            payee = totalIncome * KRA_RATES[i][1];
            break;
        }
    }

    let NHIFDeductions = totalIncome * NHIF_RATE;
    let NSSFDeductions = totalIncome * NSSF_RATE;
    let grossSalary = totalIncome - payee - NHIFDeductions - NSSFDeductions;
    let netSalary = grossSalary - payee - NHIFDeductions - NSSFDeductions;

    document.getElementById("netSalary").value = netSalary;
}

