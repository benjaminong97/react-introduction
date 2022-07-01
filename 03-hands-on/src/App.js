import React from 'react';
import './style.css'

function BorderedImageFrame(props) {
  <img src={require(props.imageFilePath)} />
}

// note that require cannot be inside the component
// or require AND the ./ is inside the component
function App() {
  return(
    <React.Fragment>
    // create component
    <BorderedImageFrame/>
    </React.Fragment>
  )
}

export default App;