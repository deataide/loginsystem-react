import React from 'react'
import Style from './styles/global'

import Routes from './routes'
import {AuthProvider} from './context/auth'

function App() {
  return (
 <AuthProvider>

<Routes/>
 <Style/>
 
 </AuthProvider>

  );
}

export default App;
