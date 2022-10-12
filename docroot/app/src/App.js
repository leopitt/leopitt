// React and 3rd party packages.
import React from 'react'
import { Helmet } from 'react-helmet'

// Components.
import AgencyLink from './components/AgencyLink/AgencyLink'
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
                <h4 className="t-heading-4"><AgencyLink id={'cti'}/></h4>
                <p>Drupal 9/10 front and back-end development</p>
              </>}
            />

            <ContentRow
                label={2022}
                labelLevel={6}
                content={<>
                  <h4 className="t-heading-4"><AgencyLink id={'collective'}/></h4>
                  <p>Drupal 8/9 back-end development</p>
                </>}
            />

            <ContentRow
                label={2021}
                labelLevel={6}
                content={<>
                  <h4 className="t-heading-4"><AgencyLink id={'netefficiency'}/></h4>
                  <p>Drupal 8/9/10 back-end development</p>
                </>}
            />

            <ContentRow
                label={'2019, 2020, 2021'}
                labelLevel={6}
                content={<>
                  <h4 className="t-heading-4"><AgencyLink id={'aerian'}/></h4>
                  <p>Drupal 7, 8 and 9, front-end, back-end and headless</p>
                </>}
            />
          </Section>

          <Section>
            <TitleRow>Testimonials</TitleRow>

            <TestimonialRow
              type="Contract"
              dates="2019, 2020, 2021"
              client={<AgencyLink id={'aerian'}/>}
              summary='Drupal 7, 8 and 9, front-end, back-end and headless'
              quote='Leo is brilliant; he’s very quick at thinking things through and coming up with solutions to problems. He is a very clear and capable coder, can comfortably create custom modules for Drupal, and work on large scale, complex integrations.'
              author='Karen Velasquez, Project Manager'
            />

            <TestimonialRow
              type='Contract'
              dates='2017, 2018, 2020'
              client={<AgencyLink id={'microserve'}/>}
              summary='Drupal 8, front-end development'
              quote='Easily the best of the contractors we’ve had in, smashed through the tasks we gave him and added quite a lot of extra value along the way.'
              author="Dan McNamara, Managing Director"
            />

            <TestimonialRow
              type="Contract"
              dates="2018"
              client={<AgencyLink id={'halo'}/>}
              summary="Drupal 7 and 8, front-end development"
              quote="Leo is the best contractor we’ve ever had in my time at Halo."
              author="Alex Martin, Technical Director"
            />
          </Section>
        </div>

        <Title level={2} title2={'Other Experience'}/>

        <TitleRow>2022</TitleRow>

        <div className="l-columns">
          <Section>
            <ContentRow
                label={'2022'}
                labelLevel={6}
                content={<>
                  <h4 className="t-heading-4"><AgencyLink id={'cti'}/></h4>
                  <p>Drupal 8 and 9 front and back-end development.</p>
                  <h5>Projects</h5>
                  <ul>
                    <li>Manchester Metropolitan University</li>
                    <li>University of West London</li>
                    <li>Staffing Industry Analysts</li>
                  </ul>
                </>}
            />
          </Section>
          <Section>
            <ContentRow
                label={'2022'}
                labelLevel={6}
                content={<>
                  <h4 className="t-heading-4"><AgencyLink id={'collective'}/></h4>
                  <p>Drupal 8 and 9 back-end development.</p>
                  <h5>Projects</h5>
                  <ul>
                    <li>One Web</li>
                  </ul>
                </>}
            />
          </Section>
          <Section>
            <ContentRow
                label={'2021, 2022'}
                labelLevel={6}
                content={<>
                  <h4 className="t-heading-4"><AgencyLink id={'netefficiency'}/></h4>
                  <p>Drupal 8 and 9 front and back-end development.</p>
                  <h5>Projects</h5>
                  <ul>
                    <li>Royal Marsden Hospital</li>
                    <li>Carglass NL</li>
                  </ul>
                </>}
            />
          </Section>
        </div>

        <TitleRow>2021</TitleRow>

        <div className="l-columns">
          <Section>
            <ContentRow
                label={'2019, 2020, 2021'}
                labelLevel={6}
                content={<>
                  <h4 className="t-heading-4"><AgencyLink id={'aerian'}/></h4>
                  <p>Drupal 7, 8 and 9 back-end development. Headless CMS setup.</p>
                  <h5>Projects</h5>
                  <ul>
                    <li>Diabetes UK</li>
                    <li>Diabetes Learning Zone</li>
                    <li>Breast Cancer Now</li>
                    <li>Dogs Trust</li>
                    <li>Historic Royal Palaces</li>
                    <li>Radioplayer</li>
                    <li>RUSI</li>
                    <li>Conciliation Resources</li>
                    <li>SOS Children&apos;s Villages</li>
                    <li>Muscular Dystrophy UK</li>
                  </ul>
                </>}
            />
          </Section>
        </div>

        <TitleRow>2020</TitleRow>

        <div className="l-columns">
          <Section>
            <ContentRow
                label={'2020'}
                labelLevel={6}
                content={<>
                  <h4 className="t-heading-4"><AgencyLink id={'nudge'}/></h4>
                  <p>Drupal 8 front-end development. Working with the gov.uk front-end framework.</p>
                  <h5>Projects</h5>
                  <ul>
                    <li>Fire England</li>
                  </ul>
                </>}
            />
          </Section>
          <Section>
            <ContentRow
                label={'2020'}
                labelLevel={6}
                content={<>
                  <h4 className="t-heading-4"><AgencyLink id={'plume'}/></h4>
                  <p>Drupal 8 front-end development.</p>
                  <h5>Projects</h5>
                  <ul>
                    <li>School Online</li>
                  </ul>
                </>}
            />
          </Section>
          <Section>
            <ContentRow
                label={'2017, 2018, 2020'}
                labelLevel={6}
                content={<>
                  <h4 className="t-heading-4"><AgencyLink id={'microserve'}/></h4>
                  <p>Drupal 7 and 8 front-end development.</p>
                  <h5>Projects</h5>
                  <ul>
                    <li>Cheshire Financial Advice</li>
                    <li>Outdoor Lads</li>
                    <li>Bath and North East Somerset Council</li>
                  </ul>
                </>}
            />
          </Section>
          <Section>
            <ContentRow
                label={'2019, 2020'}
                labelLevel={6}
                content={<>
                  <h4 className="t-heading-4"><AgencyLink id={'fiora'}/></h4>
                  <p>Drupal 8 front and back-end development.</p>
                  <h5>Projects</h5>
                  <ul>
                    <li>Relyon</li>
                    <li>Slumberland</li>
                  </ul>
                </>}
            />
          </Section>
        </div>

        <TitleRow>2019</TitleRow>

        <div className="l-columns">
          <Section>
            <ContentRow
                label={'2019'}
                labelLevel={6}
                content={<>
                  <h4 className="t-heading-4"><AgencyLink id={'motherlode'}/></h4>
                  <p>Drupal 8 front-end development.</p>
                  <h5>Projects</h5>
                  <ul>
                    <li>UNICEF</li>
                  </ul>
                </>}
            />
          </Section>
        </div>

        <TitleRow>2018</TitleRow>

        <div className="l-columns">
          <Section>
            <ContentRow
                label={'2016, 2018'}
                labelLevel={6}
                content={<>
                  <h4 className="t-heading-4"><AgencyLink id={'halo'}/></h4>
                  <p>Drupal 8 front-end development.</p>
                  <h5>Projects</h5>
                  <ul>
                    <li>Cranswick PLC</li>
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
