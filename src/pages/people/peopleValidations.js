export const validateItem = (values) => {
    const errors = {};

    if (!values.name) {
        errors.name = "Ingrese un nombre para la calle.";
    }
    if (!values.dni) {
        errors.dni = "Ingrese la cédula de identidad.";
    }
    if (!values.address) {
        errors.address = "Ingrese la dirección.";
    }
    if (!values.phone) {
        errors.phone = "Ingrese el número de teléfono.";
    }
    if (!values.parish_id) {
        errors.parish_id = "Seleccione una parroquia.";
    }
    if (!values.community_id) {
        errors.community_id = "Seleccione una comunidad.";
    }
    if (!values.sector_id) {
        errors.sector_id = "Seleccione un sector.";
    }
    if (!values.street_id) {
        errors.street_id = "Seleccione una calle.";
    }

    return errors;
};
