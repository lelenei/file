import { experimentalStyled as styled } from '@material-ui/core'
import { memo } from 'react'
import { useI18N } from '../../../../utils'
import { UploadFile } from './UploadFile'
import { UploadFileButtons } from './UploadFileButtons'

export interface UploadFilePageProps {
    onChange?: () => void
}

const Container = styled('div')`
    display: flex;
    flex-direction: column;
`

export const UploadFilePage = memo<UploadFilePageProps>(({ onChange }) => {
    const { t } = useI18N()
    const onFile = (file: File) => {
        console.log(file.name)
    }
    return (
        <Container>
            <UploadFile maxFileSize={5000000000} onFile={onFile} />
            <UploadFileButtons />
        </Container>
    )
})
