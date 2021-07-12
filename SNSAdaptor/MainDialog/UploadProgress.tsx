import { memo } from 'react'
import type { FileInfo } from '../../types'
import { experimentalStyled as styled, Typography, LinearProgress, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    file: {
        padding: theme.spacing(1),
    },
}))
const Container = styled('div')`
    border-radius: 4px;
    background-color: #dddddd;
`

export interface UploadFileProgressProps {
    file?: FileInfo
    size: number
}

export const UploadFileProgress = memo<UploadFileProgressProps>(({ file, size = 0 }) => {
    const classes = useStyles()

    return (
        <Container>
            <Typography variant="body2" className={classes.file}>
                {file?.name ?? 'abcd.txt'}
            </Typography>
            <LinearProgress value={size / (file?.size ?? 1)} variant="determinate" />
        </Container>
    )
})
