import React from 'react'

class MailMe extends React.Component {
  render () {
    return <a href={'mailto:hello@leopitt.co.uk'} title={'Send me an email.'}>
      hello@leopitt.co.uk
    </a>
  }
}

export default MailMe
