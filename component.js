class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <nav class="navbar">
        <div class="k-container">
          <div class="k-row">
            <div class="logo">
              <a href="index.html"><img src="assets//images/Logo.svg" alt="" /></a>
            </div>
            <div class="menu">
              <ul>
                <li>
                  <a  href="feature.html">Features</a>
  
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
                <li>Pricing</li>
                <li>About</li>
                <li>Blog</li>
              </ul>
            </div>
            <div class="btn-wrapper">
              <p>Sign In</p>
              <button class="Inter-700">Get Started</button>
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
    </div>
  </footer>`;
  }
}

customElements.define("navbar-bar", Navbar);
customElements.define("footer-bar", Footer);
