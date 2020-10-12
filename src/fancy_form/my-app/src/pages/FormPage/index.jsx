import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import MuiAlert from '@material-ui/lab/Alert';
import { useStyles } from './styles';
import FormTextField from '../../components/FormTextField';
import { validators } from '../../utils';
import { sendBitcoin } from '../../services/SendBitcoin';


const formStates = {
  INITIAL: 0,
  PROGRESS: 1,
  COMPLETE: 2,
};

const buttonCaptions = [
  'Submit',
  'Please wait...',
  'Back',
];


export const FormPage = () => {
  const styles = useStyles();
  const [address, setAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [otp, setOtp] = useState('');
  const [formState, setFormState] = useState(formStates.INITIAL);

  const [addressErrorText, setAddressErrorText] = useState();
  const [amountErrorText, setAmountErrorText] = useState();
  const [otpErrorText, setOTPErrorText] = useState();

  const pay = async () => {
    const addressValidation = validators.bitcoinAddress(address);
    const amountValidation = validators.positiveFloat(amount);
    const otpValidation = validators.otp(otp);

    setAddressErrorText(addressValidation);
    setAmountErrorText(amountValidation);
    setOTPErrorText(otpValidation);

    if (addressValidation || amountValidation || otpValidation) {
      return;
    }

    setFormState(formStates.PROGRESS);
    try {
      await sendBitcoin(address, amount, otp);
      setFormState(formStates.COMPLETE);
    } catch (ex) {
      setFormState(formStates.INITIAL);
    }
  }

  const handleSubmit = async () => {
    if (formState === formStates.INITIAL) {
      pay();
    } else if (formState === formStates.COMPLETE) {
      setAddress('');
      setAmount('');
      setOtp('');
      setFormState(formStates.INITIAL);
    }
  }

  return (
    <Grid id="container" container justify="center" className={styles.root} >
      <Grid item
        className={styles.form}
        id="form"
        xs={10}
        md={6}
        lg={4}
        container
        spacing={4}
        alignItems="center"
        direction="column"
      >
        <Grid item>
          <FormTextField
            value={address}
            setValue={setAddress}
            required={true}
            label="Bitcoin Address"
            placeholder="16q4PinynazaMYfv24juNLkbjkDQxJo2dc"
            errorText={addressErrorText}
            disabled={formState !== formStates.INITIAL}
          />
        </Grid>
        <Grid item>
          <FormTextField
            value={amount}
            setValue={setAmount}
            required={true}
            label="Amount to send"
            type="number"
            placeholder="0.0000"
            errorText={amountErrorText}
            disabled={formState !== formStates.INITIAL}
          />
        </Grid>
        <Grid item>
          <FormTextField
            value={otp}
            setValue={setOtp}
            required={true}
            label="OTP Authentication"
            placeholder="SMS OTP"
            errorText={otpErrorText}
            disabled={formState !== formStates.INITIAL}
          />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            disabled={formState === formStates.PROGRESS}
          >
            {buttonCaptions[formState]}
          </Button>
        </Grid>
        {formState === formStates.COMPLETE && (
          <Grid item>
            <MuiAlert
              severity="success"
              elevation={6}
              variant="filled"
            >
              Your transfer is successfull
            </MuiAlert>
          </Grid>)
        }
      </Grid>
    </Grid>
  );
}


