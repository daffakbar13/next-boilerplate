import { MuiProvider, ReactQueryProvider } from '@poslive/core/providers'
import Box from '@mui/material/Box'
import { MainLayoutProps } from './types'

const MainLayout: React.FC<MainLayoutProps> = (props) => {
  const { children } = props
  return (
    <html lang="en">
      <body>
        <MuiProvider>
          <ReactQueryProvider>
            <Box component="main">{children}</Box>
          </ReactQueryProvider>
        </MuiProvider>
      </body>
    </html>
  )
}

export default MainLayout
