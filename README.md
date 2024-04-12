# Tax Calculator

Welcome to the Tax Calculator web application! This project allows users to calculate their overall income after tax deductions based on various input parameters such as gross annual income, extra income, total applicable deductions, and age group.

## Features

- **Input Validation:** Ensure accurate calculations by prompting users to enter numerical values for income fields. Error icons provide visual feedback for invalid inputs, with tooltips displaying specific error messages.
  
- **Age Group Selection:** Users can specify their age group from a dropdown menu with three options: <40, ≥ 40 & < 60, and ≥ 60. Age group selection is mandatory for accurate tax calculation.
  
- **Calculation:** The application computes overall income after tax deductions using predefined tax rates based on the provided inputs and age group. It considers income exceeding ₹8 Lakhs for tax calculation.

- **Modal Display:** After calculation, the result is displayed in a modal window, presenting the overall income after tax deduction.

- **Responsive Design:** The application is designed to be responsive, ensuring optimal user experience across various devices and screen sizes.

## Usage

1. **Input Fields:**
   - Enter your gross annual income, extra income, and total applicable deductions in the respective input fields.
   - Ensure all inputs contain numerical values only. Error icons will appear for invalid inputs.

2. **Age Group Selection:**
   - Choose your age group from the dropdown menu provided.
   - This selection is mandatory for accurate tax calculation.

3. **Calculate:**
   - Click the "Calculate" button to compute the overall income after tax deduction.
   - If any input errors exist, the application will prompt you to correct them before proceeding.

4. **Result:**
   - Upon successful calculation, a modal will display the overall income after tax deduction.

## Implementation Details

- **HTML:** The structure of the web page is defined using HTML, including form elements for user input and a modal for displaying results.

- **CSS:** Styles for the user interface, including input fields, error icons, buttons, and modal appearance, are defined using CSS to ensure a visually appealing and intuitive design.

- **JavaScript:** Functionality for input validation, calculation, and modal display is implemented using JavaScript. Event listeners are used to trigger functions on user interactions such as input changes and button clicks.

## Error Handling

- **Input Validation:** Error icons are displayed beside input fields for invalid inputs, with tooltips providing detailed error messages.

- **Age Group Selection:** If no age group is selected before calculation, an error icon is displayed to prompt the user to make a selection.

- **Calculation Errors:** If calculation errors occur due to invalid inputs or missing age group selection, appropriate error messages are displayed to guide the user.

## Note

- **Educational Purpose:** This project serves as a basic example of a tax calculation web application and is intended for educational use. It may not cover all tax scenarios and should not be used for official tax filings.
  
- **Contributions:** Contributions and feedback are welcome! If you have suggestions for improvements or bug fixes, feel free to fork the repository and submit pull requests.

## Technologies Used

- **HTML**
- **CSS**
- **JavaScript**
- **Font Awesome:** Used for error icons in the input fields.


---
If you have any questions or need further assistance, please don't hesitate to ask!
