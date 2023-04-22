class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <nav class="navbar">
    <div class="k-container">
      <div class="k-row">
        <div class="logo">
          <a href="index.html" aria-label="Korrect"><img src="assets//images/Logo.svg" alt="korrect" /></a>
        </div>
        <div class="menu">
          <div class="humburger">
            <img class="openhumburger active" src="./assets/images/humburger.svg" alt="menu"/>
            <img class="closehumburger" src="./assets/images/cross_icon.svg" alt="close" />
          </div>
          <ul>
            <li>
              <a href="feature.html">Features</a>

              <div class="dropdown">
                <p class="black161 Inter-600">Features</p>
                <p>Collect Feedback</p>
                <p>Analyse Feedback</p>
                <p>Prioritise & Roadmap</p>
                <p>Announce Updates</p>
                <hr />
                <p class="black161 Inter-600">Use Cases</p>
                <p>Understand what not to build</p>
                <p>Prioritize features & build roadmap</p>
                <p>Engage with product updates</p>
              </div>
            </li>
            <li>
              <a href="pricing.html">Pricing</a>
            </li>
            <li> <a href="about.html">About</a></li>
            <li> <a href="blog.html">Blog</a></li>

            <div class="mobile">
              <button class="mobile-get-started" onclick="window.location.href='https://app.getkorrect.com/signup';"
                class="Inter-700">Get Started</button>
              <a href="https://app.getkorrect.com/login">
                <p>Sign In</p>
              </a>
            </div>
          </ul>
        </div>
        <div class="btn-wrapper">
          <a href="https://app.getkorrect.com/login">
            <p>Sign In</p>
          </a>
          <button onclick="window.location.href='https://app.getkorrect.com/signup';" class="Inter-700">Get
            Started</button>
        </div>
      </div>
    </div>
  </nav>
        `;
  }
}

class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
   
  <footer>
  <div class="k-container">
    <div class="k-row">
      <div>
        <p class="head">Company</p>
        <p class="link">About Us</p>
        <p class="link">Our Manifesto</p>
        <p class="link">Careers</p>
      </div>
      <div>
        <p class="head">Product</p>
        <p class="link">Features</p>
        <p class="link">Use Cases</p>
        <p class="link">Pricing</p>
        <p class="link">Integrations</p>
        <p class="link">FAQs</p>
        <p class="link">Blog</p>
      </div>
      <div>
        <p class="head">Use Cases</p>
        <p class="link">Feature Request Tracking</p>
        <p class="link">Bug Tracking</p>
        <p class="link">Release Notes Tool</p>
        <p class="link">Idea Management</p>
        <p class="link">Public Product Roadmap</p>
        <p class="link">Feature Upvoting Tool</p>
      </div>
      <div>
        <p class="head">Alternatives</p>
        <p class="link">Canny Alternative</p>
        <p class="link">HelloNext Alternative</p>
        <p class="link">SleekPlan Alternative</p>
        <p class="link">Upvoty Alternative</p>
        <p class="link">Trello Alternative</p>
        <p class="link">User Voice Alternative</p>
      </div>
      <div>
        <p class="head">Resources</p>
        <p class="link">Developer API</p>
        <p class="link">Glossary</p>
        <p class="link">The Korrect Way</p>
        <p class="link">Changelog Tool</p>
        <p class="link">Feature Voting Tool</p>
        <p class="link">Feedback Boards</p>
      </div>
      <div>
        <p class="head">Support</p>
        <p class="link">Contact Us</p>
        <p class="link">Feature Request</p>
        <p class="link">Help Center</p>
      </div>
    </div>
    <hr />
    <div class="footer-logo">
      <img src="assets//images/FooterLogo.svg" alt="footer" />
      <div class="social">
        <img src="assets//images/LinkedIN.svg" alt="social" />
        <img src="assets//images/Combined-Shape.svg" alt="social" />
        <img src="assets//images/Instagram.svg" alt="social" />
        <img src="assets//images/Facebook.svg" alt="social" />
      </div>
    </div>
    <div class="footer-logo copyright">
      <p>© 2022 Korrect, a product of Korrect Technologies Pvt Ltd</p>
      <div class="social security">
        <p>Security</p>
        <p>Privacy</p>
        <p>Terms of Service</p>
        <p>GDPR Compliance</p>
        <p>Inactivity Policy</p>
      </div>
    </div>
  </div>
</footer>`;
  }
}

class Happy extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <section class="happy">
    <div class="k-container">
      <h2 class="happytitle">Let's make you happy!</h2>
      <button class="happy-cta">Start Free Trial</button>
      <div class="chip-container">
        <p class="chip">
          <img src="assets/images/Vector.svg" alt="" /> No credit card
          required
        </p>
        <p class="chip">
          <img src="assets/images/Vector.svg" alt="" /> Feature requests
        </p>
        <p class="chip">
          <img src="assets/images/Vector.svg" alt="" /> Build roadmap
        </p>
      </div>
      <div class="happy-banner">
      
          <img src="assets/images/happy-banner.svg" alt="" width="100%"  />
  
      </div>
    </div>
  </section>`;
  }
}

customElements.define("navbar-bar", Navbar);
customElements.define("footer-bar", Footer);
customElements.define("happy-bar", Happy);
