import React from 'react'
import AgencyLink from '../components/AgencyLink/AgencyLink'
import ContentRow from '../components/ContentRow/ContentRow'
import ProjectList from '../components/ProjectList/ProjectList'
import Section from '../components/Section/Section'
import Title from '../components/Title/Title'
import TitleRow from '../components/TitleRow/TitleRow'

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
      </div>

      <TitleRow>Self-employed (2001 - 2021)</TitleRow>
      <div className={'l-section l-grid l-grid-item--span-full l-grid--gap'}>
        <div className={'l-grid-item--second'}>
          <div className={'l-width-2/3'}>
            <p>My web design and development business.</p>
            <p>I handle development, information architecture and project management; working as a supplier to marketing, design and SEO partners and also direct to client. Since 2009 the majority of this work has been via Drupal.</p>
            <p>In this role I have worked on a wide variety of projects large and small and built strong relationships with many clients. Here are a few of the more recent examples:</p>
          </div>
        </div>
      </div>

      <div className="l-columns">
        <Section>
          <ContentRow
            label={'2018 - 2020'}
            labelLevel={6}
            content={<>
              <h4 className={'t-heading-4'}>RSPCA</h4>
              <h5 className={'t-heading-5'}>Drupal 8, HTML, CSS, SASS, Webpack</h5>
              <p>Drupal configuration and theming for a joint RSPCA and Kennel Club &ldquo;Puppy Contract&rdquo; service campaign. Designs supplied by the RSPCA’s in-house designer.</p>
            </>}
          />
        </Section>
        <Section>
          <ContentRow
            label={'2011 - 2020'}
            labelLevel={6}
            content={<>
              <h4 className={'t-heading-4'}>Animal Welfare Foundation</h4>
              <h5 className={'t-heading-5'}>Wordpress, HTML, CSS, SASS, Gulp
              </h5>
              <p>Project management, Wordpress configuration and theming. Website redesign and development for a national Veterinary Association.</p>
            </>}
          />
        </Section>
        <Section>
          <ContentRow
            label={'2017 - 2019'}
            labelLevel={6}
            content={<>
              <h4 className={'t-heading-4'}>Bowood House and Gardens</h4>
              <h5 className={'t-heading-5'}>Wordpress, Woocommerce, HTML, CSS, SASS, Gulp</h5>
              <p>Wordpress configuration, woocommerce, theming. New website for this popular South-West destination.</p>
            </>}
          />
        </Section>
        <Section>
          <ContentRow
            label={'2010 - 2021'}
            labelLevel={6}
            content={<>
              <h4 className={'t-heading-4'}>The Animal Welfare, Science, Ethics and Law Veterinary Association</h4>
              <h5 className={'t-heading-5'}>Drupal, Commerce, Ubercart, HTML, CSS, SASS</h5>
              <p>Project management, Drupal configuration and theming. Original build in Drupal 7. Oversaw migration to Drupal 8 and a redesign.</p>
            </>}
          />
        </Section>
      </div>
    </>
  )
}

export default Experience
