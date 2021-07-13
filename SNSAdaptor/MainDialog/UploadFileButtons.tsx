import { NewFolderIcon } from '@masknet/icons'
import { Button, makeStyles } from '@material-ui/core'
import { memo } from 'react'

const useStyles = makeStyles((theme) => ({
    section: {
        display: 'flex',
        flexDirection: 'column',
    },
    button: {
        background: 'none',
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
                align="left"
                startIcon={<NewFolderIcon fontSize="inherit" />}>
                Upload
            </Button>
            <Button
                className={classes.button}
                align="left"
                variant="contained"
                startIcon={<NewFolderIcon fontSize="inherit" />}>
                New Folder
            </Button>
        </section>
    )
})
