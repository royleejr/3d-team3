import React from 'react';
import pic from '../../Assets/business-sentiments.png';
import bitmap from '../../Assets/bitmap.jpg';
import './Data.scss';


class Data extends React.Component {
  render () {
    return (
      <section className="data">
        <p className="data__title animated fadeInUp">Top 10 Most Shared Business Articles</p>
        <p className="data__description animated fadeInUp">We have had a great history of sharing amazing business articles! Look at at the graph below to see out Top 10 business articles and how often they have been shared.</p>
        <img className="data__image" src={bitmap}></img>
        <img className="data__background animated fadeIn" src={pic}></img>
      </section>
    )
  }
}

export default Data;