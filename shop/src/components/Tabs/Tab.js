import React, { useState, useEffect } from 'react'
import styles from './Tab.modules.scss'

const Tab = ({ title, children }) => {
  return <div role='tabpanel' id={title} aria-labelledby={title} className={styles['tab-container']}>{children}
  </div>
}

export default Tab
