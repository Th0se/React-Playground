import { useState } from "react";

const Input = ({filler, onChange}) => {
    return (
        <input
            value={filler}
            onChange={onChange}    
        ></input>
    );
};

const Button = ({buttonLabel, onClick}) => {

    return (
        <button onClick={onClick}>{buttonLabel}</button>
    );
};

const Overview = ({filler, buttonLabel, pass}) => {

    const [value, setValue] = useState(filler);

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleClick = () => {
        pass(value);
        setValue('');
    };

    return (
        <>
            <Input
                filler={value}
                onChange={handleChange}
            ></Input>
            <Button 
                buttonLabel={buttonLabel}
                onClick={handleClick}
            ></Button>
        </>
    );
};

export {
    Overview
}