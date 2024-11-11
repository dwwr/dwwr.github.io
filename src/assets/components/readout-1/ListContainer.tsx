/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react'
import { ListHeader } from './ListHeader'
import { Readout1ListItemProps, Readout1ListItem } from './Readout1ListItem'
import { ListWarningRow } from './ListWarningRow'

const listContainer = css`
  display: grid;
  grid-template-columns: 10% 90%;
  padding-left: 1rem;
  padding-right: 1rem;
`

export const ListContainer: React.FC<ListContainerProps> = ({ items }) => {
  return (
    <div css={listContainer}>
      <ListHeader />
      {items.map((item) => (
        <>
          <ListWarningRow />
          <Readout1ListItem {...item} />
        </>
      ))}
    </div>
  )
}

interface ListContainerProps {
  items: Readout1ListItemProps[]
}
