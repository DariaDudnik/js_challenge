import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useLabelStyles = makeStyles({
  root: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: 'black',
    '&:active': {
      color: 'black',
    },
  },
});

const useFieldStyles = makeStyles({
  root: {
    width: '400px',
  }
})

const FormTextField = (props) => {
  const { value, setValue,  errorText } = props;
  const labelStyles = useLabelStyles();
  const fieldStyles = useFieldStyles();

  return (<TextField
    value={props.value}
    className={fieldStyles.root}
    value={value}
    onChange={(e) => setValue(e.target.value)}
    InputLabelProps={{
      shrink: true,
      classes: labelStyles,
    }}
    helperText={errorText}
    error={Boolean(errorText)}
    required={props.required}
    label={props.label}
    type={props.type}
    placeholder={props.placeholder}
  />);
}

export default React.memo(FormTextField);