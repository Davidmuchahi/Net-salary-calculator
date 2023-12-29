
    function calculateNetSalary() {
        // Get input values
        const basicSalary = parseFloat(document.getElementById('basic-salary').value);
        const benefits = parseFloat(document.getElementById('benefits').value);

        // Calculate payee, NHIF deductions, gross salary, and net salary
        const tax = (basicSalary + benefits) * 0.1;
        const nhifDeductions = (basicSalary + benefits) * 0.05;
        const grossSalary = basicSalary + benefits - tax - nhifDeductions;
        const netSalary = grossSalary - tax - nhifDeductions;

        // Display results
        const results = document.getElementById('results');
        results.innerHTML = `
            <p>Payee (Tax): <strong>${tax.toFixed(2)}</strong></p>
            <p>NHIF Deductions: <strong>${nhifDeductions.toFixed(2)}</strong></p>
            <p>Gross Salary: <strong>${grossSalary.toFixed(2)}</strong></p>
            <p>Net Salary: <strong>${netSalary.toFixed(2)}</strong></p>
        
    }
