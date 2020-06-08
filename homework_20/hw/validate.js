function validate(data) {
    const { login, password, confirmPassword, license, firstName, input, } = data;
    input = document.getElementsByName('gender');
    if (!login || !password) {
        alert('Укажите логин/пароль');
    } else if (login == 'beeline' || login == 'beeinterns' || login == 'bee') {
        alert('Логин занят');
    } else if (password.length < 6) {
        alert('Пароль должен быть длинной не менее 6 символов');
    } else if (password !== confirmPassword) {
        alert('Пароли должны совпадать');
    } else if (!firstName) {
        alert('Укажите Имя');
    } else if (!license) {
        alert('Необходимо согласие');
    } else if (data.gender == 'male' && input[0].checked == true) {
        alert(`Уважаемый ${firstName}, заявка создана`);
    } else if (data.gender == 'female' && input[1].checked == true) {
        alert(`Уважаемая ${firstName}, заявка создана`);
    }
}
