import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <div className='cont'>
            <div className='div1'>

            <ul>
                <li>
                    <a href="/">NewsMonkey</a>
                </li>
            </ul>
            </div>
            <div className='div2'>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Service</a></li>
                </ul>
            </div>

        </div>
        
      </div>
    )
  }
}
