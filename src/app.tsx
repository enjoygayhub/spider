import React from 'react'

function App() {
  console.log('env:',NODE_ENV);
  return <h2>{`webpack5-react-ts${NODE_ENV}`}</h2>
}
export default App