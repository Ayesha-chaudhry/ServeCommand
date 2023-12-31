// app/providers.tsx
'use client'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../../theme/theme'
import '@fontsource/inter/400.css'
import '@fontsource/chivo/700.css'
import Context from './context/context'


export function Providers({ 
    children 
  }: { 
  children: React.ReactNode 
  }) {
  return (
    <Context>
    <CacheProvider>
      <ChakraProvider theme={theme}>
        {children}
      </ChakraProvider>
     </CacheProvider>
     </Context>
  )
}