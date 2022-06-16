import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import SearchIcon from '@mui/icons-material/Search';
import { useMediaQuery } from '@mui/material'
import axios from '../../../api'
import useGetQueryFromParams from '../../../hooks/useGetQueryFromParams';
import Table from './Table'
import { useParams } from 'react-router-dom';
import ButtonLink from '../../../components/ButtonLink'

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
    }
];

const ListPeopleApplications = () => {
    const { id } = useParams();
    const isSmall = useMediaQuery(theme =>
        theme.breakpoints.down('sm')
    )
    const params = useGetQueryFromParams({
        filter: { person_id: id}
    })
    const [data, setData] = React.useState([])

    const fetchOptions = React.useCallback(async () => {
        const { data: { data } } = await axios.get(`applications`, { params: params })
        setData(data)
    }, []);

    React.useEffect(() => {
        fetchOptions();
    }, [id])

    const handleOnChange = (e) => {
        // if (e.currentTarget.value) {
        //     setFilter({
        //         name: e.currentTarget.value
        //     })
        // } else {
        //     setFilter({})
        // }
    }

    return (
        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box width={isSmall ? '100%' : '40%'}>
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
                        to={`/people/${id}/applications/create`}
                    />
                </Box>
            </Box>
            <Box>
                <Table headCells={headCells} data={data} />
            </Box>
        </Box>
    )
}

export default ListPeopleApplications
