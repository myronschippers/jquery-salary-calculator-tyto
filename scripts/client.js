console.log('WORKING JS');
const EMPLOYEE_LIST = [
    {
        firstName: 'Myron',
        lastName: 'Schippers',
        id: 3,
        title: 'Master',
        annualSalary: 30000,
    },
    {
        firstName: 'Rachael',
        lastName:'Bromander',
        id: 2,
        title: 'Ninja',
        annualSalary: 50000,
    },
    {
        firstName: 'Scott',
        lastName: 'Bromander',
        id: 1,
        title: 'Necromancer',
        annualSalary: 20000,
    }
];

// kick things off after DOM load
$(document).ready(init)

function init() {
    // capture submit click event
    $('.js-submit').on('click', onClickSubmit);
    $('.js-employee-table').on('click', '.js-btn-delete', onClickDelete);

    render();
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
    const $firstName = $('.js-field-firstname');
    const $lastName = $('.js-field-lastname');
    const $id = $('.js-field-id');
    const $title = $('.js-field-title');
    const $salary = $('.js-field-salary');

    const newEmployee = {
        firstName: $firstName.val(),
        lastName: $lastName.val(),
        id: parseInt($id.val()),
        title: $title.val(),
        annualSalary: parseInt($salary.val()),
    };

    $firstName.val('');
    $lastName.val('');
    $id.val('');
    $title.val('');
    $salary.val('');

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
    console.log('EMPLOYEES_LIST: ', EMPLOYEE_LIST);

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
    $monthly.append('<span class="' + monthlyStyle + '">$' + totalMonthly + '</span>');

}
