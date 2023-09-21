// components/FormFields.js
import React from "react";
import { DatePicker } from 'antd';
import { makeStyles } from '@material-ui/core/styles';
import { Controller } from 'react-hook-form';

import {
  Typography,
  TextField,
  MenuItem,
  InputAdornment,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({

  content: {
    width: '60%',
    padding: theme.spacing(2),
    height: '100%',
    marginTop: 40,
    justifyContent: 'flex-start',
    textAlign: 'left'
  },
  textField: {
    backgroundColor: "white",
    marginLeft: 15,
  },
  label: {
    fontFamily: 'DM Sans',
    color: "#98A1B2",
    fontWeight: '700',
    fontSize: 14,
  },
  adornment: {
    fontFamily: 'DM Sans',
    color: "#98A1B2",
    fontWeight: '400',
    fontSize: 10,
    marginRight: 10
  }
}));

const AntDesignTextInputField = ({ label, placeholder, width, InputComponent, onChange, disabled }) => {
  const classes = useStyles();
  return (
    <div style={{ marginTop: 23, marginRight: 15, width: width }}>
      <Typography variant="subtitle1" className={classes.label}>
        {label}
      </Typography>
      <InputComponent
        style={{ width: "100%" }}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
};

const TextInputField = ({ label, placeholder, width, name, control, descr = '' }) => {

  const classes = useStyles();
  return (
    <div style={{ marginTop: 23, marginRight: 15, width: width }}>
      <Typography variant="subtitle1" className={classes.label}>
        {label}
      </Typography>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField
            style={{ width: "100%" }}
            className={classes.textField}
            placeholder={placeholder}
            InputLabelProps={{ shrink: false }}
            size="small"
            variant="outlined"
            margin='none'
            InputProps={{
              style: { fontFamily: 'DM Sans', fontSize: 13 },
              endAdornment: <InputAdornment position="end">
                <div style={{
                  fontFamily: 'DM Sans',
                  color: "#98A1B2",
                  fontSize: 13,
                }}>{descr}</div>
              </InputAdornment>,
            }}
            {...field}
          />
        )}
      />
    </div>
  );
};

const NumberInputField = ({ label, placeholder, width, name, control, descr = '' }) => {
  const classes = useStyles();
  return (
    <div style={{ marginTop: 23, marginRight: 15, width: width }}>
       <Typography variant="subtitle1" className={classes.label}>
        {label}
      </Typography>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField
            style={{ width: "100%" }}
            className={classes.textField}
            placeholder={placeholder}
            InputLabelProps={{ shrink: false }}
            size="small"
            variant="outlined"
            margin='none'
            InputProps={{
              style: { fontFamily: 'DM Sans', fontSize: 13 },
              endAdornment: <InputAdornment position="end">
                <div style={{
                  fontFamily: 'DM Sans',
                  color: "#98A1B2",
                  fontSize: 13,
                }}>{descr}</div>
              </InputAdornment>,
              inputMode: 'numeric', pattern: '[0-9]*',
              onChange: (e) => {
                // Ограничение до 2 знаков после запятой
                const value = e.target.value;
                const regex = /^\d*\.?\d{0,2}$/; // Регулярное выражение
                if (regex.test(value)) {
                  field.onChange(e);
                }
              }
            }}
            {...field}
          />
        )}
      />
    </div>
  );
};

const SelectInputField = ({ label, defaultValue, width, options, name, control }) => {
  const classes = useStyles();

  return (
    <div style={{ marginTop: 23, width: width }}>
      <Typography variant="subtitle1" className={classes.label}>
        {label}
      </Typography>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => (
          <TextField
            id={`outlined-select-${name}`}
            className={classes.textField}
            select
            size="small"
            variant="outlined"
            InputLabelProps={{ shrink: false }}
            margin='none'
            InputProps={{
              style: { fontFamily: 'DM Sans', fontSize: 13 },

              ...field
            }}
            style={{ width: "100%" }}
          >
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value} style={{ fontSize: 13, fontFamily: 'DM Sans' }}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        )}
      />
    </div>
  );
};

const DateInputField = ({ label, width, name, control }) => {
  const classes = useStyles();

  return (
    <div style={{ marginTop: 23, width: width }}>
      <Typography variant="subtitle1" className={classes.label}>
        {label}
      </Typography>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <DatePicker
            style={{ width: 200, height: 38, marginLeft: 15 }}
            inputStyle={{ fontSize: '13px', fontFamily: 'DM Sans', }}
            {...field}
            format="MM/DD/YYYY"
          />
        )}
      />
    </div>
  );
};

export { TextInputField, NumberInputField, SelectInputField, DateInputField, AntDesignTextInputField };
