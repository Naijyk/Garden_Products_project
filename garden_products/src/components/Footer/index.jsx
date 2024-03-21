import React from 'react';
import s from './index.module.css';
import instIcon from './media/Instagram.png';
import whatsAppIcon from './media/WhatsApp.png';

export default function Footer() {
  return (
    <div className={s.footer}>
      <h1>Contact</h1>
      <div>
        <div className={s.footer_card}>
          <p>Phone</p>
          <p>+49 999 999 99 99</p>
        </div>
        <div className={s.footer_card}>
          <p>Socials</p>
          <a href="#"><img src={instIcon} alt="instIcon" /></a>
          <a href="#"><img src={whatsAppIcon} alt="whatsAppIcon" /></a>
        </div>
        <div className={s.footer_card}>
          <p>Address</p>
          <p>Linkstraße 2, 8 OG, 10 785, Berlin, Deutschland</p>
        </div>
        <div className={s.footer_card}>
          <p>Working Hours</p>
          <p>24 hours a day</p>
        </div>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.409740997869!2d13.370224489611461!3d52.507923500011685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851cbdeaf3909%3A0x6a061918b5f3ff91!2zTGlua3N0cmHDn2UgMi84IE9HLCAxMCwgMTA3ODUgQmVybGluLCDQk9C10YDQvNCw0L3QuNGP!5e0!3m2!1sru!2sby!4v1711012958392!5m2!1sru!2sby"></iframe>
    </div>
  )
}
