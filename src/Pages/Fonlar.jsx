import React, { useState } from 'react';

const Fonlar = () => {
    const [anaPara, setAnaPara] = useState('');
    const [faizOrani, setFaizOrani] = useState('');
    const [sure, setSure] = useState('');
    const [aylikYatirim, setAylikYatirim] = useState('');
    const [sonucTablosu, setSonucTablosu] = useState([]);

    const hesapla = () => {
        let toplamPara = parseFloat(anaPara);
        let birikim = parseFloat(anaPara);
        let tablo = [];

        for (let ay = 1; ay <= sure; ay++) {
            let buAykiFaiz = (toplamPara * (faizOrani / 100)) / 12;
            let stopaj = buAykiFaiz * 0.04;
            toplamPara += buAykiFaiz - stopaj;
            birikim += parseFloat(aylikYatirim);
            toplamPara += parseFloat(aylikYatirim);

            tablo.push({
                ay,
                aylikYatirim,
                buAykiFaiz,
                stopaj,
                birikim,
                toplamPara
            });
        }

        setSonucTablosu(tablo);
    };

    return (
        <div className="fonlar">
            <input type="number" value={anaPara} onChange={e => setAnaPara(e.target.value)} placeholder="Ana Para (TL)" />
            <input type="number" value={faizOrani} onChange={e => setFaizOrani(e.target.value)} placeholder="Yıllık Faiz Oranı (%)" />
            <input type="number" value={sure} onChange={e => setSure(e.target.value)} placeholder="Mevduat Süresi (Ay)" />
            <input type="number" value={aylikYatirim} onChange={e => setAylikYatirim(e.target.value)} placeholder="Aylık Ek Yatırım (TL)" />
            <button onClick={hesapla}>Hesapla</button>
            <table>
                <thead>
                    <tr>
                        <th>Ay</th>
                        <th>Aylık Ek Yatırım (TL)</th>
                        <th>Mevduat Faizi (TL)</th>
                        <th>Stopaj Vergisi (TL)</th>
                        <th>Toplam Birikim (TL)</th>
                        <th>Toplam Para (TL)</th>
                    </tr>
                </thead>
                <tbody>
                    {sonucTablosu.map((satir, index) => (
                        <tr key={index}>
                            <td>{satir.ay}</td>
                            <td className="up">↑ {satir.aylikYatirim.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                            <td className="up">↑ {satir.buAykiFaiz.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                            <td className="down">↓ -{satir.stopaj.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                            <td>{satir.birikim.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                            <td>{satir.toplamPara.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Fonlar;
