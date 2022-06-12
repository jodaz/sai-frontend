export const validateItem = (values) => {
    const errors = {};

    if (!values.name) {
        errors.name = "Ingrese un nombre.";
    }
    if (!values.parishes) {
        errors.parishes = "Seleccione una o más parroquias.";
    }

    return errors;
};
