import { Checkbox, List, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core'
import { memo, useEffect, useState } from 'react'
import { File as FileIcon } from 'react-feather'

const useListItemStyle = makeStyles((theme) => ({
    root: {},
}))

const useStyles = makeStyles((theme) => ({
    list: {},
    item: {},
}))
export interface UploadFilesListProps {
    files: File[]
    onChange: (files: File[]) => void
}

export const UploadFilesList = memo<UploadFilesListProps>(({ files, onChange }) => {
    const classes = useStyles()
    const classesItem = useListItemStyle()
    const [selsectedFiles, setSelectedFiles] = useState<File[]>([])

    const onClick = (value: number) => {
        if (selsectedFiles.some((x) => x === files[value])) {
            setSelectedFiles(selsectedFiles.filter((x) => x !== files[value]))
        } else {
            setSelectedFiles([...selsectedFiles, files[value]])
        }
    }

    useEffect(() => {
        onChange(selsectedFiles)
    }, [onChange, selsectedFiles])

    const RenderItem = (file: File, idx: number) => (
        <ListItem classes={classesItem} role="Listitem" button key={idx} onClick={() => onClick(idx)}>
            <ListItemIcon>
                <Checkbox checked={selsectedFiles.some((x) => x === file)} tabIndex={-1} disableRipple />
                <FileIcon width={32} height={32} />
            </ListItemIcon>
            <ListItemText primary={file.name} />
        </ListItem>
    )
    return (
        <List dense role="list" className={classes.list}>
            {files.map(RenderItem)}
        </List>
    )
})
