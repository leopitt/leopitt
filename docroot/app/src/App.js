import './App.css';

function App() {
  return (
      <div className="l-container">
        <header className="App-header">
          <h1>Leo Pitt <span>Curriculum Vitae</span></h1>
        </header>

        <div className="c-content">
          <section className="c-section">
            <dl>
              <dt>Tel</dt>
              <dd>07712 622 397</dd>

              <dt>Email</dt>
              <dd><a href="mailto:leopitt@function-design.co.uk">leopitt@function-design.co.uk</a></dd>

              <dt>Web</dt>
              <dd><a href="https://function-design.co.uk">function-design.co.uk</a></dd>

              <dt>LinkedIn</dt>
              <dd><a href="https://www.linkedin.com/in/leo-pitt/">linkedin.com/in/leo-pitt</a></dd>

              <dt>Github</dt>
              <dd><a href="https://github.com/leopitt">github.com/leopitt</a></dd>

              <dt>Drupal</dt>
              <dd><a href="https://www.drupal.org/u/leo-pitt">drupal.org/u/leo-pitt</a></dd>
            </dl>
          </section>

          <section>
            <h2>In a nutshell</h2>

            <p>Experienced developer with Drupal (Acquia accredited) specialism, working professionally since
              2001 for varied direct clients and agencies.</p>
          </section>

          <section>
            <h2>Skills</h2>

            <div className="c-skill">
              <h3>Front-end, HTML and CSS</h3>
              <p>Browser testing, responsiveness, custom grid frameworks, Bootstrap, Tailwind, etc.</p>
            </div>

            <div className="c-skill">
              <h3>Drupal</h3>
              <p>Acquia Accredited developer. Intensive user of Drupal since 2009. Experienced across Drupal
                6, 7, 8, 9+. “Headless” Drupal experience.</p>
            </div>

            <div className="c-skill">
              <h3>Wordpress</h3>
              <p>Since 2016. Configuration, theming and maintenance. ACF, Woocommerce, Gravity Forms.</p>
            </div>

            <div className="c-skill">
              <h3>PHP & MySQL</h3>
              <p>Experienced OOP coder.</p>
            </div>

            <div className="c-skill">
              <h3>Workflow</h3>
              <p>Working solo or as part of a team; providing and acting upon code reviews, Jenkins, etc.</p>
            </div>

            <div className="c-skill">
              <h3>Task-runners</h3>
              <p>Gulp, Bower, Webpack.</p>
            </div>

            <div className="c-skill">
              <h3>JS</h3>
              <p>Native JS, jQuery. Basic Vue.js and React.</p>
            </div>

            <div className="c-skill">
              <h3>Other</h3>
              <p>Git, LESS, SASS, Unix-like command-line, Photoshop, InDesign, node / npm usage, etc.</p>
            </div>
          </section>

          <section>
            <h2>Recent Projects and experience</h2>

            <h3>CTI Digital</h3>
            <p>2022</p>
            <p>Drupal 9/10 front and back-end development</p>

            <h3>Collective London</h3>
            <p>2022</p>
            <p>Drupal 8/9 back-end development
            </p>

            <h3>Net Efficiency</h3>
            <p>2021</p>
            <p>Drupal 8/9/10 back-end development
            </p>

            <h3>Aerian Studios</h3>
            <p>2019, 2020, 2021</p>
            <p>Drupal 7, 8 and 9, front-end, back-end and headless</p>
          </section>

          <section>
            <h2>Testimonials</h2>

            <h3>Aerian Studios</h3>
            <figure>
              <blockquote>Leo is brilliant; he’s very quick at thinking things through and coming up with
                solutions to problems. He is a very clear and capable coder, can comfortably create custom
                modules for Drupal, and work on large scale, complex integrations.
              </blockquote>
              <figcaption>Karen Velasquez, Project Manager</figcaption>
            </figure>

            <h3>Microserve</h3>
            <figure>
              <blockquote>Easily the best of the contractors we’ve had in, smashed through the tasks we gave
                him and
                added quite a lot of extra value along the way.
              </blockquote>
              <figcaption>Dan McNamara, Managing Director</figcaption>
            </figure>

            <h3>Halo Media</h3>
            <figure>
              <blockquote>Leo is the best contractor we’ve ever had in my time at Halo.</blockquote>
              <figcaption>Alex Martin, Technical Director</figcaption>
            </figure>
          </section>
        </div>
      </div>
  );
}

export default App;
