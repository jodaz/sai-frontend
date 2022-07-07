import IconButton from '@mui/material/IconButton'
import CheckIcon from '@mui/icons-material/Check';
import { useConfirm } from 'material-ui-confirm';

const ApproveButton = ({
    title,
    onClick
}) => {
    const confirm = useConfirm();

    const handleClick = () => {
        confirm({ 
            title: title,
            cancellationText: 'Cancelar',
            confirmationText: 'Continuar',
            description: '¡Esta acción es permanente!'
        })
            .then(() => onClick())
    };

    return (
        <IconButton small onClick={handleClick}>
            <CheckIcon />
        </IconButton>
    )
}

export default ApproveButton
