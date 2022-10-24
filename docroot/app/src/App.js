// React and 3rd party packages.
import React from 'react'
import Helmet from 'react-helmet'
import Experience from './sheets/Experience'
import Footer from './components/Footer/Footer'
import Front from './sheets/Front'
import Header from './components/Header/Header'
import MailMe from './components/MailMe/MailMe'
import './css/styles.css'

function App () {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8"/>
        <title>Leo Pitt - Curriculum Vitae</title>
        <meta name="description" content={'Curriculum Vitae of Leo Pitt. Experienced full-stack web developer with Drupal specialism, based in Bristol (UK).'}/>
        <link rel="canonical" href="https://www.leopitt.co.uk/"/>
      </Helmet>

      <div className="l-container">
        <Header
            title1={'Leo Pitt'}
            title2={'Curriculum Vitae'}
        />

        <Front/>
        <Experience/>

        <Footer>
          <MailMe/><br/>
          updated: 24/10/2022
        </Footer>
      </div>
    </>
  )
}

export default App
