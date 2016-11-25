import React from 'react'
import styles from '../css/Menu.css'

console.log('Menu.js -> styles', styles);

const Menu = () => (
    <ul className={ styles.menu }>
        <li><a href='#'>File</a></li>
        <li><a href='#'>Edit</a></li>
        <li><a href='#'>Help</a></li>
    </ul>
)

export default Menu
