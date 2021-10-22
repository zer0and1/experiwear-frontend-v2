import { useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Box, Grid, RadioGroup } from '@material-ui/core';
import { ColorField, FormButton, HeaderText, SubHeaderText, PrettoSlider, Title, FanbandTerminal, ExpRadio } from 'components';
import { VIBRATION_MARKS } from './constants';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2, 2),
  },
  closeButton: {
    position: 'absolute',
    right: 8,
    top: 8,
    color: theme.palette.grey[500],
  },
}));

const SettingDialog = ({ open, onClose, params, onChange }) => {
  const classes = useStyles();

  const handleDurationChange = useCallback((e, value) => {
    onChange({ target: { value, name: 'duration', type: 'slider' } });
  }, [onChange]);

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth classes={{ paper: classes.root }}>
      <DialogTitle>
        <Title>Alert Parameters</Title>
        <IconButton className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Grid container>
          <Grid item xs={9}>
            <HeaderText>Led Lights</HeaderText>
            <Box mb={2}>
              <RadioGroup row name="decoration" value={params.decoration} onChange={onChange}>
                <ExpRadio label="Flashing" color="info" value="flashing" />
                <ExpRadio label="Stable" color="info" value="stable" />
              </RadioGroup>
            </Box>
            <SubHeaderText>Color palette</SubHeaderText>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <ColorField
                  name="topLight1"
                  label="Top light #1"
                  value={params.topLight1}
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={4}>
                <ColorField
                  name="topLight2"
                  label="Top light #2"
                  value={params.topLight2}
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={4}>
                <ColorField
                  name="topLight3"
                  label="Top light #3"
                  value={params.topLight3}
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={4}>
                <ColorField
                  name="bottomLight1"
                  label="Bottom light #1"
                  value={params.bottomLight1}
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={4}>
                <ColorField
                  name="bottomLight2"
                  label="Bottom light #2"
                  value={params.bottomLight2}
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={4}>
                <ColorField
                  name="bottomLight3"
                  label="Bottom light #3"
                  value={params.bottomLight3}
                  onChange={onChange}
                />
              </Grid>
            </Grid>

            <HeaderText>Vibration</HeaderText>

            <SubHeaderText>Duration</SubHeaderText>
            <PrettoSlider
              name="duration"
              min={1}
              max={20}
              step={1}
              marks={VIBRATION_MARKS}
              value={params.duration}
              onChange={handleDurationChange}
            />

            <SubHeaderText>Style</SubHeaderText>
            <Box mb={2}>
              <RadioGroup row name="vibration" value={params.vibration} onChange={onChange}>
                <ExpRadio label="Quick bursts" color="info" value="quick" />
                <ExpRadio label="Long vibrate" color="info" value="long" />
              </RadioGroup>
            </Box>
          </Grid>
          <Grid item xs={3} container justify="flex-end">
            <FanbandTerminal
              palette={params}
              duration={params.duration}
              decoration={params.decoration}
            >
            </FanbandTerminal>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <FormButton color="secondary">
          Reset to default
        </FormButton>
      </DialogActions>
    </Dialog>
  );
};

export default SettingDialog;