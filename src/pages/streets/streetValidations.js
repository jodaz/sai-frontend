export const validateItem = (values) => {
    const errors = {};

    if (!values.name) {
        errors.name = "Ingrese un nombre para la calle.";
    }
    if (!values.sectors) {
        errors.sectors = "Seleccione uno o más sectores.";
    }

    return errors;
};
