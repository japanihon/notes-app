import React from 'react';

export default function Footer() {

 const currentYear = new Date().getFullYear(); 

return (
    <footer>
        <p> Design By AR / {currentYear} </p>
    </footer>
)

};