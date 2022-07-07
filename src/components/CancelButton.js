import IconButton from '@mui/material/IconButton'
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import { useConfirm } from 'material-ui-confirm';

const CancelButton = ({
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
            <DoDisturbIcon />
        </IconButton>
    )
}

export default CancelButton
