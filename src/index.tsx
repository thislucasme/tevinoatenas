import { ChakraProvider, ColorModeScript } from "@chakra-ui/react"
import { MantineProvider } from "@mantine/core"
import { NotificationsProvider } from '@mantine/notifications'
import * as React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { RouteComponets } from '../src/componentes/RouteComponets'

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript />
    <BrowserRouter>
      <MantineProvider>
        <NotificationsProvider>
          <ChakraProvider>
            <RouteComponets />
          </ChakraProvider>
        </NotificationsProvider>
      </MantineProvider>
    </BrowserRouter >
  </React.StrictMode >,
  document.getElementById("root"),
)