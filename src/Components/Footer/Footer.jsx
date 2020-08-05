import React from 'react'
import './Footer.css'

const Footer = () => {

    const bio = {
        nis: "DW17ZSAX6",
        nama: "Muhammad Fachri Zain"
    };

    return(
        <div className="footer">
            <p>Copyright @ 2020 Dewe Tour - {bio.nama} - {bio.nis}. All Rights reserved</p>
        </div>
    )
}
export default Footer