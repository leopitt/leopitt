// React and 3rd party packages.
import React from 'react'
import { Helmet } from 'react-helmet'

// Components.
import ContentRow from './components/ContentRow/ContentRow'
import ExternalLink from './components/ExternalLink/ExternalLink'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import ProfileImage from './components/ProfileImage/ProfileImage'
import Row from './components/Row/Row'
import Section from './components/Section/Section'
import TestimonialRow from './components/TestimonialRow/TestimonialRow'
import Title from './components/Title/Title'
import TitleRow from './components/TitleRow/TitleRow'
import MailMe from './components/MailMe/MailMe'

// Styles.
import './base/base.css'
import './layout/columns.css'
import './layout/container.css'
import './layout/grid.css'
import './layout/section.css'
import './settings/color.css'
import './settings/spacing.css'
import './theme/spacing.css'
import './theme/typography.css'

function App () {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Leo Pitt - Curriculum Vitae</title>
        <meta name="description" content={'Curriculum Vitae of Leo Pitt. Experienced full-stack web developer with Drupal specialism, based in Bristol (UK).'}/>
      </Helmet>

      <div className="l-container">
        <Header
            title1={'Leo Pitt'}
            title2={'Curriculum Vitae'}
        />

        <div className="l-columns">
          <Section>
            <Row>
              <ProfileImage />
              <div className="l-grid-item--second">
                <dl className="l-grid l-grid--secondary t-margin-bottom-2">
                  <dt className="t-heading-5">Tel</dt>
                  <dd>07712 622 397</dd>

                  <dt className="t-heading-5">Email</dt>
                  <dd><MailMe /></dd>

                  <dt className="t-heading-5">Web</dt>
                  <dd><ExternalLink href={'https://leopitt.co.uk'}>leopitt.co.uk</ExternalLink></dd>

                  <dt className="t-heading-5">LinkedIn</dt>
                  <dd><ExternalLink href="https://www.linkedin.com/in/leo-pitt/" >linkedin.com/in/leo-pitt</ExternalLink></dd>

                  <dt className="t-heading-5">Github</dt>
                  <dd><ExternalLink href="https://github.com/leopitt">github.com/leopitt</ExternalLink></dd>

                  <dt className="t-heading-5">Drupal</dt>
                  <dd><ExternalLink href="https://www.drupal.org/u/leo-pitt">drupal.org/u/leo-pitt</ExternalLink></dd>
                </dl>

                <h2 className="t-heading-3 t-uppercase">In a nutshell</h2>

                <p>Experienced web developer with Drupal (Acquia accredited) specialism, working professionally since 2001 for varied direct clients and agencies.</p>
              </div>
            </Row>
          </Section>

          <Section>
            <TitleRow>Skills</TitleRow>

            <ContentRow
                label={'Front-end, HTML and CSS'}
                content={<p>Browser testing, responsiveness, custom grid frameworks, Bootstrap, Tailwind, etc.</p>}
            />

            <ContentRow
                label={'Drupal'}
                content={<p><ExternalLink href={'https://certification.acquia.com/user/7651'}>Acquia Accredited developer</ExternalLink>. Intensive user of Drupal since 2009. Experienced across Drupal
                  6, 7, 8, 9+. “Headless” Drupal experience.</p>}
            />

            <ContentRow
                label={'Wordpress'}
                content={<p>Since 2016. Configuration, theming and maintenance. ACF, Woocommerce, Gravity Forms.</p>}
            />

            <ContentRow
                label={'PHP & MySQL'}
                content={<p>Experienced OOP coder.</p>}
            />

            <ContentRow
                label={'Workflow'}
                content={<p>Working solo or as part of a team; providing and acting upon code reviews, Jenkins,
                  etc.</p>}
            />

            <ContentRow
                label={'Task-runners'}
                content={<p>Gulp, Bower, Webpack.</p>}
            />

            <ContentRow
                label={'JS'}
                content={<p>Native JS, jQuery. Basic Vue.js and React.</p>}
            />

            <ContentRow
                label={'Other'}
                content={<p>Git, LESS, SASS, Unix-like command-line, Photoshop, InDesign, node / npm usage, etc.</p>}
            />
          </Section>

          <Section>
            <TitleRow>Recent Projects and experience</TitleRow>

            <ContentRow
              label={2022}
              labelLevel={6}
              content={<>
                <h4 className="t-heading-4"><ExternalLink href="https://www.ctidigital.com/">CTI Digital</ExternalLink></h4>
                <p>Drupal 9/10 front and back-end development</p>
              </>}
            />

            <ContentRow
                label={2022}
                labelLevel={6}
                content={<>
                  <h4 className="t-heading-4"><ExternalLink href="https://ldn-collective.com/">Collective London</ExternalLink></h4>
                  <p>Drupal 8/9 back-end development</p>
                </>}
            />

            <ContentRow
                label={2021}
                labelLevel={6}
                content={<>
                  <h4 className="t-heading-4"><ExternalLink href="https://www.netefficiency.co.uk/">Net Efficiency</ExternalLink></h4>
                  <p>Drupal 8/9/10 back-end development</p>
                </>}
            />

            <ContentRow
                label={'2019, 2020, 2021'}
                labelLevel={6}
                content={<>
                  <h4 className="t-heading-4"><ExternalLink href="https://www.aerian.com/">Aerian Studios</ExternalLink></h4>
                  <p>Drupal 7, 8 and 9, front-end, back-end and headless</p>
                </>}
            />
          </Section>

          <Section>
            <TitleRow>Testimonials</TitleRow>

            <TestimonialRow
              type="Contract"
              dates="2019, 2020, 2021"
              client={<ExternalLink href='https://www.ctidigital.com/'>Aerian Studios</ExternalLink>}
              summary='Drupal 7, 8 and 9, front-end, back-end and headless'
              quote='Leo is brilliant; he’s very quick at thinking things through and coming up with solutions to problems. He is a very clear and capable coder, can comfortably create custom modules for Drupal, and work on large scale, complex integrations.'
              author='Karen Velasquez, Project Manager'
            />

            <TestimonialRow
              type='Contract'
              dates='2017, 2018, 2020'
              client={<ExternalLink href='https://www.investisdigital.com/company/contact/bristol'>Microserve</ExternalLink>}
              summary='Drupal 8, front-end development'
              quote='Easily the best of the contractors we’ve had in, smashed through the tasks we gave him and added quite a lot of extra value along the way.'
              author="Dan McNamara, Managing Director"
            />

            <TestimonialRow
              type="Contract"
              dates="2018"
              client={<ExternalLink href={'https://halostudio.love/'}>Halo</ExternalLink>}
              summary="Drupal 7 and 8, front-end development"
              quote="Leo is the best contractor we’ve ever had in my time at Halo."
              author="Alex Martin, Technical Director"
            />
          </Section>
        </div>

        <Title level={2} title1={'Experience'}/>

        <div className="l-columns">
          <Section>
            <ContentRow
                label={'2022'}
                labelLevel={6}
                content={<>
                  <h4 className="t-heading-4"><ExternalLink href={'https://numiko.com/'}>Numiko</ExternalLink></h4>
                  <p>Drupal 9 and 10 front-end development.</p>
                  <h5>Projects</h5>
                  <ul>
                    <li>Oxford University</li>
                    <li>Salix Finance</li>
                  </ul>
                </>}
            />

            <ContentRow
                label={'March - August 2022'}
                labelLevel={6}
                content={<>
                  <h4 className="t-heading-4"><ExternalLink href={'https://numiko.com/'}>CTI Digital</ExternalLink></h4>
                  <p>Drupal 8 and 9 Front-end development.</p>
                  <h5>Projects</h5>
                  <ul>
                    <li>Manchester Metropolitan University</li>
                    <li>University of West London</li>
                    <li>BASF</li>
                  </ul>
                </>}
            />

            <ContentRow
                label={'January - March 2022'}
                labelLevel={6}
                content={<>
                  <h4 className="t-heading-4"><ExternalLink href={'https://numiko.com/'}>Collective London</ExternalLink></h4>
                  <p>Drupal 8 and 9 back-end development.</p>
                  <h5>Projects</h5>
                  <ul>
                    <li>One Web</li>
                  </ul>
                </>}
            />
          </Section>
        </div>

        <Footer>
          <MailMe /><br/>
          updated: 07/10/2022
        </Footer>
      </div>
    </>
  )
}

export default App
