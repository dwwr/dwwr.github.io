/** @jsxImportSource @emotion/react  */

import { css } from '@emotion/react'

interface TimerLabelProps {
  japaneseText: string
  englishText: string
  showIndicator?: boolean
  small?: boolean
}

const orangeYellow = 'rgb(246, 183, 48)'

const labelContainer = css`
  display: flex;
  justify-content: space-between;
  border: 1px solid ${orangeYellow};
  border-radius: 2px;
  z-index: 1;
  height: fit-content;
  margin-bottom: 1rem;
`

const label = css`
  display: flex;
  flex-direction: column;
  align-items: start;
  color: ${orangeYellow};
  font-family: 'Helvetica';
  text-transform: uppercase;
  font-size: 22px;
  letter-spacing: -0.05rem;
  z-index: 0;
  text-wrap: nowrap;
  line-height: 1;
`

const kanjiText = css`
  display: flex;
  width: fit-content;
  color: ${orangeYellow};
  border-radius: 10px;
  font-size: 60px;
  font-family: 'Eva-Matisse_Classic', sans-serif;
  z-index: 0;
  word-spacing: 0.1rem;
  letter-spacing: -0.25rem;
  line-height: 1.2;
  /* text-wrap: nowrap; */
`

const labelText = css`
  color: ${orangeYellow};
  font-family: 'Helvetica';
  text-transform: uppercase;
  font-size: 32px;
  text-wrap: nowrap;
  align-self: flex-end;
  /* margin-left: 1rem; */
  letter-spacing: 0rem;
  z-index: 3;
`

const kanjiTextLarge = css`
  ${kanjiText};
  font-size: 80px;
`

const indicator = css`
  background-color: red;
  width: 50px;
  z-index: 100;
`

const squished = css`
  transform: scaleX(0.66);
  transform-origin: bottom left;
  line-height: 1;
`

export const TimerLabel = ({
  japaneseText,
  englishText,
  showIndicator,
  small
}: TimerLabelProps) => {
  return (
    <div css={labelContainer}>
      <div css={label}>
        <div css={small ? kanjiText : kanjiTextLarge}>{japaneseText}</div>
        <div
          css={labelText}
          style={
            small
              ? {}
              : {
                  marginLeft: '0.5rem',
                  transform: 'scaleX(0.9)',
                  transformOrigin: 'bottom left'
                }
          }
        >
          <span css={squished}>{englishText}</span>
        </div>
      </div>
      {showIndicator && <div css={indicator} />}
    </div>
  )
}
