import * as React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Grid from '@mui/material/Grid';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import TwitterIcon from '@mui/icons-material/Twitter';
import Box from '@mui/material/Box';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import CustomButton from '../../../../components/CustomButton';
import SignUpSecondStep from '../SecondStep';
import DateOfBirth from '../../components/DateOfBirth';
import {DIALOG_ACTIONS} from "@redux/dialog/action";
import {SING_UP_ACTIONS} from "@redux/auth/singUp/action";
import {isNotNext} from "@redux/auth/singUp/selector";
import {getName, getEmail} from "@redux/auth/singUp/selector";

const MAIN_COLOR = '#1D9BF0';
const CUSTOM_BUTTON_NEXT_STYLE = `
    background-color: #000;
    color: #fff;
      &:hover {
        background-color: #444;
    }`;
const CUSTOM_BUTTON_NEXT_NAME = 'Next';

export default () => {
  const dispatch = useDispatch();
  const {closeDialog, openDialog} = DIALOG_ACTIONS;
  const {setName, setEmail} = SING_UP_ACTIONS;
  const isNotNextFirstStep = useSelector(isNotNext);
  const name = useSelector(getName);
  const email = useSelector(getEmail);

  return (
    <>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <IconButton aria-label="close" sx={{
          position: 'absolute',
          top: 5,
          left: 5,
        }}
                    onClick={() => dispatch(closeDialog())}>
          <CloseIcon/>
        </IconButton>
        <TwitterIcon sx={{fontSize: 40, color: MAIN_COLOR}}/>
      </Box>
      <Box sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
        <Box>
          <DialogTitle>Create your account</DialogTitle>
          <DialogContent>
            <Grid>
              <Grid item xs={12} sx={{padding: '10px 0'}}>
                <TextField
                  onChange={(v) => dispatch(setName(v.target.value))}
                  value={name}
                  sx={{width: '100%'}}
                  id="name"
                  label="Name"
                  variant="outlined"/>
              </Grid>
              <Grid item sx={{padding: '10px 0'}}>
                <TextField
                  onChange={(v) => dispatch(setEmail(v.target.value))}
                  value={email}
                  id="email"
                  sx={{width: '100%'}}
                  label="Email"
                  variant="outlined"/>
              </Grid>
            </Grid>
            {/*<DateOfBirth/>*/}
          </DialogContent>
        </Box>
        <Box>
          <DialogContent>
            <CustomButton
              disabled={isNotNextFirstStep}
              customStyle={CUSTOM_BUTTON_NEXT_STYLE}
              name={CUSTOM_BUTTON_NEXT_NAME}
              onclickAction={() => openDialog(SignUpSecondStep)}
            />
          </DialogContent>
        </Box>
      </Box>
    </>
  );
}
