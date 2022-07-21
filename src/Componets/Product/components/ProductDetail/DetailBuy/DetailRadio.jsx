import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Styles from './DetailBuy.module.scss';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const currencies = [
    {
        value: 'Hà Nội',
        label: 'Hà Nội',
    },
    {
        value: 'Thái Bình',
        label: 'Thái Bình',
    },
    {
        value: 'TP Hồ Chí Minh',
        label: 'TP Hồ Chí Minh',
    },
    {
        value: 'Đà Nẵng',
        label: 'Đà Nẵng',
    },
];
const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            width: '250px',
        },
    },
}));
export default function DetailRadio() {
    const classes = useStyles();
    const [value, setValue] = React.useState('selection');

    const handleChange = (event) => {
        setValue(event.target.value);
        console.log('value', value);
    };
    const [currency, setCurrency] = React.useState('');

    const handleTextFieldChange = (event) => {
        setCurrency(event.target.value);
        console.log('textfield', event.target.value);
    };
    return (
        <FormControl>
            <RadioGroup value={value} onChange={handleChange}>
                <FormControlLabel value="selection" control={<Radio />} label="Đại MỖ, Nam Từ Liêm, HN" />
                <FormControlLabel value="address" control={<Radio />} label="Chọn khu vực giao hàng khác " />
                {value === 'address' && (
                    <div className={Styles.LocaltionModal}>
                        <div className={Styles.Row}>
                            <p className={Styles.LocalType}>Tỉnh/Thành phố</p>
                            <div className={Styles.LocalContainer}>
                                <form className={classes.root}>
                                    <div>
                                        <TextField
                                            id="outlined-select-currency-native"
                                            select
                                            label="Tỉnh/Thành Phố"
                                            value={currency}
                                            onChange={handleTextFieldChange}
                                            SelectProps={{
                                                native: true,
                                            }}
                                            variant="outlined"
                                        >
                                            {currencies.map((option) => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </TextField>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className={Styles.Row}>
                            <p className={Styles.LocalType}>Quận/Huyện</p>
                            <div className={Styles.LocalContainer}>
                                <form className={classes.root}>
                                    <div>
                                        <TextField
                                            id="outlined-select-currency-native"
                                            select
                                            label="Quận/Huyện"
                                            value={currency}
                                            onChange={handleTextFieldChange}
                                            SelectProps={{
                                                native: true,
                                            }}
                                            variant="outlined"
                                        >
                                            {currencies.map((option) => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </TextField>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className={Styles.Row}>
                            <p className={Styles.LocalType}>Phường/Xã</p>
                            <div className={Styles.LocalContainer}>
                                <form className={classes.root}>
                                    <div>
                                        <TextField
                                            id="outlined-select-currency-native"
                                            select
                                            label="Phường/Xã"
                                            value={currency}
                                            onChange={handleTextFieldChange}
                                            SelectProps={{
                                                native: true,
                                            }}
                                            variant="outlined"
                                        >
                                            {currencies.map((option) => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </TextField>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
            </RadioGroup>
        </FormControl>
    );
}
