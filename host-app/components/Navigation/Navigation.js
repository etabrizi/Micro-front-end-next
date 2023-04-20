import React from 'react'
import Link from 'next/link'

import styles from './Navigation.module.scss'

const Navigation = ({active}) => {
  return (
    <ul className={styles['nav']}>
        <li><Link className={active === 'shop' ? styles['nav--active'] : ''} href="/shop">SHOP</Link></li>
        <li><Link className={active === 'auth' ? styles['nav--active'] : ''} href="/auth">AUTH</Link></li>
      </ul>
  )
}

export default Navigation
