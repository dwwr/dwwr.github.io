/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react'
import { ListHeader } from './ListHeader'
import { ListItem, ListItemProps } from './ListItem'
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
          <ListItem {...item} />
        </>
      ))}
    </div>
  )
}

interface ListContainerProps {
  items: ListItemProps[]
}
