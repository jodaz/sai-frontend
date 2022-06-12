export const validateItem = (values) => {
    const errors = {};

    if (!values.name) {
        errors.name = "Ingrese un nombre para la parroquia.";
    }

    return errors;
};
