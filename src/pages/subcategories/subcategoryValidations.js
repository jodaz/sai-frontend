export const validateItem = (values) => {
    const errors = {};

    if (!values.name) {
        errors.name = "Ingrese un nombre para la subcategoría.";
    }
    if (!values.category_id) {
        errors.category_id = "Seleccione una categoría.";
    }

    return errors;
};
