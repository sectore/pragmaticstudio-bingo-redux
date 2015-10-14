import React, { Component } from 'react';

export default class PageFooter extends Component {

  render() {
    return (
      <footer>
        <p><a href="https://pragmaticstudio.com/elm">Bingo example</a> ported from <a href="http://elm-lang.org">Elm</a> to <a href="http://rackt.github.io/redux/">Redux</a> by <a href="http://websector.de">Jens Krause</a>.</p>
        <p>Original version written by <a href="https://pragmaticstudio.com">"The Pragmatic Studio"</a></p>
      </footer>
    );
  }

}
