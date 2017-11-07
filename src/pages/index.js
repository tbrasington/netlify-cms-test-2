import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet';

export default class IndexPage extends React.Component {
  componentDidMount() {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on('init', user => {
        if (!user) {
          window.netlifyIdentity.on('login', () => {
            document.location.href = '/admin/';
          });
        }
      });
    }
  }


  render() { 
    return (<div>
      <Helmet>
      <script async src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
    </Helmet>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
    </div>)
   } 
};
