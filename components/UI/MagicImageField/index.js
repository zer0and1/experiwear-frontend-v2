
import React, { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Button } from '@material-ui/core'
import { useDropzone } from 'react-dropzone'
import clsx from 'clsx'

import { IMAGE_PLACEHOLDER_IMAGE_PATH } from 'utils/constants/image-paths'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    width: '100%'
  },
  container: {
    width: '100%'
  },
  label: (props) => ({
    fontSize: 16,
    width: props.labelWidth,
    textAlign: 'end',
    paddingRight: theme.spacing(1),
    margin: theme.spacing(0.5, 0)
  }),
  buttonContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  button: {
    borderRadius: theme.spacing(1),
    backgroundColor: theme.palette.background.primary
  },
  fileName: {
    marginLeft: theme.spacing(2)
  },
  image: {
    width: 200,
    height: 200,
    objectFit: 'cover',
    borderRadius: 2,
    border: `1px solid ${theme.custom.palette.lightGrey}`,
    margin: theme.spacing(1, 0)
  },
  error: {
    fontSize: 14
  },
}));

const MagicImageField = ({
  label,
  labelWidth = 150,
  error,
  file,
  setFile,
  fileBuffer,
  setFileBuffer,
  className,
}) => {
  const classes = useStyles({ labelWidth });

  const onDrop = async (acceptedFiles) => {
    if (!Array.isArray(acceptedFiles) || acceptedFiles.length <= 0) return;
    const file = acceptedFiles[0];
    setFile(file)
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      setFileBuffer(reader.result);
    });
    reader.readAsDataURL(file);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: 'image/*' })

  return (
    <div className={clsx(classes.root, className)}>
      {
        !!label &&
        <Typography
          color='textSecondary'
          className={classes.label}
        >
          {label}:
        </Typography>
      }
      <div className={classes.container}  >
        <div className={classes.buttonContainer}>
          <Button
            {...getRootProps()}
            variant='outlined'
            className={classes.button}
          >
            <input {...getInputProps()} />
            Choose File
          </Button>
          <Typography className={classes.fileName}>
            {file?.name || 'No file chosen'}
          </Typography>
        </div>
        <img
          alt='upload-image'
          src={fileBuffer || IMAGE_PLACEHOLDER_IMAGE_PATH}
          className={classes.image}
        />
        {
          error && !fileBuffer &&
          <Typography
            color='error'
            variant='subtitle2'
            className={classes.error}
          >
            Please select image
          </Typography>
        }
      </div>
    </div>
  );
};

export default memo(MagicImageField);