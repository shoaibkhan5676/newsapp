import React, { Component } from 'react';

function removeExtraSpaces(text) {
  return text.trim().replace(/\s+/g, ' ');
}

export class NewsItem extends Component {
  render() {
    let { title, discription, imageurl, newsURL } = this.props;
    return (
      <div>
        <div className="card my-3 h-100"  style={{ width: '18rem' }}>
          <img src={imageurl} className="card-img-top" style={{ width: '100%', height: '200px', objectFit: 'cover' }} alt="News" />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">{removeExtraSpaces(title.length > 45 ? `${title.slice(0, 42)}...` : title)}</h5>
            <p className="card-text">{discription.length > 88 ? `${discription.slice(0, 80)}...` : discription}</p>
            <a href={newsURL} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-dark mt-auto">Read More</a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
