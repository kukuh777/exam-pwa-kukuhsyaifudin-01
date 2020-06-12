import React from 'react';
import { MenuItem, TextField } from '@material-ui/core';
import classNames from 'classnames';
import useStyles from './style';

const Select = ({
    label = '', name = '', value = null, onChange = () => {},
    options = [], helperText = 'Please Select', className = '', ...other
}) => {
    const styles = useStyles();
    const rootClasss = classNames(styles.root, className);
    return (
        <TextField
            id={name}
            select
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            fullWidth
            InputLabelProps={{
                shrink: true,
            }}
            className={rootClasss}
            {...other}
            placeholder={helperText}
        >
            <MenuItem disabled selected>
                {helperText}
            </MenuItem>
            {options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
            ))}
        </TextField>
    );
};

export default Select;