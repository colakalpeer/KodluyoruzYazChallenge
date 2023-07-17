function calculateAge(userBirthYear) {
    let currentYear = new Date().getFullYear();

    return `Your age is ${currentYear-Number(userBirthYear)}.`;
}

let userBirthYear = prompt('What is your year of birth ?');
const age = calculateAge(userBirthYear);
alert(age);