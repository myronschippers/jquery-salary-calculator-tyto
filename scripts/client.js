console.log('WORKING JS');
const EMPLOYEE_LIST = [];

// kick things off after DOM load
$(document).ready(init)

function init() {
    // capture submit click event
    $('.js-submit').on('click', onClickSubmit);
}

//
// EVENT HANDLERS
// ----------

function onClickSubmit(event) {
    const newEmployee = {
        firstName: $('.js-field-firstname').val(),
        lastName: $('.js-field-lastname').val(),
        id: parseInt($('.js-field-id').val()),
        title: $('.js-field-title').val(),
        annualSalary: parseInt($('.js-field-salary').val()),
    };

    EMPLOYEE_LIST.push(newEmployee);
    console.log('Clicked Submit - EMPLOYEE_LIST: ', EMPLOYEE_LIST);
}

// render content to DOM