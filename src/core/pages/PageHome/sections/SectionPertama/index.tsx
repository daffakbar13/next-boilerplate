/* eslint-disable lines-around-directive */
/* eslint-disable import/no-extraneous-dependencies */
'use client'

import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import React from 'react'
import { usePageHomeStore } from '../../hooks'

const SectionPertama: React.FC = (props) => {
  const {} = props
  const { constant } = usePageHomeStore()

  return (
    <Stack id={constant.PERTAMA} component="section" spacing={4}>
      <Typography variant="h4" fontWeight="bold" textAlign="center">
        {constant.PERTAMA}
      </Typography>
    </Stack>
  )
}

export default SectionPertama
