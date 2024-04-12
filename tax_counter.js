let check1 = false;
let check2 =false;
let check3= false;
function gross() {
    let h = document.querySelector("#grossAnnualIncome").value;
    
    
    let isValid = h === '' || /^\d+$/.test(h);
    
    if (!isValid) {
        document.querySelector(".a.error-icon").style.display = "block";
        document.querySelector("#grossAnnualIncome").style.borderColor = "red"; 
        check1 = false;
    } else {
        document.querySelector(".a.error-icon").style.display = "none";
        document.querySelector("#grossAnnualIncome").style.borderColor = ""; 
        check1 = true;
    }
}
function extra() {
    let h = document.querySelector("#extraIncome").value;
    let isValid = h === '' || /^\d+$/.test(h);
    
    if (!isValid) {
        document.querySelector(".b.error-icon").style.display = "block";
        document.querySelector("#extraIncome").style.borderColor = "red"; 
        check2= false;
    } else {
        document.querySelector(".b.error-icon").style.display = "none";
        document.querySelector("#extraIncome").style.borderColor = ""; 
        check2= true;
    }
}

function tad() {
    let h = document.querySelector("#totalApplicableDeductions").value;
    let isValid = h === '' || /^\d+$/.test(h);
    
    if (!isValid) {
        document.querySelector(".c.error-icon").style.display = "block";
        document.querySelector("#totalApplicableDeductions").style.borderColor = "red"; 
        check3= false;
    } else {
        document.querySelector(".c.error-icon").style.display = "none";
        document.querySelector("#totalApplicableDeductions").style.borderColor = ""; 
        check3= true;
    }
}
let bttn = document.querySelector("#btn");
function ageGroupChanged() {
    let ageGroup = document.getElementById("ageGroup").value;
    if (ageGroup !== "0") {
        document.querySelector(".d.error-icon").style.display = "none";
        document.querySelector("#ageGroup").style.borderColor = ""; 
    } else {
        document.querySelector(".d.error-icon").style.display = "block";
        document.querySelector("#ageGroup").style.borderColor = "red"; 
    }
}
function calculate() {
    let ageGroupElement = document.getElementById("ageGroup");
    let selectedAgeGroup = parseInt(ageGroupElement.options[ageGroupElement.selectedIndex].value);

    // Validate age selection
    let check4 = false;
    if (selectedAgeGroup == 1 || selectedAgeGroup == 2 || selectedAgeGroup == 3) {
        check4 = true;
        document.querySelector(".d.error-icon").style.display = "none"; 
    }

    
    let grossIncome = parseFloat(document.querySelector("#grossAnnualIncome").value);
    let extraIncome = parseFloat(document.querySelector("#extraIncome").value);
    let deductions = parseFloat(document.querySelector("#totalApplicableDeductions").value);

    let isValid = !isNaN(grossIncome) && !isNaN(extraIncome) && !isNaN(deductions) && selectedAgeGroup !== 0;

    if (isValid && check4) {
       
        let overallIncome = grossIncome + extraIncome - deductions;

        
        let tax = 0;
        if (overallIncome > 800000) {
            let taxableIncome = overallIncome - 800000;
            if (selectedAgeGroup < 40) {
                tax = 0.3 * taxableIncome;
            } else if (selectedAgeGroup >= 40 && selectedAgeGroup < 60) {
                tax = 0.4 * taxableIncome;
            } else { // Age >= 60
                tax = 0.1 * taxableIncome;
            }
        }

       
        let overallIncomeAfterTaxDeduction = overallIncome - tax;

        
        document.querySelector("#myModal .modal-content p").textContent = overallIncomeAfterTaxDeduction;
        document.getElementById("myModal").style.display = "block";
    } else {
       
        if (!isValid) {
            if (isNaN(grossIncome)) {
                document.querySelector(".a.error-icon").style.display = "block";
                document.querySelector("#grossAnnualIncome").style.borderColor = "red"; 
       
            }
            if (isNaN(extraIncome)) {
                document.querySelector(".b.error-icon").style.display = "block";
                document.querySelector("#extraIncome").style.borderColor = "red"; 
      
            }
            if (isNaN(deductions)) {
                document.querySelector(".c.error-icon").style.display = "block";
                document.querySelector("#totalApplicableDeductions").style.borderColor = "red";
            }
            if (selectedAgeGroup === 0) {
                document.querySelector(".d.error-icon").style.display = "block";
                document.querySelector("#ageGroup").style.borderColor = "red";
            }
        }
    }
}


function closeModal() {
   
    document.getElementById("myModal").style.display = "none";
}

