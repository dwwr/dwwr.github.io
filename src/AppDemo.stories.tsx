/** @jsxImportSource react */
import Zdog from 'zdog'
import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import App from './App'
import { contents, SIDE_LENGTH } from './content/contents'
import { CubeScene } from './scenes/CubeScene'
import './storybook.css'
import { Readout1 } from './components/readout-1/Readout1'
import { Readout2 } from './components/readout-2/Readout2'
import { Readout3 } from './components/readout-3/Readout3'
import { Default as ColumnGroupDefault } from './components/readout-3/molecules/chart/ColumnGroup.stories'
import { Default as DataLabelDefault } from './components/readout-4/molecules/data-label/DataLabel.stories'
import { Readout4 } from './components/readout-4/Readout4'

export default {
  title: 'Components/App Demo',
  component: App,
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {}
} as Meta

const Template: StoryFn<{}> = () => (
  <WaitForFonts>
    <div className="app-demo-container">
      <div style={{ height: '500px', width: '75%' }}>
        <CubeScene contents={contents} sideLength={SIDE_LENGTH} />
      </div>
      <div>
        <Readout1 {...readout1Args} />
      </div>
      <div style={{ height: '600px' }}>
        <Readout2 {...readout2Args} />
      </div>
      <div style={{ height: '600px' }}>
        <Readout3 />
      </div>
      <div
        style={{
          height: '100%',
          marginTop: '0px',
          marginBottom: '0px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <ColumnGroupDefault numberOfColumns={8} values={[10, 20, 30, 40, 50, 60, 70, 80]} />
        <DataLabelDefault />
      </div>
      <div style={{ height: '600px' }}>
        <Readout4 />
      </div>
    </div>
  </WaitForFonts>
)

export const Default = Template.bind({})
Default.args = {}

const readout1Args = {
  title: 'MENTAL TOXICITY LEVEL',
  kpi1Key: 'ELAPSED TIME',
  kpi1Value: '120 min.',
  kpi2Key: 'L.C.L. PURITY',
  kpi2Value: '99.9999989%',
  items: [
    { subject: 'subject', subjectNumber: '00', subjectLabel: 'FIRST.C', value: 25 },
    { subject: 'subject', subjectNumber: '01', subjectLabel: 'THIRD.C', value: 50 },
    { subject: 'subject', subjectNumber: '02', subjectLabel: 'SECOND.C', value: 85 }
  ]
}

const readout2Args = {
  text: 'Emergency',
  outlineOffHexagons: true,
  numberOfHexagons: 77
}

const WaitForFonts: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [ready, setReady] = React.useState(false)
  console.log('waiting for fonts', ready)
  React.useEffect(() => {
    Zdog.waitForFonts().then(() => setReady(true))
  }, [])

  if (!ready) return null // or a loading spinner
  return <>{children}</>
}
