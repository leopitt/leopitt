import React from 'react'
import PropTypes from 'prop-types'
import ExternalLink from '../ExternalLink/ExternalLink'

class AgencyLink extends React.Component {
  constructor (props) {
    super(props)
    this.agencies = {
      aerian: {
        url: 'https://www.aerian.com/',
        name: 'Aerian Studios'
      },
      halo: {
        url: 'https://halostudio.love/',
        name: 'Halo'
      },
      cti: {
        url: 'https://www.ctidigital.com/',
        name: 'CTI Digital'
      },
      collective: {
        url: 'https://www.collectiveworld.com/',
        name: 'Collective London'
      },
      netefficiency: {
        url: 'https://www.netefficiency.co.uk/',
        name: 'Net Efficiency'
      },
      microserve: {
        url: 'https://www.investisdigital.com/company/contact/bristol',
        name: 'Investis Digital (formerly Microserve)'
      },
      nudge: {
        url: 'https://www.nudgedigital.co.uk/',
        name: 'Nudge Digital'
      },
      plume: {
        url: 'https://plume.co.uk/',
        name: 'Plume'
      },
      motherlode: {
        url: 'https://motherlodemedia.com/',
        name: 'Motherlode Media'
      },
      fiora: {
        url: 'https://www.fiora.agency/',
        name: 'Fiora'
      },
      gibe: {
        url: 'https://gibe.digital/',
        name: 'Gibe Digital'
      },
      sift: {
        url: 'https://www.sift.co.uk/',
        name: 'Sift'
      },
      proctors: {
        url: 'https://www.proctors.co.uk/',
        name: 'Proctor & Stevenson'
      },
      numiko: {
        url: 'https://numiko.com/',
        name: 'Numiko'
      },
      fullfatthings: {
        url: 'https://www.fullfatthings.com/',
        name: 'Full Fat Things'
      },
      adaptive: {
        url: 'https://www.adaptive.co.uk/',
        name: 'Adaptive Web'
      }
    }
  }

  render () {
    if (this.agencies[this.props.id] !== undefined) {
      const name = this.agencies[this.props.id].name
      const linkUrl = this.agencies[this.props.id].url

      return <ExternalLink href={linkUrl}>
        {name}
      </ExternalLink>
    }
  }
}

AgencyLink.propTypes = {
  id: PropTypes.string
}

export default AgencyLink
