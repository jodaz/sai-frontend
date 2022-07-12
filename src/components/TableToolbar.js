import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box'

const TableToolbar = ({ children }) => (
    <Box sx={{
        display: 'flex',
        height: '2rem',
        width: '8rem',
        justifyContent: 'space-between',
    }}>
        {children}
    </Box>
);

TableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
};

export default TableToolbar