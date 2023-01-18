import { Link } from "react-router-dom";
import sampleImg from "./images/sample.jpg";
import { educationData } from "./data/Data";
import "./App.css";
import { useState } from "react";

function App() {
  const [toggleContent, settoggleContent] = useState(1);

  const toggleTab = (index) => {
    settoggleContent(index);
  };
  return (
    <div className="App">
      <div id="header">
        <div className="container">
          <nav>
            <h3>
              <span className="des">N</span>
              <span className="des2">icholas</span>{" "}
              <span className="des">KE</span>
            </h3>
            <ul>
              <li>
                <Link to="#">Home</Link>
              </li>
              <li>
                <Link to="#about">About</Link>
              </li>
              <li>
                <Link to="#service">Service</Link>
              </li>
              <li>
                <Link to="#portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="#contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <div className="header-text">
            <div className="header-text-left">
              <p>React Js Developer</p>
              <h1>
                Hi, I'm <span className="des">Nicholas</span> Kiplimo <br />
                <br />
                KENYA
              </h1>
            </div>
            <div className="header-text-right">
              <img src={sampleImg} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div id="about">
        <div className="container">
          <div className="row">
            <div className="about-col-1">
              <img src={sampleImg} alt="" />
            </div>
            <div className="about-col-2">
              <h3 className="des sub-titles">About Me</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
                impedit dolorum ullam atque non, odio quasi laborum blanditiis
                unde, numquam laboriosam, quaerat alias praesentium nulla quis
                facere sapiente consectetur aspernatur.
              </p>

              <div className="tab-titles">
                <p
                  className={
                    toggleContent === 1 ? "tab-links active-link" : "tab-link"
                  }
                  onclick={() => toggleTab(1)}
                >
                  Skills
                </p>
                <p
                  className={
                    toggleContent === 2 ? "tab-links active-link" : "tab-link"
                  }
                  onclick={() => toggleTab(2)}
                >
                  Experience
                </p>
                <p
                  className={
                    toggleContent === 3 ? "tab-links active-link" : "tab-link"
                  }
                  onclick={() => toggleTab(3)}
                >
                  Education
                </p>
              </div>
              <div className={toggleContent === 1 ? "tab-contents active-tab" : "tab-contents"}>
                {educationData.map((eduction) => [])}
                <ul>
                  <li>
                    <span>UI/UX</span>
                    <br />
                    Design Web/App interface
                  </li>
                  <li>
                    <span>Web developer</span>
                    <br />
                    Web app Development
                  </li>
                  <li>
                    <span>App Developer</span>
                    <br />
                    Building Android/iOS apps
                  </li>
                </ul>
              </div>
              <div className={toggleContent === 2 ? "tab-contents active-tab" : "tab-contents"}>
                <ul>
                  <li>
                    <span>experience</span>
                    <br />
                    Design Web/App interface
                  </li>
                  <li>
                    <span>Web developer</span>
                    <br />
                    Web app Development
                  </li>
                  <li>
                    <span>App Developer</span>
                    <br />
                    Building Android/iOS apps
                  </li>
                </ul>
              </div>
              <div className= {toggleContent === 3 ? "tab-contents active-tab" : "tab-contents"}>
                <ul>
                  {educationData.map((eduction) => [
                    <li>
                      <span>{eduction.year}</span>
                      <br />
                      {eduction.school}
                    </li>,
                  ])}

                  <li>
                    <span>Web developer</span>
                    <br />
                    Web app Development
                  </li>
                  <li>
                    <span>App Developer</span>
                    <br />
                    Building Android/iOS apps
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="service">
        <div className="container">
          <div className="des sub-titles">My Services</div>
          <div className="service-list">
            <div>
              <h2>Web Design</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                culpa corporis labore modi dolore repellat.
              </p>
              <Link to="#">Learn more</Link>
            </div>
            <div>
              <h2>Web Design</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                culpa corporis labore modi dolore repellat.
              </p>
              <Link to="#">Learn more</Link>
            </div>
            <div>
              <h2>Web Design</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                culpa corporis labore modi dolore repellat.
              </p>
              <Link to="#">Learn more</Link>
            </div>
          </div>
        </div>
      </div>

      <div id="portfolio">
        <div className="container">
          <div className="des sub-titles">My Work</div>
          <div className="work-list">
            <div className="work">
              <img src={sampleImg} alt="" />
              <div className="layer">
                <h3>Social Media App</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore incidunt doloribus illum veritatis voluptatem rerum
                </p>
                <Link to="#">+</Link>
              </div>
            </div>
            <div className="work">
              <img src={sampleImg} alt="" />
              <div className="layer">
                <h3>Social Media App</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore incidunt doloribus illum veritatis voluptatem rerum
                </p>
                <Link to="#">+</Link>
              </div>
            </div>
            <div className="work">
              <img src={sampleImg} alt="" />
              <div className="layer">
                <h3>Social Media App</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore incidunt doloribus illum veritatis voluptatem rerum
                </p>
                <Link to="#">+</Link>
              </div>
            </div>
          </div>
          <Link to="#" className="btn">
            See More
          </Link>
        </div>
      </div>

      <div id="contact">
        <div className="container">
          <div className="row">
            <div className="contact-left">
              <h1 className="des">Contact Me</h1>
              <p>PO Box 1119-30200, KITALE</p>
              <p>info@example.com</p>
              <p>0791980616</p>
            </div>
            <div className="contact-right">
              <form action="">
                <input
                  type="text"
                  name="Name"
                  placeholder="Enter Name..."
                  required
                />
                <input
                  type="text"
                  name="Name"
                  placeholder="Enter Name..."
                  required
                />
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Message here...."
                  required
                ></textarea>
                <button className="btn" type="submit">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="copyright">
        <p>
          &rarr; Copyright &copy; 2022. All rights Reserved. Designed by:
          Nicholas Kiplimo &trade; &larr;
        </p>
      </div>
    </div>
  );
}

export default App;
