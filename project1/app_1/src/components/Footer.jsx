import {Mountain, Mail, Phone, MapPin } from 'lucide-react';
import React from 'react';
// import './Footer.css';

function Footer({ onNavigate }) {
  return (
    <footer>
      <button onClick={() => onNavigate('home')}>Go Home</button>
      <button onClick={() => onNavigate('about')}>About</button>
    </footer>
  );
}


export default Footer;