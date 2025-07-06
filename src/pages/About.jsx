import React from 'react'
import D3images from "../assets/3Dimage.svg"
import "../styles/About.css"

function About() {
    return (
        <div className='about'>
            <div className='aboutTop'
                style={{ backgroundImage: `url(${D3images})` }}
            ></div>
            <div className='aboutBottom'>
                <h1>About Us</h1>
                <p>
                    Shiesta adalah layanan cetak 3D yang membantu mewujudkan ide kreatif Anda menjadi bentuk nyata. Kami melayani pembuatan prototipe, miniatur, suku cadang custom, dan proyek unik lainnya dengan kualitas tinggi dan harga terjangkau. Dengan dukungan tim berpengalaman dan berbagai pilihan material seperti PLA, ABS, dan resin, kami siap mencetak desain Anda secara presisi dan cepat, bahkan jika Anda belum punya pengalaman desain sekalipun.
                </p>
            </div>

            <section className="contactSection">
                <h2>Hubungi Kami</h2>
                <p>Ingin bertanya atau diskusi lebih lanjut tentang ide kamu? Kami siap bantu!</p>

                <div className="contactButtons">
                    <a href="https://wa.me/6281578975317" target="_blank" rel="noopener noreferrer">
                        <button className="whatsappBtn">WhatsApp</button>
                    </a>
                    <a href="mailto:shiesta3d@gmail.com">
                        <button className="emailBtn">Email Kami</button>
                    </a>
                </div>
            </section>

        </div>
    )
}

export default About
