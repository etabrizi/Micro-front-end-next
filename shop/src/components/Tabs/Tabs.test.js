import * as React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Tabs } from 'components/Tabs'
import Tab from 'components/Tabs/Tab'

afterEach(cleanup)

const TabsComponent = () => {
  return (
    <Tabs>
      <Tab title='Test tab title 1'>
        <p>Test tab content 1</p>
      </Tab>
      <Tab title='Test tab title 2'>
        <p>Test tab content 2</p>
      </Tab>
    </Tabs>
  )
}

describe('Tabs component', () => {
  it('renders without crashing', () => {
    const { asFragment } = render(<TabsComponent />)
    expect(asFragment()).toMatchSnapshot()
  })
})

it('has two tabable items', () => {
  const { getAllByRole } = render(<TabsComponent />)
  const list = getAllByRole('tab')
  expect(list).toHaveLength(2)
})

it('has a title', () => {
  const { getByText } = render(<TabsComponent />)
  expect(getByText('Test tab title 1')).toBeInTheDocument()
})

it("sets the tab active, after it's been clicked", () => {
  const { container } = render(<TabsComponent />)
  const listItem = container.querySelector('.tab-list-item:last-child')
  const button = container.querySelector('.tab-list-item:last-child button')
  fireEvent.click(button)
  expect(listItem).toHaveClass('active')
})
