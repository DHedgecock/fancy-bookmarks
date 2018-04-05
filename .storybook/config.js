import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { ThemeProvider } from 'styled-components'

import theme from '../app/theme'

// Use storybook global decorator to provide theme context in all stories
const StylesTheme = storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
)
addDecorator(StylesTheme)

// Load stories
// 😍 It should be possible to use webpack require.context to find all `.story.js`
// stories recursively and then load that list here without typing them all out.
function loadStories () {
  require('../app/components/universal/Title/Title.story.js')
}

configure(loadStories, module)
