import { DialogContent, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { memo, useCallback } from 'react'
import { useI18N } from '../../../utils'
import { InjectedDialog, InjectedDialogProps } from '../../../components/shared/InjectedDialog'
import { UploadFilePage } from './MainDialog/UploadFilePage'
import { UploadFileProgress } from './MainDialog/UploadProgress'

const useStyles = makeStyles((theme) => ({
    actions: {},
    button: {},
}))
export interface FileServiceDialogNewProps extends InjectedDialogProps {
    onClose: () => void
}

export const FileServiceDialogNew: React.FC<FileServiceDialogNewProps> = ({ open, onClose }) => {
    const { t } = useI18N()
    const classes = useStyles()

    const onInsert = useCallback(() => {}, [])

    return (
        <InjectedDialog title={t('plugin_file_service_display_name')} open={open}>
            <DialogContent>
                <FilePath path="All" />
                <UploadFilePage />
                <UploadFileProgress size={50} />
            </DialogContent>
        </InjectedDialog>
    )
}

interface FilePathProps {
    path: string
}
export const FilePath = memo<FilePathProps>(({ path }) => {
    return (
        <Typography variant="body1" color="textPrimary">
            {path}
        </Typography>
    )
})
