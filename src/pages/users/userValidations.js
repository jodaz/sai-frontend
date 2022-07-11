const generalUserValidations = values => {
    const errors = {};

    if (!values.login) {
        errors.login = "Ingrese un login.";
    }
    if (!values.entity_id) {
        errors.entity_id = 'Seleccione una dependencia.';
    }

    return errors;
}

export const validateCreateUser = (values) => {
    let errors = {};

    errors = { ...generalUserValidations(values)}

    if (!values.password) {
        errors.password = 'Ingrese una contraseña';
    } else if (values.password.length <= 5) {
        errors.password = 'La contraseña debe tener más de 5 caracteres'
    }
    if (!values.roles) {
        errors.roles = 'Seleccione uno o más roles';
    }

    return errors;
};

export const validateEditUser = (values) => {
    let errors = {};
    errors = { ...generalUserValidations(values)}

    if (!values.roles.length) {
        errors.roles = 'Seleccione uno o más roles';
    }

    return errors;
};
