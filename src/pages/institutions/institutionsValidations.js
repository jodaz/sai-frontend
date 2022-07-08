export const institutionCreateValidations = (values) => {
    const errors = {};

    if (!values.title) {
        errors.title = "Ingrese un título.";
    }
    if (!values.description) {
        errors.description = "Ingrese una descripción.";
    }
    if (!values.category_id) {
        errors.category_id = "Seleccione una categoría.";
    }
    if (!values.subcategory_id) {
        errors.subcategory_id = "Seleccione una subcategoría.";
    }

    return errors;
};
