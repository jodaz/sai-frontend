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

const headCells = [
    { 
        id: 'name',
        numeric: false,
        disablePadding: true,
        label: 'Nombre',
    },
    { 
        id: 'actions',
        numeric: false,
        disablePadding: true,
        label: 'Acciones',
        align: 'center'
    }
];

const ParishList = () => {
    const isSmall = useMediaQuery(theme =>
        theme.breakpoints.down('sm')
    )
    const [filter, setFilter] = React.useState({})
    const { loading, total, data } = useFetch('/parishes', {
        perPage: 10,
        page: 1,
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
        const { data } = await axios.delete(`/parishes/${values.id}`);

        if (data) {
            setItems(prevItems => [...prevItems.filter(({ id }) => id != data.id)])
            enqueueSnackbar(
                `¡Ha eliminado la parroquia "${data.name}"`, 
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
                <TableCell scope="row" align='right' width='10%'>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <LinkIconButton
                            href={`/parishes/${row.id}`} 
                            icon={<RemoveRedEyeIcon />}
                        />
                        <LinkIconButton href={`/parishes/${row.id}/edit`} />
                        <DeleteButton
                            title={`¿Está seguro que desea eliminar la parroquia "${row.name}"?`}
                            onClick={() => handleDelete(row)}
                        />
                    </Box>
                </TableCell>
            </TableRow>
        )))

    React.useEffect(() => setItems(data), [data])

    return (
        <ListContainer title="Parroquias">
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
                <Box>
                    <ButtonLink
                        color="primary"
                        variant="contained"
                        to="/parishes/create"
                    />
                </Box>
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

export default ParishList
