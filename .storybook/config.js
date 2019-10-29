import { configure, addDecorator } from '@storybook/react'


function loadStories() {
  require('../client/src/Components/stories/Button.jsx')
  // You can require as many stories as you need.
}

configure(loadStories, module);