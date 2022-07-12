import * as React from 'react'
import Box from '@mui/material/Box'
import { useParams } from 'react-router-dom'
import axios from '../../api'
import LinkIconButton from '../../components/LinkIconButton';
import LoadingIndicator from '../../components/LoadingIndicator'
import { setTitle, useAdmin } from '../../context/AdminContext'
import ApplicationList from '../applications/ApplicationList';
import PrivateRoute from '../../components/PrivateRoute'

const SubcategoryShow = () => {
    const { dispatch } = useAdmin()
    const { id } = useParams();
    const [record, setRecord] = React.useState(null)

    const fetchRecord = async () => {
        const { data } = await axios.get(`/subcategories/${id}`);

        setRecord(data);
    };

    React.useEffect(() => {
        fetchRecord()
    }, [])

    React.useEffect(() => {
        if (record) {
            setTitle(dispatch, `Subcategoría #${record.id}`)
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
                        <LinkIconButton href={`/subcategories/${record.id}/edit`} />
                    </Box>
                </PrivateRoute>
            </Box>
            <ApplicationList initialValues={{ subcategory_id: id }} />
        </Box>
    )
}

export default SubcategoryShow
