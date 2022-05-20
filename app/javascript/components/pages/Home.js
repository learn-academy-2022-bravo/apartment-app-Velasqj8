import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <>
        <h1 className="homeHeader">Great Deals for Great Apartments.</h1>
        <h4 className="subHomeHeader">Find your next apartment here.</h4>
        <img src= "https://images.unsplash.com/photo-1560440021-33f9b867899d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1318" />
        <h2>About J's Apartment Finder</h2>
        <p>
          Since 2022, J's Apartment Finder had been the best resource for apartment seekers to locate their next home. We specialize in helping make the apartment search process less stressful, and easier for renters to discover great deals for great apartments. We are proud to say we are a small but trusted apartment search company.
        </p>
      </>
    )
  }
}
