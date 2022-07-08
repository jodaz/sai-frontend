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
import { useSnackbar } from 'notistack';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

const headCells = [
    { 
        id: 'num',
        numeric: false,
        disablePadding: true,
        label: 'Número',
    },
    { 
        id: 'title',
        numeric: false,
        disablePadding: true,
        label: 'Título',
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

const InstitutionList = ({ initialValues, createButton, showpeople }) => {
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

            setFilter(prevState => ({ ...prevState, search: value }))
        } else {
            setFilter(initialValues)
        }
    }

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
                    {row.title}
                </TableCell>
                <TableCell
                    component="th"
                    id={row.id}
                    scope="row"
                    padding="normal"
                    width='25%'
                >
                    {row.person.name}
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
                        <LinkIconButton
                            href={`/applications/${row.id}`}
                            icon={<RemoveRedEyeIcon />}
                        />
                    </Box>
                </TableCell>
            </TableRow>
        )))

    React.useEffect(() => setItems(data), [data])

    return (
        <ListContainer title="Instituciones">
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
                            to={`/people/${initialValues.person_id}/applications/create`}
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

InstitutionList.defaultProps = {
    initialValues: {},
    createButton: false,
    showpeople: false
}

export default InstitutionList
