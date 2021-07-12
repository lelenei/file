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
    flexdirection: column;
`

export const UploadFilePage = memo<UploadFilePageProps>(({ onChange }) => {
    const { t } = useI18N()

    return (
        <Container>
            <UploadFile />
            <UploadFileButtons />
        </Container>
    )
})
