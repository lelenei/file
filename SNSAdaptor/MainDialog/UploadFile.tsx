import { UploadFileIcon } from '@masknet/icons'
import { Button, makeStyles, Typography } from '@material-ui/core'
import { isNil } from 'lodash-es'
import { memo, useState } from 'react'
import { useDropArea } from 'react-use'
import { useI18N } from '../../../../utils'
import type { FileInfo } from '../../types'
import { ArweaveCheckButtons } from './Arweave'

const useUploadFileStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        height: 200,
        flex: 1,
    },
    file: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
}))

export interface UploadFileProps {
    path?: string
}

export const UploadFile = memo<UploadFileProps>(({ path }) => {
    const classes = useUploadFileStyles()
    const { t } = useI18N()
    const [selectedFileInfo, setSelectedFileInfo] = useState<FileInfo | null>(null)
    const [bond, { over }] = useDropArea({
        onFiles(files) {
            if (files.length > 1) {
                onError(101)
            } else if (files[0].size > maxFileSize) {
                onError(102)
            } else {
                onFile(files[0])
            }
        },
        onText: () => onError(101),
        onUri: () => onError(101),
    })
    return (
        <>
            <div className={classes.root}>
                {path ? null : (
                    <>
                        <div className={classes.file}>
                            <UploadFileIcon fontSize="large" viewBox="0 0 40 40" />
                            <Typography component="p">Drop a file here to upload</Typography>
                            <Typography component="p">Size limited 10.5m</Typography>
                        </div>
                        <ArweaveCheckButtons />
                    </>
                )}
            </div>

            {selectedFileInfo ? (
                <Button variant="contained" classes={{ root: '' }} disabled={isNil(selectedFileInfo)}>
                    {t('plugin_file_service_on_insert')}
                </Button>
            ) : null}
        </>
    )
})
