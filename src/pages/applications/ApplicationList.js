import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import SearchIcon from '@mui/icons-material/Search';
import { useMediaQuery } from '@mui/material'
import useFetch from '../../hooks/useFetch'
import Table from '../../components/Table'
import ButtonLink from '../../components/ButtonLink'
import ListContainer from '../../components/ListContainer';
import LinkIconButton from '../../components/LinkIconButton';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import DeleteButton from '../../components/DeleteButton'
import { useSnackbar } from 'notistack';
import axios from '../../api'

const headCells = [
    { 
        id: 'num',
        numeric: false,
        disablePadding: true,
        label: 'Número',
    },
    { 
        id: 'address',
        numeric: false,
        disablePadding: true,
        label: 'Dirección',
    },
    { 
        id: 'people',
        numeric: false,
        disablePadding: true,
        label: 'Persona',
    },
    { 
        id: 'category',
        numeric: false,
        disablePadding: true,
        label: 'Categoría',
    },
    { 
        id: 'status',
        numeric: false,
        disablePadding: true,
        label: 'Estado',
        align: 'right'
    },
    { 
        id: 'actions',
        numeric: false,
        disablePadding: true,
        label: 'Acciones',
        align: 'center'
    }
];

const ApplicationList = ({ initialValues, createButton, showpeople }) => {
    const isSmall = useMediaQuery(theme =>
        theme.breakpoints.down('sm')
    )
    const [filter, setFilter] = React.useState(initialValues)
    const { loading, total, data } = useFetch('/applications', {
        perPage: 10,
        page: 1,
        filter: filter
    })
    const [items, setItems] = React.useState({})
    const { enqueueSnackbar } = useSnackbar();

    const handleOnChange = (e) => {
        if (e.currentTarget.value) {
            const value = e.currentTarget.value;

            setFilter(prevState => ({ ...prevState, address: value }))
        } else {
            setFilter(initialValues)
        }
    }

    const handleDelete = React.useCallback(async (values) => {
        const { data } = await axios.delete(`/applications/${values.id}`);

        if (data) {
            setItems(prevItems => [
                ...prevItems.filter(({ id }) => id != data.id),
                data  
            ])
            enqueueSnackbar(
                `¡Ha desincorporado el cubículo "${data.address}"`, 
                { variant: 'success' }
            );
        }
    }, [])

    const rowRender = () => (
        items.map(row => (
            <TableRow hover tabIndex={-1} key={row.num}>
                <TableCell
                    component="th"
                    id={row.id}
                    scope="row"
                    padding="normal"
                    width='10%'
                >
                    {row.num}
                </TableCell>
                <TableCell
                    component="th"
                    id={row.id}
                    scope="row"
                    padding="normal"
                    width='35%'
                >
                    {row.address}
                </TableCell>
                <TableCell
                    component="th"
                    id={row.id}
                    scope="row"
                    padding="normal"
                    width='25%'
                >
                    {row.people.name}
                </TableCell>
                <TableCell
                    component="th"
                    id={row.id}
                    scope="row"
                    padding="normal"
                    width='10%'
                    textAlign='center'
                >
                    {row.subcategory.name}
                </TableCell>
                <TableCell
                    component="th"
                    id={row.id}
                    scope="row"
                    padding="normal"
                    width='10%'
                    sx={{
                        textAlign: 'center'
                    }}
                >
                    {row.state.name}
                </TableCell>
                <TableCell
                    scope="row"
                    align='right'
                    width='10%'
                >
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <LinkIconButton href={`/applications/${row.id}/edit`} />
                        {row.active ? (
                            <DeleteButton
                                title={`¿Está seguro que desea anular la solicitud "${row.num}"?`}
                                onClick={() => handleDelete(row)}
                            />
                        ) : null}
                    </Box>
                </TableCell>
            </TableRow>
        )))

    React.useEffect(() => setItems(data), [data])

    return (
        <ListContainer title="Cubículos">
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box width={isSmall ? '100%' : '40%'} backgroundColor='#fff'>
                    <TextField
                        onChange={handleOnChange}
                        InputProps={{
                            startAdornment: (
                                <Box marginLeft='6px' display='flex'>
                                    <SearchIcon />
                                </Box>
                            )
                        }}
                        placeholder='Buscar'
                        fullWidth
                    />
                </Box>
                {(createButton) && (
                    <Box>
                        <ButtonLink
                            color="primary"
                            variant="contained"
                            to={`/applications/${initialValues.person_id}/create`}
                        />
                    </Box>
                )}
            </Box>
            <Table
                headCells={headCells}
                rows={items.length && rowRender()}
                loading={loading}
                total={total}
            />
        </ListContainer>
    )
}

ApplicationList.defaultProps = {
    initialValues: {},
    createButton: false,
    showpeople: false
}

export default ApplicationList
