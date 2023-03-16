import React from 'react'
import AgencyLink from '../components/AgencyLink/AgencyLink'
import ContentRow from '../components/ContentRow/ContentRow'
import ProjectList from '../components/ProjectList/ProjectList'
import Section from '../components/Section/Section'
import Title from '../components/Title/Title'
import TitleRow from '../components/TitleRow/TitleRow'
import ExternalLink from '../components/ExternalLink/ExternalLink'

function Experience () {
  return (
    <>
      <Title level={2} title2={'Other Experience'}/>
      <TitleRow>Agency Experience (2006 - Present)</TitleRow>
      <div className="l-columns">
        <Section>
          <ContentRow
            label={'2022'}
            labelLevel={6}
            content={<>
              <h4 className="t-heading-4"><AgencyLink id={'fullfatthings'}/></h4>
              <p>Drupal 8, 9 and 10 development. Nuxt and Vue.js.</p>
              <ProjectList
                projects={[
                  'BBC',
                  'Freesat',
                  'HD Upgrade',
                  'The Official Charts Company',
                  'Capital Economics',
                  'Capital Belting',
                  'Laser Systems Europe'
                ]}
              />
            </>}
          />
        </Section>
        <Section>
          <ContentRow
            label={'2022'}
            labelLevel={6}
            content={<>
              <h4 className="t-heading-4"><AgencyLink id={'numiko'}/></h4>
              <p>Drupal 8 and 9 front-end development.</p>
              <ProjectList
                projects={[
                  'Oxford University',
                  'Guildhall School of Music & Drama',
                  'The Electoral Commission',
                  'Salix Finance'
                ]}
              />
            </>}
          />
        </Section>
        <Section>
          <ContentRow
            label={'2022'}
            labelLevel={6}
            content={<>
              <h4 className="t-heading-4"><AgencyLink id={'cti'}/></h4>
              <p>Drupal 8 and 9 front and back-end development.</p>
              <ProjectList
                projects={[
                  'Manchester Metropolitan University',
                  'University of West London',
                  'Staffing Industry Analysts'
                ]}
              />
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
              <ProjectList
                projects={[
                  'One Web'
                ]}
              />
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
              <ProjectList
                projects={[
                  'Royal Marsden Hospital',
                  'Carglass NL'
                ]}
              />
            </>}
          />
        </Section>
        <Section>
          <ContentRow
            label={'2019, 2020, 2021'}
            labelLevel={6}
            content={<>
              <h4 className="t-heading-4"><AgencyLink id={'aerian'}/></h4>
              <p>Drupal 7, 8 and 9 back-end development. Headless CMS setup.</p>
              <ProjectList
                projects={[
                  'Diabetes UK',
                  'Diabetes Learning Zone',
                  'Breast Cancer Now',
                  'Dogs Trust',
                  'Historic Royal Palaces',
                  'Radioplayer',
                  'RUSI',
                  'Conciliation Resources',
                  'SOS Children\'s Villages',
                  'Muscular Dystrophy UK'
                ]}
              />
            </>}
          />
        </Section>
        <Section>
          <ContentRow
            label={'2020'}
            labelLevel={6}
            content={<>
              <h4 className="t-heading-4"><AgencyLink id={'nudge'}/></h4>
              <p>Drupal 8 front-end development. Working with the gov.uk front-end framework.</p>
              <ProjectList
                projects={[
                  'Fire England'
                ]}
              />
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
              <ProjectList
                projects={[
                  'School Online'
                ]}
              />
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
              <ProjectList
                projects={[
                  'Cheshire Financial Advice',
                  'Outdoor Lads',
                  'Bath and North East Somerset Council'
                ]}
              />
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
              <ProjectList
                projects={[
                  'Relyon',
                  'Slumberland'
                ]}
              />
            </>}
          />
        </Section>
        <Section>
          <ContentRow
            label={'2019'}
            labelLevel={6}
            content={<>
              <h4 className="t-heading-4"><AgencyLink id={'motherlode'}/></h4>
              <p>Drupal 8 front-end development.</p>
              <ProjectList
                projects={[
                  'UNICEF'
                ]}
              />
            </>}
          />
        </Section>
        <Section>
          <ContentRow
            label={'2016, 2018'}
            labelLevel={6}
            content={<>
              <h4 className="t-heading-4"><AgencyLink id={'halo'}/></h4>
              <p>Drupal 8 front-end development.</p>
              <ProjectList
                projects={[
                  'Cranswick PLC'
                ]}
              />
            </>}
          />
        </Section>
        <Section>
          <ContentRow
            label={'2010'}
            labelLevel={6}
            content={<>
              <h4 className="t-heading-4"><AgencyLink id={'gibe'}/></h4>
              <p>Drupal 6 theming and development.</p>
            </>}
          />
        </Section>
        <Section>
          <ContentRow
            label={'2009'}
            labelLevel={6}
            content={<>
              <h4 className="t-heading-4"><AgencyLink id={'proctors'}/></h4>
              <p>Drupal 6 theming and development.</p>
            </>}
          />
        </Section>
      </div>

      <TitleRow>Self-employed (2001 - 2021)</TitleRow>
      <div className={'l-section l-grid l-grid-item--span-full l-grid--gap'}>
        <div className={'l-grid-item--second'}>
          <div className={'l-width-3-4'}>
            <p>Under the banner of <ExternalLink href={'https://function-design.co.uk'}>Function Design</ExternalLink> I worked as a supplier to marketing, design and SEO partners and also &lsquo;direct to client&rsquo;.</p>
            <p>In addition to the billable web development, information architecture, project and account management I handled sales, marketing, sub-contracting and day-to-day business operations.</p>
            <p>In this role I worked on a wide variety of projects large and small and built strong relationships with many clients. Here are a few examples:</p>
          </div>
        </div>
      </div>

      <div className="l-columns">
        <Section>
          <ContentRow
            content={<>
              <h4 className={'t-heading-4'}>RSPCA</h4>
              <h5 className={'t-heading-5'}>Drupal build, development and maintenance</h5>
              <p>Build and maintenance for a joint RSPCA and Kennel Club &ldquo;Puppy Contract&rdquo; service campaign. Designs were supplied by the RSPCA’s in-house designer.</p>
            </>}
          />
        </Section>
        <Section>
          <ContentRow
            content={<>
              <h4 className={'t-heading-4'}>Animal Welfare Foundation</h4>
              <h5 className={'t-heading-5'}>Drupal and Wordpress development and maintenance</h5>
              <p>Originally built with Drupal 7. Subsequently I managed a redesign and Wordpress migration for this National Veterinary Association.</p>
            </>}
          />
        </Section>
        <Section>
          <ContentRow
            content={<>
              <h4 className={'t-heading-4'}>Bowood House and Gardens</h4>
              <h5 className={'t-heading-5'}>Wordpress + Woocommerce, theming, development and maintenance</h5>
              <p>Build and maintenance of a new website for this popular South-West destination.</p>
            </>}
          />
        </Section>
        <Section>
          <ContentRow
            content={<>
              <h4 className={'t-heading-4'}>The Animal Welfare, Science, Ethics and Law Veterinary Association</h4>
              <h5 className={'t-heading-5'}>Drupal configuration, theming and maintenance</h5>
              <p>Original build in Drupal 7. Ubercart (later Commerce) used for the sale of memberships and conference attendance. Oversaw migration to Drupal 8 and a site redesign.</p>
            </>}
          />
        </Section>
      </div>
    </>
  )
}

export default Experience
