import React from 'react'
import {Link} from 'react-router-dom'
function Bilgiler({form}) {
    return (
        <div>
            <h3>İsim Soyisim:{form.isim}</h3>
            <p>Şehir:{form.sehir}</p>
            <p>Doğum Tarihi:{form.dogum}</p>
            <p>Sevdiği Renk:{form.renk}</p>
            <p>Adres:{form.adres}</p>
            <Link to="/"><button>Geri Dön</button></Link>
        </div>
    )
}

export default Bilgiler
