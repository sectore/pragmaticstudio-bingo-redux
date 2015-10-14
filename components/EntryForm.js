import React, { Component, PropTypes } from 'react';
import EntryItem from './EntryItem';
import {autobind} from 'core-decorators';

export default class EntryForm extends Component {

  static propTypes = {
    phraseInput: PropTypes.string.isRequired,
    pointsInput: PropTypes.string.isRequired,
    updatePhraseInput: PropTypes.func.isRequired,
    updatePointsInput: PropTypes.func.isRequired,
    add: PropTypes.func.isRequired,
  };

  totalPoints(entries){
    return entries.reduce((points, entry) => !!entry.wasSpoken
      ? points + entry.points
      : points,
      0
    );
  }

  @autobind
  phraseChanged(event){
    const value = event.currentTarget.value;
    this.props.updatePhraseInput(value);
  }

  @autobind
  pointsChanged(event){
    const value = event.currentTarget.value;
    this.props.updatePointsInput(value);
  }

  render() {
    const {phraseInput, pointsInput, add} = this.props;

    return (
      <div>
        <input
          type='text'
          placeholder='Phrase'
          value={phraseInput}
          autofocus='true'
          onChange={this.phraseChanged}
        />
        <input
          type='number'
          placeholder='Points'
          value={pointsInput}
          onChange={this.pointsChanged}
        />

        <button
          className='add'
          onClick={add}>
          Add
        </button>

        <h2>{phraseInput} {pointsInput}</h2>
      </div>
    );
  }
}
