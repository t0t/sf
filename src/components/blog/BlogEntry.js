import React, { Component } from 'react';

export default class BlogEntry extends Component {
  render() {
    return (
      <li className="Posts__list__item">
        {(this.props.name) ? <h3 className="Article-header">{this.props.name}</h3> : null}
        {(this.props.img1) ? <img src={this.props.img1}/> : null}
        {(this.props.desc) ? <p>{this.props.desc}</p> : null}
      </li>
    );
  }
}
