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
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import PrivateRoute from '../../components/PrivateRoute'
import { useAdmin } from '../../context/AdminContext'
import TableToolbar from '../../components/TableToolbar';
import PrintButton from '../../components/PrintButton';

const headCells = [
    { 
        id: 'name',
        numeric: false,
        disablePadding: true,
        label: 'Nombre',
    },
    { 
        id: 'cubicles',
        numeric: false,
        disablePadding: true,
        label: 'Nº de personas',
        align: 'center'
    },
    { 
        id: 'actions',
        numeric: false,
        disablePadding: true,
        label: 'Acciones',
        align: 'center'
    }
];

const PositionList = () => {
    const isSmall = useMediaQuery(theme =>
        theme.breakpoints.down('sm')
    )
    const { state: { perPage, page } } = useAdmin()
    const [filter, setFilter] = React.useState({})
    const { loading, total, data } = useFetch('/positions', {
        perPage: perPage,
        page: page,
        filter: filter
    })
    const [items, setItems] = React.useState({})
    const { enqueueSnackbar } = useSnackbar();

    const handleOnChange = (e) => {
        if (e.currentTarget.value) {
            setFilter({
                name: e.currentTarget.value
            })
        } else {
            setFilter({})
        }
    }

    const handleDelete = React.useCallback(async (values) => {
        const { data } = await axios.delete(`/positions/${values.id}`);

        if (data) {
            setItems(prevItems => [...prevItems.filter(({ id }) => id != data.id)])
            enqueueSnackbar(
                `¡Ha eliminado el rubro "${data.name}"`, 
                { variant: 'success' }
            );
        }
    }, [])

    const rowRender = () => (
        items.map(row => (
            <TableRow hover tabIndex={-1} key={row.name}>
                <TableCell
                    component="th"
                    id={`${row.id}`}
                    scope="row"
                    padding="normal"
                    width='70%'
                >
                    {row.name}
                </TableCell>
                <TableCell
                    component="th"
                    id={`${row.id}`}
                    scope="row"
                    padding="normal"
                    align='center'
                    width='20%'
                >
                    {row.people_count}
                </TableCell>
                <TableCell scope="row" align='right' width='10%'>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <LinkIconButton
                            href={`/positions/${row.id}`} 
                            icon={<RemoveRedEyeIcon />}
                        />
                        <PrivateRoute authorize='super-admin' unauthorized={null}>
                            <LinkIconButton href={`/positions/${row.id}/edit`} />
                            <DeleteButton
                                title={`¿Está seguro que desea eliminar el rubro "${row.name}"?`}
                                onClick={() => handleDelete(row)}
                            />
                        </PrivateRoute>
                    </Box>
                </TableCell>
            </TableRow>
        )))

    React.useEffect(() => setItems(data), [data])

    return (
        <ListContainer title="Cargos">
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
                <TableToolbar>
                    <PrivateRoute authorize='super-admin,admin' unauthorized={null}>
                        {items.length ? (
                            <PrintButton
                                filter={filter}
                                basePath='/positions'
                                filename='cargos.pdf'
                                type='pdf'
                            />
                        ) : <></>}
                    </PrivateRoute>
                    <PrivateRoute authorize={'super-admin'} unauthorized={null}>
                        <Box>
                            <ButtonLink
                                color="primary"
                                variant="contained"
                                to="/positions/create"
                            />
                        </Box>
                    </PrivateRoute>
                </TableToolbar>
            </Box>
            <Box>
                <Table
                    headCells={headCells}
                    rows={items.length && rowRender()}
                    loading={loading}
                    total={total}
                />
            </Box>
        </ListContainer>
    )
}

export default PositionList
