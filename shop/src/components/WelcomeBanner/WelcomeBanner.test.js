import * as React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import { WelcomeBanner } from '.'

const BaseProps = {
  title: 'Title',
  intro: 'Intro copy',
  children: 'Children content'
}

afterEach(cleanup)

describe('Welcome banner', () => {
  it('renders without crashing', () => {
    const { asFragment } = render(<WelcomeBanner {...BaseProps} />)
    expect(asFragment()).toMatchSnapshot()
  })
  it('has a title', () => {
    const { getByText } = render(<WelcomeBanner {...BaseProps} />)
    expect(getByText('Title')).toBeInTheDocument()
  })
  it('has an intro', () => {
    const { getByText } = render(<WelcomeBanner {...BaseProps} />)
    expect(getByText('Intro copy')).toBeInTheDocument()
  })
  it('has some child content', () => {
    const { getByText } = render(<WelcomeBanner {...BaseProps} />)
    expect(getByText('Children content')).toBeInTheDocument()
  })
})
