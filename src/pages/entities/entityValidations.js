export const validateEntity = (values) => {
    const errors = {};

    if (!values.name) {
        errors.name = "Ingrese un nombre.";
    }

    return errors;
};
