import { formatFileSize } from '@dimensiondev/kit'
import { useSnackbar } from '@masknet/theme'
import { Button, makeStyles, Typography, experimentalStyled as styled } from '@material-ui/core'
import classNames from 'classnames'
import { isNil } from 'lodash-es'
import { memo, useCallback, useState } from 'react'
import { useDropArea } from 'react-use'
import { useI18N } from '../../../../utils'
import { ArweaveCheckButtons } from './Arweave'
import { UploadFileIcon } from '@masknet/icons'
import { UploadFilesList } from './FileList'

const MAX_FILE_SIZE = formatFileSize(5000000000)

const useUploadFileStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        marginBottom: theme.spacing(1),
        overflowY: 'auto',
    },
    file: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    over: {
        borderColor: '#2CA4EF',
        borderStyle: 'solid',
        userSelect: 'none',
        '& > $indicator': { opacity: 1 },
    },
}))

export interface UploadFileProps {
    maxFileSize: number
    onFile: (file: File) => void
}

const Container = styled('div')`
    display: flex;
    flex-direction: column;
    flex: 1;
`
interface RouteState {
    key: string | undefined
    name: string
    size: number
    type: string
    block: Uint8Array
    checksum: string
    useCDN: boolean
}

export const UploadFile = memo<UploadFileProps>(({ maxFileSize, onFile }) => {
    const classes = useUploadFileStyles()
    const { t } = useI18N()
    const [selectedFiles, setSelectedFiles] = useState<File[]>([])
    const snackbar = useSnackbar()
    const [sendFiles, setSendFiles] = useState<File[]>([])
    const [bond, { over }] = useDropArea({
        onFiles(files) {
            setSelectedFiles(files)
        },
        onText: () => onError(101),
        onUri: (url: string) => onError(101),
    })

    const onError = (code: number) => {
        const messages: Record<number, string> = {
            101: t('plugin_file_service_error_101'),
            102: t('plugin_file_service_error_102', { limit: MAX_FILE_SIZE }),
        }
        if (code in messages) {
            snackbar.enqueueSnackbar(`Error ${code}: ${messages[code]}`, { variant: 'error' })
        }
    }

    const onInput = (event: React.FormEvent<HTMLInputElement>) => {
        const file = event.currentTarget.files?.item(0)
        if (isNil(file)) {
            onError(101)
        } else if (file.size > maxFileSize) {
            onError(102)
        } else {
            onFile(file)
        }
    }
    const onChange = (files: File[]) => {
        setSendFiles(files)
    }

    const onSend = useCallback(() => {}, [])
    return (
        <Container>
            <div className={classNames(classes.root, { [classes.over]: over })} {...bond}>
                <input type="file" onInput={onInput} hidden />
                {selectedFiles.length === 0 ? (
                    <>
                        <div className={classes.file}>
                            <UploadFileIcon fontSize="large" />
                            <Typography component="p">Drop a file here to upload</Typography>
                            <Typography component="p">Size limited 10.5m</Typography>
                        </div>
                        <ArweaveCheckButtons />
                    </>
                ) : (
                    <UploadFilesList files={selectedFiles} onChange={onChange} />
                )}
            </div>

            {selectedFiles.length > 0 && (
                <Button variant="contained" classes={{ root: '' }} disabled={sendFiles.length === 0} onClick={onSend}>
                    {t('plugin_file_service_on_insert')}
                </Button>
            )}
        </Container>
    )
})
