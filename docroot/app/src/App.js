import './settings/color.css';
import './base/base.css';
import './theme/typography.css';
import './App.css';
import './layout/grid.css';
import './layout/columns.css';
import './layout/container.css';
import Row from './components/Row/Row';
import TestimonialRow from './components/TestimonialRow/TestimonialRow';
import Section from './components/Section/Section';

function App() {
  return (
      <div className="l-container">
        <div className="l-columns">
          <Section>
            <Row element="h1">
              <span className="c-title__primary t-heading-1 t-uppercase">Leo Pitt </span><span className="t-heading-2 t-uppercase">Curriculum Vitae</span>
            </Row>
          </Section>
        </div>

        <div className="l-columns">
          <Section>
            <Row>
              <div className="l-grid-item-second">
                <dl className="l-grid l-grid--secondary">
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
              </div>
            </Row>
          </Section>

          <Section>
            <Row>
              <h2 className="l-grid-item-second t-heading-3 t-uppercase">In a nutshell</h2>
            </Row>
            <Row>
              <p className="l-grid-item-second">Experienced developer with Drupal (Acquia accredited) specialism, working professionally since
                2001 for varied direct clients and agencies.</p>
            </Row>
          </Section>

          <Section>
            <Row>
              <h2 className="l-grid-item-second t-heading-3 t-uppercase">Skills</h2>
            </Row>

            <Row>
              <h3 className="c-row__label c-row__label--offset t-heading-4 t-uppercase">Front-end, HTML and CSS</h3>
              <p>Browser testing, responsiveness, custom grid frameworks, Bootstrap, Tailwind, etc.</p>
            </Row>

            <Row>
              <h3 className="c-row__label c-row__label--offset t-heading-4 t-uppercase">Drupal</h3>
              <p>Acquia Accredited developer. Intensive user of Drupal since 2009. Experienced across Drupal
                6, 7, 8, 9+. “Headless” Drupal experience.</p>
            </Row>

            <Row>
              <h3 className="c-row__label c-row__label--offset t-heading-4 t-uppercase">Wordpress</h3>
              <p>Since 2016. Configuration, theming and maintenance. ACF, Woocommerce, Gravity Forms.</p>
            </Row>

            <Row>
              <h3 className="c-row__label c-row__label--offset t-heading-4 t-uppercase">PHP & MySQL</h3>
              <p>Experienced OOP coder.</p>
            </Row>

            <Row>
              <h3 className="c-row__label c-row__label--offset t-heading-4 t-uppercase">Workflow</h3>
              <p>Working solo or as part of a team; providing and acting upon code reviews, Jenkins, etc.</p>
            </Row>

            <Row>
              <h3 className="c-row__label c-row__label--offset t-heading-4 t-uppercase">Task-runners</h3>
              <p>Gulp, Bower, Webpack.</p>
            </Row>

            <Row>
              <h3 className="c-row__label c-row__label--offset t-heading-4 t-uppercase">JS</h3>
              <p>Native JS, jQuery. Basic Vue.js and React.</p>
            </Row>

            <Row>
              <h3 className="c-row__label c-row__label--offset t-heading-4 t-uppercase">Other</h3>
              <p>Git, LESS, SASS, Unix-like command-line, Photoshop, InDesign, node / npm usage, etc.</p>
            </Row>
          </Section>

          <Section>
            <Row>
              <h2 className="l-grid-item-second t-heading-3 t-uppercase">Recent Projects and experience</h2>
            </Row>

            <Row>
              <h3 className="c-row__label c-row__label--offset t-heading-6 t-uppercase">Contract<br />
                2022</h3>
              <div className="c-row__content">
                <p className="t-heading-4"><a href="https://www.ctidigital.com/">CTI Digital</a></p>
                <p>Drupal 9/10 front and back-end development</p>
              </div>
            </Row>

            <Row>
              <h3 className="c-row__label c-row__label--offset t-heading-6 t-uppercase">Contract<br />
                2022</h3>
              <div className="c-row__content">
                <p className="t-heading-4"><a href="https://ldn-collective.com/">Collective London</a></p>
                <p>Drupal 8/9 back-end development</p>
              </div>
            </Row>

            <Row>
              <h3 className="c-row__label c-row__label--offset t-heading-6 t-uppercase">Contract<br />
                2021</h3>
              <div className="c-row__content">
                <p className="t-heading-4"><a href="https://www.netefficiency.co.uk/">Net Efficiency</a></p>
                <p>Drupal 8/9/10 back-end development</p>
              </div>
            </Row>

            <Row>
              <h3 className="c-row__label c-row__label--offset t-heading-6 t-uppercase">Contract<br />
                2019, 2020, 2021</h3>
              <div className="c-row__content">
                <p className="t-heading-4"><a href="https://www.aerian.com/">Aerian Studios</a></p>
                <p>Drupal 7, 8 and 9, front-end, back-end and headless</p>
              </div>
            </Row>
          </Section>

          <Section>
            <Row>
              <h2 className="l-grid-item-second t-heading-3 t-uppercase">Testimonials</h2>
            </Row>

            <TestimonialRow
                type="Contract"
                dates="2019, 2020, 2021"
                client="Aerian Studios"
                summary="Drupal 7, 8 and 9, front-end, back-end and headless"
                quote="Leo is brilliant; he’s very quick at thinking things through and coming up with solutions to problems. He is a very clear and capable coder, can comfortably create custom modules for Drupal, and work on large scale, complex integrations."
                author="Karen Velasquez, Project Manager"
            />

            <TestimonialRow
                type="Contract"
                dates="2017, 2018, 2020"
                client="Microserve"
                summary="Drupal 8, front-end development"
                quote="Easily the best of the contractors we’ve had in, smashed through the tasks we gave him and added quite a lot of extra value along the way."
                author="Dan McNamara, Managing Director"
            />

            <TestimonialRow
                type="Contract"
                dates="2018"
                client="Halo"
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
