function verifyAge(age) {
    return age >= 18 ? true : confirm('Ваши родители разрешили?');
}

let userInput = prompt('Введите ваш возраст:');
let age = parseInt(userInput, 10); 

if (!userInput.trim() || isNaN(age)) {
    alert('Пожалуйста, введите корректный возраст.');
} else {
    let accessMessage = verifyAge(age) ? 'Доступ разрешен' : 'Доступ запрещен';
    alert(accessMessage);
}