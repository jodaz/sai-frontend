import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box'

const TableToolbar = ({ children, multiple }) => (
    <Box sx={{
        display: 'flex',
        height: '2rem',
        width: '8rem',
        justifyContent: (multiple) ? 'space-between' : 'end'
    }}>
        {children}
    </Box>
);

TableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
};

export default TableToolbar