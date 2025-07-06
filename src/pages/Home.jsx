import React, { useEffect } from 'react';
import "../styles/Home.css";
import BannerImage from "../assets/background.svg";
import infoImage from "../assets/printing(1).jpg";
import infoImage2 from "../assets/printing(2).jpg";
import ratingIcon from "../assets/rating.png"
import fastIcon from "../assets/speed.png"
import customIcon from "../assets/rocket.png"
import fotoDimas from "../assets/dimas.jpg"
import fotoZainal from "../assets/zainal.jpg"
import fotoJessica from "../assets/jessica.jpg"
import fotoDuta from "../assets/duta.jpg"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Home() {
    useEffect(() => {
        const elements = document.querySelectorAll('.fade-in');
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show');
                    }
                });
            },
            { threshold: 0.1 }
        );

        elements.forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <div className='home'>
                <img src={BannerImage} alt="Banner" className="backgroundImage" />
                <div className='headerContainer'>
                    <h1>Punya ide keren?</h1>
                    <h1>Yuk, cetak jadi nyata!</h1>
                    <p>Semua ide kamu bisa diwujudkan jadi barang nyata dengan hasil yang rapi, detail, dan cepat !</p>
                    <a href="https://wa.me/6281578975317" target="_blank" rel="noopener noreferrer">
                        <button>
                            <WhatsAppIcon style={{ marginRight: "8px" }} />
                            Hubungi Kami
                        </button>
                    </a>
                </div>
            </div>

            <div className="highlightSection">
                <div className="highlightListWrapper">
                    <div className='highlightList'>
                        <div className="highlightCard fade-in show">
                            <img src={ratingIcon} alt="Kualitas Terbaik" className="highlightIcon" />
                            <h3>Kualitas Terbaik</h3>
                            <p>Hasil cetak detail dan presisi, dengan teknologi 3D printing modern.</p>
                        </div>
                        <div className="highlightCard fade-in show">
                            <img src={fastIcon} alt="Proses Cepat" className="highlightIcon" />
                            <h3>Proses Cepat</h3>
                            <p>Pesanan dikerjakan dengan cepat dan tepat waktu tanpa mengorbankan kualitas.</p>
                        </div>
                        <div className="highlightCard fade-in show">
                            <img src={customIcon} alt="Bebas Desain" className="highlightIcon" />
                            <h3>Bebas Desain</h3>
                            <p>Kamu bisa mewujudkan ide unikmu sendiri tanpa batasan desain.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='infoSection'>
                <div className='whyUs fade-in show'>
                    <img src={infoImage} alt="Kenapa memilih kami" className="infoImageLeft" />
                    <div className='whyUsText'>
                        <h2>Kenapa Harus Pilih Kami?</h2>
                        <p>
                            Kami memastikan setiap detail dari ide kamu tercetak dengan sempurna, menggunakan teknologi terkini
                            dan tenaga ahli yang berpengalaman.
                        </p>
                    </div>
                </div>

                <div className='materialBox fade-in show'>
                    <div className='materialText'>
                        <h2>Bahan yang Kami Gunakan</h2>
                        <p>
                            Cetakan kamu bakal makin kece dengan printer <b>Bambu Lab</b> yang kami pakai hasilnya mulus banget dan detailnya juara! Kalau butuh yang lebih kuat dan detail, tenang aja, ada printer <b>Resin Premium</b> yang siap bikin hasil cetakmu makin wow!
                        </p>
                    </div>
                    <img src={infoImage2} alt="Bahan" className="materialImage" />
                </div>
            </div>

            <div className='testimoniSection'>
                <h2>Apa Kata Mereka?</h2>
                <div className='testimoniList'>

                    <div className='testimoniCard'>
                        <img src={fotoDimas} alt="Dimas" className='testimoniAvatar' />
                        <p>"Hasil cetaknya halus banget, kayak hati yang baru disembuhkan mantan"</p>
                        <span>- Dhimas, Klaten</span>
                    </div>

                    <div className='testimoniCard'>
                        <img src={fotoZainal} alt="Zainal" className='testimoniAvatar' />
                        <p>"Gue kirim desain, eh hasil cetaknya mulus banget! Detailnya tajam, gak nyangka bisa sebagus itu. Keren sih!"</p>
                        <span>- Zainal, Kalimantan</span>
                    </div>

                    <div className='testimoniCard'>
                        <img src={fotoJessica} alt="Jessica" className='testimoniAvatar' />
                        <p>"Awalnya coba iseng, eh hasil cetakannya halus banget! Detailnya dapet, kayak bukan hasil print. Puas banget!"</p>
                        <span>- Jessica, Jateng</span>
                    </div>

                    <div className='testimoniCard'>
                        <img src={fotoDuta} alt="Duta" className='testimoniAvatar' />
                        <p>"Niatnya buat pajangan doang, tapi pas barang nyampe malah jadi pengen cetak lagi. Cakep banget hasilnya!"</p>
                        <span>- Duta, Gunung Kidul</span>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Home;
