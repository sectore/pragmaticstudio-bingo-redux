import React, { Component, PropTypes } from 'react';
import trimright from 'lodash.trimright';
import repeat from 'lodash.repeat';

export default class PageHeader extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired
  };

  title(message, times){
    return trimright(
      repeat(
        message.toUpperCase() + ' ',
        3
      )
    )
  }

  render() {
    return (
      <h1>{this.title(this.props.title)}</h1>
    );
  }
}
