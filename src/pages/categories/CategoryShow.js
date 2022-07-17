import * as React from 'react'
import Box from '@mui/material/Box'
import { useParams } from 'react-router-dom'
import axios from '../../api'
import LinkIconButton from '../../components/LinkIconButton';
import LoadingIndicator from '../../components/LoadingIndicator'
import { setTitle, useAdmin } from '../../context/AdminContext'
import ApplicationList from '../applications/ApplicationList';
import PrivateRoute from '../../components/PrivateRoute'

const CategoryShow = () => {
    const { dispatch } = useAdmin()
    const { id } = useParams();
    const [record, setRecord] = React.useState(null)

    const fetchRecord = async () => {
        const { data } = await axios.get(`/categories/${id}`);

        setRecord(data);
    };

    React.useEffect(() => {
        fetchRecord()
    }, [])

    React.useEffect(() => {
        if (record) {
            setTitle(dispatch, `Categoría #${record.id}`)
        }
    }, [record])

    if (!record) return <LoadingIndicator />;

    return (
        <Box width='100%' height='100%'>
            <Box sx={{
                display: 'flex',
                backgroundColor: theme => theme.palette.secondary.main,
                padding: '1.5rem 1rem',
                borderRadius: 1,
                marginBottom: '1rem'
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: '1'
                }}>
                    <Box fontSize='1.1rem' fontWeight='600'>
                        {record.name}
                    </Box>
                </Box>
                <PrivateRoute authorize='super-admin' unauthorized={null}>
                    <Box alignSelf='start'>
                        <LinkIconButton href={`/categories/${record.id}/edit`} />
                    </Box>
                </PrivateRoute>
            </Box>
            <ApplicationList initialValues={{ category_id: id }} title={{name: record.name}} />
        </Box>
    )
}

export default CategoryShow
