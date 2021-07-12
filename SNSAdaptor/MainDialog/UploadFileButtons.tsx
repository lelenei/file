import { NewFolderIcon, UploadFileIcon } from '@masknet/icons'
import { Button, experimentalStyled as styled } from '@material-ui/core'
import { memo } from 'react'

const Container = styled('div')`
    display: flex;
    flex-direction: column;
`
export interface UploadFileButtonsProps {}

export const UploadFileButtons = memo<UploadFileButtonsProps>(() => {
    return (
        <Container>
            <Button variant="contained" startIcon={<UploadFileIcon fontSize="small" viewBox="0 0 20 20" />}>
                Upload
            </Button>
            <Button variant="contained" startIcon={<NewFolderIcon fontSize="small" viewBox="0 0 20 20" />}>
                New Folder
            </Button>
        </Container>
    )
})
