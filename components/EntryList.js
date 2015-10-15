import React, { Component, PropTypes } from 'react';
import EntryItem from './EntryItem';

export default class EntryList extends Component {

  static propTypes = {
    entries: PropTypes.array.isRequired,
    sort: PropTypes.func.isRequired,
    del: PropTypes.func.isRequired,
    mark: PropTypes.func.isRequired
  };

  totalPoints(entries){
    return entries.reduce((points, entry) => !!entry.wasSpoken
      ? points + entry.points
      : points,
      0
    );
  }

  render() {
    const {entries, sort, del, mark} = this.props;

    return (
      <div>
        <ul>
            {entries.map(entryItem =>
              <EntryItem key={entryItem.id} entry={entryItem}
                del={del} mark={mark} />
            )}
            <li className='total'>
              <span className="label">Total</span>
              <span className="points">{this.totalPoints(entries)}</span>
            </li>
        </ul>
        <button
          className='sort'
          onClick={sort}>
          Sort
        </button>
      </div>
    );
  }
}
