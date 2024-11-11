/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react'
import { ListHeader } from './ListHeader'
import { ListItem } from './ListItem'
import { ListWarningRow } from './ListWarningRow'

const listContainer = css`
  display: grid;
  grid-template-columns: 20% 80%;
  padding-left: 1rem;
  padding-right: 1rem;
`

export const ListContainer: React.FC = () => {
  return (
    <div css={listContainer}>
      <ListHeader />
      <ListWarningRow />
      <ListItem />
      <ListWarningRow />
      <ListItem />
      <ListWarningRow />
      <ListItem />
    </div>
  )
}
