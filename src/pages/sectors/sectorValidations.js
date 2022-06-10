export const validateItem = (values) => {
    const errors = {};

    if (!values.name) {
        errors.name = "Ingrese un nombre para el rubro.";
    }
    if (!values.community_id) {
        errors.community_id = "Seleccione una comunidad.";
    }

    return errors;
};
