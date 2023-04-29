/** @format */

const NamaSekolah = ({ object, pass }) => {
    const handleChange = (e) => {
        pass(e.target.value);
    };
    return (
        <fieldset>
            <label htmlFor='namaSekolah'>Enter your latest education.</label>
            <input
                className='bg-emerald-600'
                type='text'
                name='namaSekolah'
                id='namaSekolah'
                value={object.NamaSekolah}
                onChange={handleChange}
            ></input>
        </fieldset>
    );
};

const ProgramStudi = ({ object, pass }) => {
    const handleChange = (e) => {
        pass(e.target.value);
    };
    return (
        <fieldset>
            <label htmlFor='programStudi'>
                Enter the study program of your latest education.
            </label>
            <input
                className='bg-emerald-600'
                type='text'
                name='programStudi'
                id='programStudi'
                value={object.Program}
                onChange={handleChange}
            ></input>
        </fieldset>
    );
};

const StartYear = ({ object, pass }) => {
    const handleChange = (e) => {
        pass(e.target.value);
    };
    return (
        <fieldset>
            <label htmlFor='startYear'>When did you start studying?</label>
            <input
                className='bg-emerald-600'
                type='date'
                name='startYear'
                id='startYear'
                value={object.TahunMulaiBelajar}
                onChange={handleChange}
            ></input>
        </fieldset>
    );
};

const EndYear = ({ object, pass }) => {
    const handleChange = (e) => {
        pass(e.target.value);
    };
    return (
        <fieldset>
            <label htmlFor='endYear'>When did you finish studying?</label>
            <input
                className='bg-emerald-600'
                type='date'
                name='endYear'
                id='endYear'
                value={object.TahunSelesaiBelajar}
                onChange={handleChange}
            ></input>
        </fieldset>
    );
};

export { NamaSekolah, ProgramStudi, StartYear, EndYear };
