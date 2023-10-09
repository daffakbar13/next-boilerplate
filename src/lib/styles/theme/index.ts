'use client'

import { CSSObject } from '@emotion/react'
import { createTheme } from '@mui/material'
import { grey, red } from '@mui/material/colors'
import { globalStyles } from '../globalStyles'

export const theme = createTheme({
  palette: {
    primary: { main: '#0F2C59' },
    error: { main: red[900] },
    text: { primary: grey[900] },
    background: {
      default: '#f5fbff',
    },
  },
  shape: { borderRadius: 8 },
  components: {
    MuiCssBaseline: { styleOverrides: { ...(globalStyles as CSSObject) } },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: grey[100],
        },
      },
    },
  },
})
