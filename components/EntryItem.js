import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import {autobind} from 'core-decorators';

export default class EntryItem extends Component {

  static propTypes = {
    entry: PropTypes.object.isRequired,
    del: PropTypes.func.isRequired,
    mark: PropTypes.func.isRequired
  };

  @autobind
  deleteHandler(){
    const { entry, del } = this.props;
    del(entry.id);
  }

  @autobind
  markHandler(){
    const { entry, mark } = this.props;
    mark(entry.id);
  }

  render() {
    const { entry } = this.props;

    return (
      <li
        className={classnames({highlight: entry.wasSpoken})}
        onClick={this.markHandler}
        >
        <span className="phrase">{entry.phrase}</span>
        <span className="points">{entry.points}</span>
        <button className="delete"
          onClick={this.deleteHandler}
        ></button>
      </li>
    );
  }
}
