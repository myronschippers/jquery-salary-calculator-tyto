console.log('WORKING JS');
const EMPLOYEE_LIST = [];

// kick things off after DOM load
$(document).ready(init)

function init() {
    // capture submit click event
    $('.js-submit').on('click', onClickSubmit);
    $('.js-employee-table').on('click', '.js-btn-delete', onClickDelete);
}

function calculateMonthly() {
    let totalMonthlySalary = 0;

    for (let i = 0; i < EMPLOYEE_LIST.length; i++) {
        const indvEmployee = EMPLOYEE_LIST[i];
        const annualSalary = indvEmployee.annualSalary;
        const monthlySalary = annualSalary / 12;

        totalMonthlySalary += monthlySalary;
    }

    return totalMonthlySalary;
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
    render();
}

function onClickDelete(event) {
    const index = $(event.target).data('index');
    // const index = event.target.dataset.index;
    EMPLOYEE_LIST.splice(index, 1);
    console.log('EMPLOYEE_LIST: ', EMPLOYEE_LIST);
    render();
}

// render content to DOM
function render() {
    const totalMonthly = calculateMonthly();
    const $employeeTable = $('.js-employee-table');
    const $monthly = $('.js-total-monthly');

    $employeeTable.empty();

    for (let i = 0; i < EMPLOYEE_LIST.length; i++) {
        const indvEmployee = EMPLOYEE_LIST[i];
        $employeeTable.append(`
            <tr>
                <td>${indvEmployee.firstName}</td>
                <td>${indvEmployee.lastName}</td>
                <td>${indvEmployee.id}</td>
                <td>${indvEmployee.title}</td>
                <td>$${indvEmployee.annualSalary}</td>
                <td><button class="js-btn-delete" data-index="${i}">DELETE</button></td>
            </tr>
        `);
    }

    let monthlyStyle = 'fair';
    if (totalMonthly > 20000) {
        monthlyStyle = 'red';
    }

    $monthly.empty();
    $monthly.append('<div class="' + monthlyStyle + '">$' + totalMonthly + '</div>');

}
