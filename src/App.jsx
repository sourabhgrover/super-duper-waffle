import 'src/global.css';
import { RouterProvider } from 'react-router-dom'
import { router } from './routes';

import ThemeProvider from 'src/theme';

function App() {
  
  return <ThemeProvider><RouterProvider router={router} /></ThemeProvider>
}

export default App
