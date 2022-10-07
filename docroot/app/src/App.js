import './settings/color.css';
import './settings/spacing.css';
import './base/base.css';
import './theme/typography.css';
import './theme/spacing.css';
import './App.css';
import './layout/grid.css';
import './layout/columns.css';
import './layout/container.css';
import Title from './components/Title/Title';
import Row from './components/Row/Row';
import TitleRow from './components/TitleRow/TitleRow';
import ContentRow from './components/ContentRow/ContentRow';
import TestimonialRow from './components/TestimonialRow/TestimonialRow';
import Section from './components/Section/Section';
import ProfileImage from "./components/ProfileImage/ProfileImage";

function App() {
  return (
    <div className="l-container">
      <div className="l-columns">
        <Section>
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
                <dd><a href="mailto:leopitt@function-design.co.uk">leopitt@function-design.co.uk</a></dd>

                <dt className="t-heading-5">Web</dt>
                <dd><a href="https://function-design.co.uk">function-design.co.uk</a></dd>

                <dt className="t-heading-5">LinkedIn</dt>
                <dd><a href="https://www.linkedin.com/in/leo-pitt/">linkedin.com/in/leo-pitt</a></dd>

                <dt className="t-heading-5">Github</dt>
                <dd><a href="https://github.com/leopitt">github.com/leopitt</a></dd>

                <dt className="t-heading-5">Drupal</dt>
                <dd><a href="https://www.drupal.org/u/leo-pitt">drupal.org/u/leo-pitt</a></dd>
              </dl>

              <h2 className="t-heading-3 t-uppercase">In a nutshell</h2>

              <p>Experienced developer with Drupal (Acquia accredited) specialism, working professionally since 2001 for varied direct clients and agencies.</p>
            </div>
          </Row>
        </Section>

        <Section>
          <TitleRow>Skills</TitleRow>

          <ContentRow
              label={"Front-end, HTML and CSS"}
              content={<p>Browser testing, responsiveness, custom grid frameworks, Bootstrap, Tailwind, etc.</p>}
          />

          <ContentRow
              label={"Drupal"}
              content={<p><a href={"https://certification.acquia.com/user/7651"}>Acquia Accredited developer</a>. Intensive user of Drupal since 2009. Experienced across Drupal
                6, 7, 8, 9+. “Headless” Drupal experience.</p>}
          />

          <ContentRow
              label={"Wordpress"}
              content={<p>Since 2016. Configuration, theming and maintenance. ACF, Woocommerce, Gravity Forms.</p>}
          />

          <ContentRow
              label={"PHP & MySQL"}
              content={<p>Experienced OOP coder.</p>}
          />

          <ContentRow
              label={"Workflow"}
              content={<p>Working solo or as part of a team; providing and acting upon code reviews, Jenkins,
                etc.</p>}
          />

          <ContentRow
              label={"Task-runners"}
              content={<p>Gulp, Bower, Webpack.</p>}
          />

          <ContentRow
              label={"JS"}
              content={<p>Native JS, jQuery. Basic Vue.js and React.</p>}
          />

          <ContentRow
              label={"Other"}
              content={<p>Git, LESS, SASS, Unix-like command-line, Photoshop, InDesign, node / npm usage, etc.</p>}
          />
        </Section>

        <Section>
          <TitleRow>Recent Projects and experience</TitleRow>

          <ContentRow
            label={2022}
            labelLevel={6}
            content={<>
              <p className="t-heading-4"><a href="https://www.ctidigital.com/">CTI Digital</a></p>
              <p>Drupal 9/10 front and back-end development</p>
            </>}
          />

          <ContentRow
              label={2022}
              labelLevel={6}
              content={<>
                <p className="t-heading-4"><a href="https://www.ctidigital.com/">Collective London</a></p>
                <p>Drupal 8/9 back-end development</p>
              </>}
          />

          <ContentRow
              label={2021}
              labelLevel={6}
              content={<>
                <p className="t-heading-4"><a href="https://www.ctidigital.com/">Net Efficiency</a></p>
                <p>Drupal 8/9/10 back-end development</p>
              </>}
          />

          <ContentRow
              label={"2019, 2020, 2021"}
              labelLevel={6}
              content={<>
                <p className="t-heading-4"><a href="https://www.ctidigital.com/">Aerian Studios</a></p>
                <p>Drupal 7, 8 and 9, front-end, back-end and headless</p>
              </>}
          />
        </Section>

        <Section>
          <TitleRow>Testimonials</TitleRow>

          <TestimonialRow
            type="Contract"
            dates="2019, 2020, 2021"
            client={<a href="https://www.ctidigital.com/">Aerian Studios</a>}
            summary="Drupal 7, 8 and 9, front-end, back-end and headless"
            quote="Leo is brilliant; he’s very quick at thinking things through and coming up with solutions to problems. He is a very clear and capable coder, can comfortably create custom modules for Drupal, and work on large scale, complex integrations."
            author="Karen Velasquez, Project Manager"
          />

          <TestimonialRow
            type="Contract"
            dates="2017, 2018, 2020"
            client={<a href="https://www.investisdigital.com/company/contact/bristol" title={"Investis Digital (formerly Microserve)"}>Microserve</a>}
            summary="Drupal 8, front-end development"
            quote="Easily the best of the contractors we’ve had in, smashed through the tasks we gave him and added quite a lot of extra value along the way."
            author="Dan McNamara, Managing Director"
          />

          <TestimonialRow
            type="Contract"
            dates="2018"
            client={<a href={"https://halostudio.love/"}>Halo</a>}
            summary="Drupal 7 and 8, front-end development"
            quote="Leo is the best contractor we’ve ever had in my time at Halo."
            author="Alex Martin, Technical Director"
          />
        </Section>
      </div>
    </div>
  );
}

export default App;
