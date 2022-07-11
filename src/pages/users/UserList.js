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
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

const headCells = [
    { 
        id: 'login',
        numeric: false,
        disablePadding: true,
        label: 'Usuario'
    },
    { 
        id: 'entity',
        numeric: false,
        disablePadding: true,
        label: 'Dependencia'
    },
    { 
        id: 'actions',
        numeric: false,
        disablePadding: true,
        label: 'Acciones',
        align: 'right'
    }
];

const ItemList = () => {
    const isSmall = useMediaQuery(theme =>
        theme.breakpoints.down('sm')
    )
    const [filter, setFilter] = React.useState({})
    const { loading, total, data } = useFetch('/users', {
        perPage: 10,
        page: 1,
        filter: filter
    })
    const [items, setItems] = React.useState({})

    const handleOnChange = (e) => {
        if (e.currentTarget.value) {
            setFilter({
                name: e.currentTarget.value
            })
        } else {
            setFilter({})
        }
    }

    const rowRender = () => (
        items.map(row => (
            <TableRow hover tabIndex={-1} key={row.name}>
                <TableCell
                    component="th"
                    id={row.id}
                    scope="row"
                    padding="normal"
                    width='100%'
                >
                    {row.login}
                </TableCell>
                    <TableCell
                        component="th"
                        id={row.id}
                        scope="row"
                        padding="normal"
                        width='100%'
                    >
                        {(row.entity_id) ? (row.entity.name) : 'Sin datos'}
                    </TableCell>
                <TableCell
                    scope="row"
                    width='10%'
                >
                    <Box display="flex" justifyContent={'center'}>
                        <LinkIconButton href={`/users/${row.id}/edit`} />
                        <LinkIconButton
                            href={`/users/${row.id}`} 
                            icon={<RemoveRedEyeIcon />}
                        />
                    </Box>
                </TableCell>
            </TableRow>
        )))

    React.useEffect(() => setItems(data), [data])

    return (
        <ListContainer title="Usuarios">
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
                        to="/users/create"
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

export default ItemList
