import { makeStyles, Typography } from '@material-ui/core'
import { memo } from 'react'

const useStyles = makeStyles((theme) => ({
    name: {
        fontSize: 16,
    },
}))

export interface FileNameProps {
    name: string
}
export const FileName = memo<FileNameProps>(({ name }) => {
    const classes = useStyles()
    return (
        <Typography variant="body1" className={classes.name}>
            {name}
        </Typography>
    )
})
