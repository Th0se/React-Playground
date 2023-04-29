/**
 * @format
 * @format
 */

const Summary = ({ pass, value }) => {
    const handleChange = (e) => {
        pass(e.target.value);
    };
    return (
        <fieldset>
            <label htmlFor='summary'>Describe yourself</label>
            <textarea
                className='bg-emerald-600 h-40'
                type='text'
                name='summary'
                id='summary'
                onChange={handleChange}
            >
                {value}
            </textarea>
        </fieldset>
    );
};

const Pengalaman = ({ pass, value }) => {
    const handleChange = (e) => {
        pass(e.target.value.split(','));
    };
    const filler = value.toString();
    return (
        <fieldset>
            <label htmlFor='pengalaman'>
                Enter your relevant experience separate by comma with no space
                (1,2,3).
            </label>
            <textarea
                className='bg-emerald-600 h-24'
                type='text'
                name='pengalaman'
                id='pengalaman'
                onChange={handleChange}
            >
                {filler}
            </textarea>
        </fieldset>
    );
};

const Kemampuan = ({ pass, value }) => {
    const handleChange = (e) => {
        pass(e.target.value.split(','));
    };
    const filler = value.toString();
    return (
        <fieldset>
            <label htmlFor='kemampuan'>
                Enter your relevant skills and separate by comma with no space
                (1,2,3).
            </label>
            <textarea
                className='bg-emerald-600 h-24'
                type='text'
                name='kemampuan'
                id='kemampuan'
                onChange={handleChange}
            >
                {filler}
            </textarea>
        </fieldset>
    );
};

const Pelatihan = ({ pass, value }) => {
    const handleChange = (e) => {
        pass(e.target.value.split(','));
    };
    const filler = value.toString();
    return (
        <fieldset>
            <label htmlFor='pelatihan'>
                Have you undergone training outside of school? List relevant
                trainings here and separate by comma with no space (1,2,3).
            </label>
            <textarea
                className='bg-emerald-600 h-16'
                type='text'
                name='pelatihan'
                id='pelatihan'
                onChange={handleChange}
            >
                {filler}
            </textarea>
        </fieldset>
    );
};

const Pencapaian = ({ pass, value }) => {
    const handleChange = (e) => {
        pass(e.target.value.split(','));
    };
    const filler = value.toString();
    return (
        <fieldset>
            <label htmlFor='pencapaian'>
                Enter your relevant achievements here and separate by comma with
                no space (1,2,3).
            </label>
            <textarea
                className='bg-emerald-600 h-16'
                type='text'
                name='pencapaian'
                id='pencapaian'
                onChange={handleChange}
            >
                {filler}
            </textarea>
        </fieldset>
    );
};

const Publikasi = ({ pass, value }) => {
    const handleChange = (e) => {
        pass(e.target.value.split(','));
    };
    const filler = value.toString();
    return (
        <fieldset>
            <label htmlFor='publikasi'>
                Have you published/presented anything significant? List them
                here and separate by comma with no space (1,2,3).
            </label>
            <textarea
                className='bg-emerald-600 h-12'
                type='text'
                name='publikasi'
                id='publikasi'
                onChange={handleChange}
            >
                {filler}
            </textarea>
        </fieldset>
    );
};

export { Summary, Pencapaian, Pengalaman, Publikasi, Pelatihan, Kemampuan };
