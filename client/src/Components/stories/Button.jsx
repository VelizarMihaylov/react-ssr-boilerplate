/** @jsx jsx */
import { jsx } from '@emotion/core'
import Button from '../Button'
import { storiesOf } from '@storybook/react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/styles/hljs'

const Code = props => {
  const codeString = `
  import Button from "./butoon"

  <Button appearance='primary' text='Click Here' />
  `
  return <SyntaxHighlighter language='javascript' style={docco}>{codeString}</SyntaxHighlighter>
}

storiesOf('Buttons', module)
  .add('Button', () =>
    <div>
      <p>
        <h1>How to use it</h1>
        <Code />
      </p>
      <p>
        <h1>Base Button Syle</h1>
        <div>
          <ul css={{
            listStyle: 'none',
            '& > li': {
              marginLeft: 25,
              display: 'inline'
            }
          }}>
            <li>
              <Button text='Default' />
            </li>
            <li>
              <Button intent='success' text='Success' />
            </li>
            <li>
              <Button intent='danger' text='Danger' />
            </li>
          </ul>
        </div>
      </p>
      <p>
        <h1>Primary Button Style</h1>
        <div>
          <ul css={{
            listStyle: 'none',
            '& > li': {
              marginLeft: 25,
              display: 'inline'
            }
          }}>
            <li>
              <Button appearance='primary' text='Default' />
            </li>
            <li>
              <Button appearance='primary' intent='success' text='Success' />
            </li>
            <li>
              <Button appearance='primary' intent='danger' text='Danger' />
            </li>
          </ul>
        </div>
      </p>
    </div>
  )
