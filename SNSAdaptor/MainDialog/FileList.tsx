import { List, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core'
import { memo } from 'react'
import { File as FileIcon } from 'react-feather'

const useListItemStyle = makeStyles((theme) => ({
    root: {},
}))

const useStyles = makeStyles((theme) => ({
    list: {},
    item: {},
}))
export interface FileListProps {
    files: File[]
}

export const FileList = memo<FileListProps>(({ files }) => {
    const classes = useStyles()
    const classesItem = useListItemStyle()

    const RenderItem = (file: File, idx: number) => (
        <ListItem classes={classesItem}>
            <ListItemIcon>
                <FileIcon width={32} height={32} />
            </ListItemIcon>
            <ListItemText primary={file.name} />
        </ListItem>
    )
    return <List className={classes.list}>{files.map(RenderItem)}</List>
})
