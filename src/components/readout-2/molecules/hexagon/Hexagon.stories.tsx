/** @jsxImportSource @emotion/react */
import { Meta, StoryFn } from '@storybook/react'
import Hexagon, { HexagonProps } from './Hexagon'
import { containerStyle, mainStyle } from '../../styles'

export default {
  title: 'Components/Hexagon',
  component: Hexagon,
  argTypes: {
    isOn: { control: 'boolean' },
    outlineOffHexagons: { control: 'boolean' }
  }
} as Meta

const Template: StoryFn<HexagonProps> = ({ isOn, outlineOffHexagons, text }) => (
  <div
    css={mainStyle}
    style={{
      width: '130px',
      height: '90px',
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'start',
      justifyContent: 'start',
      marginLeft: '-1.75rem'
    }}
  >
    <div css={containerStyle}>
      <Hexagon isOn={isOn} outlineOffHexagons={outlineOffHexagons} text={text} />
    </div>
  </div>
)

export const On = Template.bind({})
On.args = {
  isOn: true,
  outlineOffHexagons: false,
  text: 'Emergency'
}

export const OffWithOutline = Template.bind({})
OffWithOutline.args = {
  isOn: false,
  outlineOffHexagons: true,
  text: 'Emergency'
}

export const OffWithoutOutline = Template.bind({})
OffWithoutOutline.args = {
  isOn: false,
  outlineOffHexagons: false,
  text: 'Emergency'
}
