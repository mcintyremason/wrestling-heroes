import React from 'react';
import AthletePreview from './AthletePreview';
import athletes from '../data/athletes';
import wrestlers from '../data/wrestlers';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="athletes-selector">
          {wrestlers.map(athleteData => <AthletePreview key={athleteData.id} {...athleteData} />)}
        </div>
      </div>
    );
  }
}