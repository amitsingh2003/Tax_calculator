let check1 = false;
let check2 =false;
let check3= false;
function gross() {
    let h = document.querySelector("#grossAnnualIncome").value;
    
    // Check if the input consists of digits only and is not empty
    let isValid = h === '' || /^\d+$/.test(h);
    
    if (!isValid) {
        document.querySelector(".a.error-icon").style.display = "block";
        document.querySelector("#grossAnnualIncome").style.borderColor = "red"; // Set border color to red
        check1 = false;
    } else {
        document.querySelector(".a.error-icon").style.display = "none";
        document.querySelector("#grossAnnualIncome").style.borderColor = ""; // Reset border color
        check1 = true;
    }
}
function extra() {
    let h = document.querySelector("#extraIncome").value;
    let isValid = h === '' || /^\d+$/.test(h);
    // Check if the input consists of digits only
    if (!isValid) {
        document.querySelector(".b.error-icon").style.display = "block";
        document.querySelector("#extraIncome").style.borderColor = "red"; // Set border color to red
        check2= false;
    } else {
        document.querySelector(".b.error-icon").style.display = "none";
        document.querySelector("#extraIncome").style.borderColor = ""; // Reset border color
        check2= true;
    }
}

function tad() {
    let h = document.querySelector("#totalApplicableDeductions").value;
    let isValid = h === '' || /^\d+$/.test(h);
    // Check if the input consists of digits only
    if (!isValid) {
        document.querySelector(".c.error-icon").style.display = "block";
        document.querySelector("#totalApplicableDeductions").style.borderColor = "red"; // Set border color to red
        check3= false;
    } else {
        document.querySelector(".c.error-icon").style.display = "none";
        document.querySelector("#totalApplicableDeductions").style.borderColor = ""; // Reset border color
        check3= true;
    }
}
let bttn = document.querySelector("#btn");
function ageGroupChanged() {
    let ageGroup = document.getElementById("ageGroup").value;
    if (ageGroup !== "0") {
        document.querySelector(".d.error-icon").style.display = "none";
        document.querySelector("#ageGroup").style.borderColor = ""; // Hide error icon
    } else {
        document.querySelector(".d.error-icon").style.display = "block";
        document.querySelector("#ageGroup").style.borderColor = "red"; // Show error icon
    }
}
function calculate() {
    let ageGroupElement = document.getElementById("ageGroup");
    let selectedAgeGroup = parseInt(ageGroupElement.options[ageGroupElement.selectedIndex].value);

    // Validate age selection
    let check4 = false;
    if (selectedAgeGroup == 1 || selectedAgeGroup == 2 || selectedAgeGroup == 3) {
        check4 = true;
        document.querySelector(".d.error-icon").style.display = "none"; // Hide error icon
    }

    // Validate other fields
    let grossIncome = parseFloat(document.querySelector("#grossAnnualIncome").value);
    let extraIncome = parseFloat(document.querySelector("#extraIncome").value);
    let deductions = parseFloat(document.querySelector("#totalApplicableDeductions").value);

    let isValid = !isNaN(grossIncome) && !isNaN(extraIncome) && !isNaN(deductions) && selectedAgeGroup !== 0;

    if (isValid && check4) {
        // Calculate overall income after deductions
        let overallIncome = grossIncome + extraIncome - deductions;

        // Calculate tax
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

        // Calculate overall income after tax deduction
        let overallIncomeAfterTaxDeduction = overallIncome - tax;

        // Display the calculated deductions in the modal
        document.querySelector("#myModal .modal-content p").textContent = overallIncomeAfterTaxDeduction;
        document.getElementById("myModal").style.display = "block";
    } else {
        // Show error icons for other fields if they are invalid
        if (!isValid) {
            if (isNaN(grossIncome)) {
                document.querySelector(".a.error-icon").style.display = "block";
                document.querySelector("#grossAnnualIncome").style.borderColor = "red"; // Reset border color
       
            }
            if (isNaN(extraIncome)) {
                document.querySelector(".b.error-icon").style.display = "block";
                document.querySelector("#extraIncome").style.borderColor = "red"; // Reset border color
      
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
    // Hide the modal when the close button is clicked
    document.getElementById("myModal").style.display = "none";
}

