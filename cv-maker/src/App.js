/** @format */

import { useState } from 'react';
import {
    Nama,
    TanggalLahir,
    Telepon,
    TempatLahir,
    Email,
} from './major_components/data_pribadi';
import {
    NamaSekolah,
    ProgramStudi,
    StartYear,
    EndYear,
} from './major_components/riwayat_pendidikan';
import {
    Summary,
    Pelatihan,
    Pencapaian,
    Pengalaman,
    Kemampuan,
    Publikasi,
} from './major_components/data_profesional';
import {
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
} from './major_components/output';

const App = () => {
    const [nama, setNama] = useState(``);
    const [tempatLahir, setTempatLahir] = useState(``);
    const [tanggalLahir, setTanggalLahir] = useState(``);
    const [email, setEmail] = useState(``);
    const [telepon, setTelepon] = useState(``);
    const [pendidikan, setPendidikan] = useState({
        NamaSekolah: ``,
        Program: ``,
        TahunMulaiBelajar: ``,
        TahunSelesaiBelajar: ``,
    });
    const [summary, setSummary] = useState(``);
    const [pengalaman, setPengalaman] = useState(``);
    const [kemampuan, setKemampuan] = useState(``);
    const [pelatihan, setPelatihan] = useState(``);
    const [pencapaian, setPencapaian] = useState(``);
    const [publikasi, setPublikasi] = useState(``);
    const [displayedPage, setDisplayedPage] = useState(true);

    const handleDisplayedPage = () => {
        setDisplayedPage(!displayedPage);
    };
    const handleNama = (value) => {
        setNama(value);
    };
    const handleTempatLahir = (value) => {
        setTempatLahir(value);
    };
    const handleTanggalLahir = (value) => {
        setTanggalLahir(value);
    };
    const handleTelepon = (value) => {
        setTelepon(value);
    };
    const handleEmail = (value) => {
        setEmail(value);
    };
    const handleNamaSekolah = (value) => {
        setPendidikan({ ...pendidikan, NamaSekolah: value });
    };
    const handleProgram = (value) => {
        setPendidikan({ ...pendidikan, Program: value });
    };
    const handleTahunMulaiBelajar = (value) => {
        setPendidikan({ ...pendidikan, TahunMulaiBelajar: value });
    };
    const handleTahunSelesaiBelajar = (value) => {
        setPendidikan({ ...pendidikan, TahunSelesaiBelajar: value });
    };
    const handleSummary = (value) => {
        setSummary(value);
    };
    const handleKemampuan = (value) => {
        setKemampuan(value);
    };
    const handlePengalaman = (value) => {
        setPengalaman(value);
    };
    const handlePelatihan = (value) => {
        setPelatihan(value);
    };
    const handlePencapaian = (value) => {
        setPencapaian(value);
    };
    const handlePublikasi = (value) => {
        setPublikasi(value);
    };

    return (
        <div className='bg-emerald-700 grid gap-4'>
            <h1 className='grid justify-center font-extrabold text-2xl'>
                CV maker
            </h1>
            <button
                onClick={handleDisplayedPage}
                className='bg-neutral-400 w-fit justify-self-center p-1 border-solid border-2 border-neutral-700'
            >
                {displayedPage ? `Result` : `Change`}
            </button>
            {displayedPage ? (
                <form className='grid gap-4 justify-center'>
                    <Nama
                        pass={handleNama}
                        value={nama}
                    ></Nama>
                    <TempatLahir
                        pass={handleTempatLahir}
                        value={tempatLahir}
                    ></TempatLahir>
                    <TanggalLahir
                        pass={handleTanggalLahir}
                        value={tanggalLahir}
                    ></TanggalLahir>
                    <Telepon
                        pass={handleTelepon}
                        value={telepon}
                    ></Telepon>
                    <Email
                        pass={handleEmail}
                        value={email}
                    ></Email>
                    <NamaSekolah
                        pass={handleNamaSekolah}
                        object={pendidikan}
                    ></NamaSekolah>
                    <ProgramStudi
                        pass={handleProgram}
                        object={pendidikan}
                    ></ProgramStudi>
                    <StartYear
                        pass={handleTahunMulaiBelajar}
                        object={pendidikan}
                    ></StartYear>
                    <EndYear
                        pass={handleTahunSelesaiBelajar}
                        object={pendidikan}
                    ></EndYear>
                    <Summary
                        pass={handleSummary}
                        value={summary}
                    ></Summary>
                    <Pengalaman
                        pass={handlePengalaman}
                        value={pengalaman}
                    ></Pengalaman>
                    <Kemampuan
                        pass={handleKemampuan}
                        value={kemampuan}
                    ></Kemampuan>
                    <Pelatihan
                        pass={handlePelatihan}
                        value={pelatihan}
                    ></Pelatihan>
                    <Pencapaian
                        pass={handlePencapaian}
                        value={pencapaian}
                    ></Pencapaian>
                    <Publikasi
                        pass={handlePublikasi}
                        value={publikasi}
                    ></Publikasi>
                </form>
            ) : (
                <div className='grid grid-cols-2'>
                    <div className='justify-center grid h-fit gap-2'>
                        <OutputNama fullName={nama}></OutputNama>
                        <OutputTempatTanggalLahir
                            place={tempatLahir}
                            date={tanggalLahir}
                        ></OutputTempatTanggalLahir>
                        <OutputContact
                            phone={telepon}
                            email={email}
                        ></OutputContact>
                        <DataEdukasi educationData={pendidikan}></DataEdukasi>
                    </div>
                    <div className='justify-center grid gap-2'>
                        <OutputSummary description={summary}></OutputSummary>
                        <OutputPengalaman array={pengalaman}></OutputPengalaman>
                        <OutputPelatihan array={pelatihan}></OutputPelatihan>
                        <OutputKemampuan array={kemampuan}></OutputKemampuan>
                        <OutputPencapaian array={pencapaian}></OutputPencapaian>
                        <OutputPublikasi array={publikasi}></OutputPublikasi>
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;
