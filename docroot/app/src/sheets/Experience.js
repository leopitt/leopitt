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

      <TitleRow>2022</TitleRow>

      <Section>
        <ContentRow
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

      <TitleRow>2021</TitleRow>

      <div className="l-columns">
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
                  'SOS Children&apos;s Villages',
                  'Muscular Dystrophy UK'
                ]}
              />
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
              <ProjectList
                projects={[
                  'UNICEF'
                ]}
              />
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
              <ProjectList
                  projects={[
                    'Cranswick PLC'
                  ]}
              />
            </>}
          />
        </Section>
      </div>
    </>
  )
}

export default Experience
