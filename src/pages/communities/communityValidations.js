export const validateItem = (values) => {
    const errors = {};

    if (!values.name) {
        errors.name = "Ingrese un nombre para el rubro.";
    }
    if (!values.parishes) {
        errors.parishes = "Seleccione una o más parroquias.";
    }

    return errors;
};
