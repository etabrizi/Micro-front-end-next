import React, { useState, useEffect } from 'react'
import TabTitle from './TabTitle'

import styles from './Tabs.modules.scss'

/* global history */

const Tabs = ({ children, spaced }) => {
  const [selectedTab, setSelectedTab] = useState(0)

  useEffect(() => {
    if (window.location.hash.slice(1)) {
      setSelectedTab(window.location.hash.slice(1) - 1)
      history.replaceState(null, null, ' ')
    }
  }, [])

  return (
    <>
      <div className={`${styles['tabs']} ${spaced ? styles['tabs--spaced'] : ''}`} role='tablist'>
        {children.map((item, index) => (
          <TabTitle
            key={index}
            title={item.props.title}
            index={index}
            setSelectedTab={setSelectedTab}
            selectedTab={selectedTab}
            isDisabled={item.props.isDisabled}
            isHidden={item.props.isHidden}
            spaced={spaced}
          />
        ))}
      </div>
      {children[selectedTab]}
    </>
  )
}

export default Tabs
