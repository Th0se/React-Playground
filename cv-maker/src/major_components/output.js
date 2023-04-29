/** @format */

import { ObjectToUnorderedList } from './lesser_components/reusables';

const OutputNama = ({ fullName }) => {
    return (
        <div>
            <p className='font-bold'>Full name</p>
            <div>
                <p>{`${fullName}`}</p>
            </div>
        </div>
    );
};

const OutputTempatTanggalLahir = ({ place, date }) => {
    return (
        <div>
            <p className='font-bold'>Birth</p>
            <div>
                <p>
                    {`${place}`}, {`${date}`}
                </p>
            </div>
        </div>
    );
};

const OutputContact = ({ email, phone }) => {
    return (
        <div>
            <p className='font-bold'>Contact</p>
            <div>
                {email && <p>{`${email}`}</p>}
                {phone && <p>phone: {`${phone}`}</p>}
            </div>
        </div>
    );
};

const DataEdukasi = ({ educationData }) => {
    return (
        <div>
            <p className='font-bold'>Latest education</p>
            <div>
                <p>{`Institution: ${educationData.NamaSekolah}`}</p>
                <p>{`Programme: ${educationData.Program}`}</p>
                <p>{`Start year: ${educationData.TahunMulaiBelajar}`}</p>
                <p>{`End year: ${educationData.TahunSelesaiBelajar}`}</p>
            </div>
        </div>
    );
};

const OutputSummary = ({ description }) => {
    return (
        <div>
            <p className='font-bold'>Summary</p>
            <div>
                <p>{`${description}`}</p>
            </div>
        </div>
    );
};

const OutputPengalaman = ({ array }) => {
    return (
        <ObjectToUnorderedList
            title='Experience'
            array={array}
        ></ObjectToUnorderedList>
    );
};

const OutputKemampuan = ({ array }) => {
    return (
        <ObjectToUnorderedList
            title='Skills'
            array={array}
        ></ObjectToUnorderedList>
    );
};

const OutputPelatihan = ({ array }) => {
    return (
        <ObjectToUnorderedList
            title='Trainings'
            array={array}
        ></ObjectToUnorderedList>
    );
};

const OutputPencapaian = ({ array }) => {
    return (
        <ObjectToUnorderedList
            title='Achievements'
            array={array}
        ></ObjectToUnorderedList>
    );
};

const OutputPublikasi = ({ array }) => {
    return (
        <ObjectToUnorderedList
            title='Publication and presentations'
            array={array}
        ></ObjectToUnorderedList>
    );
};

export {
    OutputNama,
    OutputTempatTanggalLahir,
    OutputContact,
    OutputSummary,
    OutputPelatihan,
    OutputPengalaman,
    OutputPublikasi,
    OutputPencapaian,
    OutputKemampuan,
    DataEdukasi,
};
