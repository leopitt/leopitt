// React and 3rd party packages.
import React from 'react'
import { Helmet } from 'react-helmet'

// Components.
import ContentRow from './components/ContentRow/ContentRow'
import Footer from './components/Footer/Footer'
import ProfileImage from './components/ProfileImage/ProfileImage'
import Row from './components/Row/Row'
import Section from './components/Section/Section'
import TestimonialRow from './components/TestimonialRow/TestimonialRow'
import Title from './components/Title/Title'
import TitleRow from './components/TitleRow/TitleRow'

// Styles.
import './base/base.css'
import './layout/columns.css'
import './layout/container.css'
import './layout/grid.css'
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
        <div className="l-columns">
          <Section element={'header'}>
            <Row>
              <Title level="1" type="primary">Leo Pitt</Title>
              <Title level="2">Curriculum Vitae</Title>
            </Row>
          </Section>
        </div>

        <div className="l-columns">
          <Section>
            <Row>
              <ProfileImage />
              <div className="l-grid-item-second">
                <dl className="l-grid l-grid--secondary t-margin-bottom-2">
                  <dt className="t-heading-5">Tel</dt>
                  <dd>07712 622 397</dd>

                  <dt className="t-heading-5">Email</dt>
                  <dd><a href="mailto:leopitt@function-design.co.uk" title={'Send me an email'}>hello@leopitt.co.uk</a></dd>

                  <dt className="t-heading-5">Web</dt>
                  <dd><a href="https://leopitt.co.uk" title={'Visit my website (this one)'}>leopitt.co.uk</a></dd>

                  <dt className="t-heading-5">LinkedIn</dt>
                  <dd><a href="https://www.linkedin.com/in/leo-pitt/" title={'View my LinkedIn profile'}>linkedin.com/in/leo-pitt</a></dd>

                  <dt className="t-heading-5">Github</dt>
                  <dd><a href="https://github.com/leopitt" title={'Visit my github.com profile'}>github.com/leopitt</a></dd>

                  <dt className="t-heading-5">Drupal</dt>
                  <dd><a href="https://www.drupal.org/u/leo-pitt" title={'Visit my Drupal.org profile'}>drupal.org/u/leo-pitt</a></dd>
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
                content={<p><a href={'https://certification.acquia.com/user/7651'} title={'View my Acquia certifications'}>Acquia Accredited developer</a>. Intensive user of Drupal since 2009. Experienced across Drupal
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
                <p className="t-heading-4"><a href="https://www.ctidigital.com/" title={'Visit ctidigital.com'}>CTI Digital</a></p>
                <p>Drupal 9/10 front and back-end development</p>
              </>}
            />

            <ContentRow
                label={2022}
                labelLevel={6}
                content={<>
                  <p className="t-heading-4"><a href="https://ldn-collective.com/" title={'Visit ldn-collective.com'}>Collective London</a></p>
                  <p>Drupal 8/9 back-end development</p>
                </>}
            />

            <ContentRow
                label={2021}
                labelLevel={6}
                content={<>
                  <p className="t-heading-4"><a href="https://www.netefficiency.co.uk/" title={'Visit netefficiency.co.uk'}>Net Efficiency</a></p>
                  <p>Drupal 8/9/10 back-end development</p>
                </>}
            />

            <ContentRow
                label={'2019, 2020, 2021'}
                labelLevel={6}
                content={<>
                  <p className="t-heading-4"><a href="https://www.aerian.com/" title={'Visit aerian.com'}>Aerian Studios</a></p>
                  <p>Drupal 7, 8 and 9, front-end, back-end and headless</p>
                </>}
            />
          </Section>

          <Section>
            <TitleRow>Testimonials</TitleRow>

            <TestimonialRow
              type="Contract"
              dates="2019, 2020, 2021"
              client={<a href='https://www.ctidigital.com/' title='Visit aerian.com'>Aerian Studios</a>}
              summary='Drupal 7, 8 and 9, front-end, back-end and headless'
              quote='Leo is brilliant; he’s very quick at thinking things through and coming up with solutions to problems. He is a very clear and capable coder, can comfortably create custom modules for Drupal, and work on large scale, complex integrations.'
              author='Karen Velasquez, Project Manager'
            />

            <TestimonialRow
              type='Contract'
              dates='2017, 2018, 2020'
              client={<a href='https://www.investisdigital.com/company/contact/bristol' title={'Investis Digital (formerly Microserve)'}>Microserve</a>}
              summary='Drupal 8, front-end development'
              quote='Easily the best of the contractors we’ve had in, smashed through the tasks we gave him and added quite a lot of extra value along the way.'
              author="Dan McNamara, Managing Director"
            />

            <TestimonialRow
              type="Contract"
              dates="2018"
              client={<a href={'https://halostudio.love/'} title={'Visit halostudio.love'}>Halo</a>}
              summary="Drupal 7 and 8, front-end development"
              quote="Leo is the best contractor we’ve ever had in my time at Halo."
              author="Alex Martin, Technical Director"
            />
          </Section>
        </div>

        <Footer>
          <a href={'mailto:hello@leopitt.co.uk'} title={'Send me an email'}>hello@leopitt.co.uk</a><br/>
          updated: 07/10/2022
        </Footer>
      </div>
    </>
  )
}

export default App
