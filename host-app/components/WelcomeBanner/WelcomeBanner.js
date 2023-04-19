import React from 'react'

import styles from './WelcomeBanner.module.scss'

const WelcomeBanner = ({ title, intro, children }) => {
  return (
    <section className={styles['welcome-banner']}>
      <div className={styles['welcome-banner__container']}>
        <h1 className={styles['welcome-banner__title']}>{title}</h1>
        <p className={styles['welcome-banner__intro']}>{intro}</p>
        <div className={styles['welcome-banner__content']}>{children}</div>
      </div>
    </section>
  )
}

export default WelcomeBanner
