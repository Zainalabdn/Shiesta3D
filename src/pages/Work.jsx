import React from 'react'
import Porto1 from "../assets/Porto1.jpg"
import Porto2 from "../assets/Porto2.jpg"
import Porto3 from "../assets/Porto3.jpg"
import Porto4 from "../assets/Porto4.jpg"
import Porto5 from "../assets/Porto5.jpg"
import Porto6 from "../assets/Porto6.jpg"
import Porto7 from "../assets/Porto7.jpg"
import Porto8 from "../assets/Porto8.jpg"
import Porto9 from "../assets/Porto9.jpg"
import Porto10 from "../assets/Porto10.jpg"
import "../styles/Work.css"

function Work() {
    return (
        <div className='work'>
            <div className='workTop'>
                <h1>Work</h1>
                <p>
                    Lihat berbagai hasil cetakan 3D yang sudah kami kerjakan! Dari miniatur detail, prototipe fungsional, hingga proyek custom unik, semuanya dikerjakan dengan presisi menggunakan printer Bambu Lab dan material berkualitas. Kami bangga bisa membantu banyak kreator dan pelaku usaha mewujudkan ide mereka ke bentuk nyata.
                </p>
            </div>
            <div className='workBottom'>
                <img src={Porto1} alt='Porto1' className='workImage' />
                <img src={Porto2} alt='Porto2' className='workImage' />
                <img src={Porto3} alt='Porto3' className='workImage' />
                <img src={Porto4} alt='Porto4' className='workImage' />
                <img src={Porto5} alt='Porto1' className='workImage' />
                <img src={Porto6} alt='Porto2' className='workImage' />
                <img src={Porto7} alt='Porto3' className='workImage' />
                <img src={Porto8} alt='Porto4' className='workImage' />
                <img src={Porto9} alt='Porto3' className='workImage' />
                <img src={Porto10} alt='Porto4' className='workImage' />
            </div>
        </div>
    )
}

export default Work
