"use strict"

/*check if any reqiured fields are missing */

function checkMissing(formId=main-form) {
    if (missingFields.length > 0) {
    alert(`Error - Form not completed`);
}

} 

/*check if the email is at least 8 characters*/

function validateEmail(formId=main-form) {
    if (emailInput.value.length < 8) {
    alert(`Email must contain 8 or more characters`);
    }
 }
