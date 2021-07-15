import { NewFolderIcon, UploadFileIcon } from '@masknet/icons'
import { MaskColorVar } from '@masknet/theme'
import { Button, makeStyles } from '@material-ui/core'
import { memo } from 'react'

const useStyles = makeStyles((theme) => ({
    section: {
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
    },
    button: {
        background: 'none',
        justifyContent: 'left',
        color: MaskColorVar.primary,
        fontWeight: 400,
    },
}))

export interface UploadFileButtonsProps {}

export const UploadFileButtons = memo<UploadFileButtonsProps>(() => {
    const classes = useStyles()

    return (
        <section className={classes.section}>
            <Button
                className={classes.button}
                variant="contained"
                startIcon={<UploadFileIcon fontSize="inherit" viewBox="0 0 40 40" />}>
                Upload
            </Button>
            <Button
                className={classes.button}
                variant="contained"
                startIcon={<NewFolderIcon fontSize="inherit" viewBox="0 0 20 20" />}>
                New Folder
            </Button>
        </section>
    )
})
