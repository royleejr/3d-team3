import React from 'react';

import './Homepage.scss';


class Homepage extends React.Component {
  render() {
    return (
      <>
      <iframe 
        title="random"
        className="random"
        src={"https://public.tableau.com/views/test_15659703797050/Sheet1?:showVizHome=no:embed=true"}/>
        <p>Helvetica</p>
      </>
    )
  }
}

export default Homepage;