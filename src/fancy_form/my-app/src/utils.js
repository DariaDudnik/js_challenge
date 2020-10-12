import validateBitcoinAddress from 'bitcoin-address-validation';

export const validators = {
  bitcoinAddress: (string) => {
    if (!validateBitcoinAddress(string)) {
      return 'Invalid Bitcoin Address';
    }
  },
  positiveFloat(string) {
    if (string === '') {
      return 'Please enter amount';
    }
    if (Number(string) < 0) {
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