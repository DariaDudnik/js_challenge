import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import { useStyles } from './styles';
import FormTextField from '../../components/FormTextField';
import Button from '@material-ui/core/Button';

export const FormPage = () => {
  const styles = useStyles();
  const [address, setAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [otp, setOtp] = useState('');

  const [addressErrorText, setAddressErrorText] = useState();
  const [amountErrorText, setAmountErrorText] = useState();
  const [otpErrorText, setOTPErrorText] = useState();

  const handleSubmit = () => {
    const addressValidation = validateBCAddress(address);
    const amountValidation = validateAmount(amount);
    const otpValidation = validateOTP(otp);

    setAddressErrorText(addressValidation);
    setAmountErrorText(amountValidation);
    setOTPErrorText(otpValidation);

    if (addressValidation || amountValidation || otpValidation) {
      return;
    }

    alert('Sending to BTC!!');
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
          />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

