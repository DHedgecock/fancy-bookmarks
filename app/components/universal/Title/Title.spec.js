import React from 'react'
import { shallow } from 'enzyme'

import Title from './Title'

test('renders', () => {
  const actual = shallow(<Title>Test</Title>)
  // Getting testing running ¯\_(ツ)_/¯
  expect(actual).toBeTruthy()
})

// Snapshots
// ---------------------------------------------------------------------------
test('renders h1', () => {
  const tree = shallow(<Title>Test</Title>)
  expect(tree).toMatchSnapshot()
})
