import React from 'react'

import styles from './Navigation.module.scss'

const Navigation = ({active}) => {
  return (
    <ul className={styles['nav']}>
        <li><a className={active === 'shop' ? styles['nav--active'] : ''} href="/shop">SHOP</a></li>
        <li><a className={active === 'auth' ? styles['nav--active'] : ''} href="/auth">AUTH</a></li>
      </ul>
  )
}

export default Navigation
