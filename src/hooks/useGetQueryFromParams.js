const useGetQueryFromParams = ({
    perPage, page, sort, filter
}) => {
    const query = {};
    
    if (page) {
        query.page = page + (-1);
    }

    if (perPage) {
        query.perPage = perPage
    }

    // Add all filter params to query.
    Object.keys(filter || {}).forEach((key) => {
        query[`filter[${key}]`] = filter[key];
    });

    // Add sort parameter
    if (sort && sort.field) {
        query.sort = sort.field;
        query.order = sort.order === 'ASC' ? 'asc' : 'desc';
    }

    return query;
}

export default useGetQueryFromParams