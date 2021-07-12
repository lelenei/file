import { makeStyles, Typography } from '@material-ui/core'
import { memo } from 'react'

const useStyles = makeStyles((theme) => ({
    root: {},
}))

export interface FileNameProps {
    name: string
}
export const FileName = memo<FileNameProps>(({ name }) => {
    const classes = useStyles()
    return (
        <Typography variant="body1" className={classes.root}>
            {name}
        </Typography>
    )
})
