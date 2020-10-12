import validateBitcoinAddress from 'bitcoin-address-validation';

const validateBCAddress = (string) => {
  if (!validate(string)) {
    console.log('not valid address!');
    return 'Invalid Bitcoin Address';
  }
  console.log('valid address!');
}

const validateAmount = (number) => {
  if (number === '') {
    return 'Please enter amount';
  }
  if (number < 0) {
    return 'Amount must be positive';
  }
  return null;
}

const validateOTP = (string) => {
  if (string.length !== 4) {
    return 'OTP should contain 4 numeric symbols';
  }
  if (!/^\d+$/.test(string)) {
    return 'OTP can only contain digits';
  }
}

export const validators = {
  bitcoinAddress: (string) => {
    if (!validateBitcoinAddress(string)) {
      return 'Invalid Bitcoin Address';
    }
  },
  positiveFloat(string) {
    if (number === '') {
      return 'Please enter amount';
    }
    if (Number(number) < 0) {
      return 'Amount must be positive';
    }
    return null;
  },
  otp(string) {
    if (string.length !== 4) {
      return 'OTP should contain 4 numeric symbols';
    }
    if (!/^\d+$/.test(string)) {
      return 'OTP can only contain digits';
    }
  },
};