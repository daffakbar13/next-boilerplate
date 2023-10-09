/* eslint-disable lines-around-directive */
/* eslint-disable import/no-extraneous-dependencies */
'use client'

import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import { usePageHomeStore } from '../../hooks'

const SectionKedua: React.FC = (props) => {
  const {} = props
  const { constant } = usePageHomeStore()

  return (
    <Stack id={constant.KEDUA} component="section" spacing={4}>
      <Typography variant="h4" fontWeight="bold" textAlign="center">
        {constant.KEDUA}
      </Typography>
    </Stack>
  )
}

export default SectionKedua
