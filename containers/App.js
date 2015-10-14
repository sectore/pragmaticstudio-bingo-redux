import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  PageHeader
  , EntryList
  , EntryForm
  , PageFooter
} from '../components';
import * as Actions from '../actions/';

@connect(
  (state) => state,
  (dispatch) => bindActionCreators(Actions, dispatch)
)
export default class App extends Component {
  render() {
    return (
      <div id="container">
        <PageHeader title='Bingo!' />
        <EntryForm {...this.props} />
        <EntryList {...this.props} />
        <PageFooter />
      </div>
    );
  }
}
