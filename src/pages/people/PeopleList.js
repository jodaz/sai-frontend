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
import { useAdmin } from '../../context/AdminContext'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import PrivateRoute from '../../components/PrivateRoute'

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
        label: 'Cédula',
        align: 'center'
    },
    { 
        id: 'cubicles',
        numeric: false,
        disablePadding: true,
        label: 'Solicitudes',
        align: 'center'
    },
    { 
        id: 'actions',
        numeric: false,
        disablePadding: true,
        label: 'Acciones',
        align: 'left'
    }
];

const PeopleList = () => {
    const isSmall = useMediaQuery(theme =>
        theme.breakpoints.down('sm')
    )
    const { state: { perPage, page } } = useAdmin()
    const [filter, setFilter] = React.useState({})
    const { loading, total, data } = useFetch('/people', {
        perPage: perPage,
        page: page,
        filter: filter
    })
    const [items, setItems] = React.useState({})

    const handleOnChange = (e) => {
        if (e.currentTarget.value) {
            setFilter({
                search: e.currentTarget.value
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
                    align='left'
                    width='10%'
                >
                    {row.dni}
                </TableCell>
                <TableCell
                    component="th"
                    id={`${row.id}`}
                    scope="row"
                    padding="normal"
                    align='center'
                    width='10%'
                >
                    {row.applications_count}
                </TableCell>
                <TableCell scope="row" align='right' width='10%'>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <LinkIconButton
                            href={`/people/${row.id}`} 
                            icon={<RemoveRedEyeIcon />}
                        />
                        <PrivateRoute authorize='super-admin,admin' unauthorized={null}>
                            <LinkIconButton href={`/people/${row.id}/edit`} />
                        </PrivateRoute>
                    </Box>
                </TableCell>
            </TableRow>
        ))
    )

    React.useEffect(() => setItems(data), [data])

    return (
        <ListContainer title="Personas">
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
                        to="/people/create"
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

export default PeopleList
