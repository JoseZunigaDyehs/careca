import React from 'react'
import ReactDOM from 'react-dom'
import moment from 'moment-timezone'
import { ConfigProvider } from 'antd'
import esES from 'antd/lib/locale-provider/es_ES'
import 'moment/locale/es'
import { AuthProvider, ThemeProvider } from './context'
import App from './App'
moment.locale(`es`)
moment.tz.setDefault(`America/Santiago`)

ReactDOM.render(
  <AuthProvider>
    <ThemeProvider>
      <ConfigProvider locale={esES}>
        <App />
      </ConfigProvider>
    </ThemeProvider>
  </AuthProvider>,
  document.getElementById(`root`),
)
