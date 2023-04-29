/** @format */

const Nama = ({ pass, value }) => {
    const handleChange = (e) => {
        pass(e.target.value);
    };
    return (
        <fieldset>
            <label htmlFor='nama'>Enter your full name.</label>
            <input
                className='bg-emerald-600'
                type='text'
                name='nama'
                id='nama'
                value={value}
                onChange={handleChange}
            ></input>
        </fieldset>
    );
};

const TempatLahir = ({ pass, value }) => {
    const handleChange = (e) => {
        pass(e.target.value);
    };
    return (
        <fieldset>
            <label htmlFor='tempatLahir'>Enter your place of birth.</label>
            <input
                className='bg-emerald-600'
                type='text'
                name='tempatLahir'
                id='tempatLahir'
                value={value}
                onChange={handleChange}
            ></input>
        </fieldset>
    );
};

const TanggalLahir = ({ pass, value }) => {
    const handleChange = (e) => {
        pass(e.target.value);
    };
    return (
        <fieldset>
            <label htmlFor='tanggalLahir'>Enter your date of birth.</label>
            <input
                className='bg-emerald-600'
                type='date'
                name='tanggalLahir'
                id='tanggalLahir'
                value={value}
                onChange={handleChange}
            ></input>
        </fieldset>
    );
};

const Email = ({ pass, value }) => {
    const handleChange = (e) => {
        pass(e.target.value);
    };
    return (
        <fieldset>
            <label htmlFor='email'>Enter your email address.</label>
            <input
                className='bg-emerald-600'
                type='email'
                id='email'
                name='email'
                value={value}
                onChange={handleChange}
            ></input>
        </fieldset>
    );
};

const Telepon = ({ pass, value }) => {
    const handleChange = (e) => {
        pass(e.target.value);
    };
    return (
        <fieldset>
            <label htmlFor='telepon'>Enter your phone number.</label>
            <input
                className='bg-emerald-600'
                type='number'
                name='telepon'
                id='telepon'
                value={value}
                onChange={handleChange}
            ></input>
        </fieldset>
    );
};

export { Nama, TempatLahir, TanggalLahir, Telepon, Email };
