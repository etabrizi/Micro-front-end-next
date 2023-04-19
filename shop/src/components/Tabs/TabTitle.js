import React from 'react'
import styles from './TabTitle.modules.scss'
import cx from 'classnames'

const TabTitle = ({
  title,
  setSelectedTab,
  selectedTab,
  index,
  isDisabled = false,
  isHidden,
  spaced
}) => {
  const onClick = () => {
    setSelectedTab(index)
  }

  return (
    <div
      className={cx(
        styles['tab-list-item'],
        (selectedTab === index && `${styles['active']}`) || ``,
        (isHidden && `hidden`) || ``,
        (spaced ? `${styles['tab-list-item--spaced']}` : ``)
      )}
    >
      <button
        role='tab'
        className={`${styles['tab-btn']} ${isHidden ? `hidden` : ``} ${spaced ? `${styles['tab-btn--spaced']}` : ``}`}
        disabled={isDisabled}
        onClick={onClick}
        aria-controls={title}
        aria-selected={selectedTab === index}

      >
        {title}
      </button>
    </div>
  )
}

export default TabTitle
