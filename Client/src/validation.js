

export default function validate(userData) {

    const regexUser = /^[a-zA-Z0-9_]{5,}$/;
    const regexPass = /^(?=.*[A-Z])(?=.*\d).+$/i;
    const errors = {};

    if (!userData.user) {
        errors.user = "Debes ingresar con tu usuario "
    } else
        if (!userData.password) {
            errors.password = "Este campo no puede estar vacio"
        } else
            if (!regexUser.test(userData.user)) {
                errors.user = "Debe tener mas de 5 caracteres"
            } else
                if (!regexPass.test(userData.password)) {
                    errors.password = "Debe tener un paswprod con numero"
                }
    return errors;
};

