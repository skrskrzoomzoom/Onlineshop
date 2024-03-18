import "../Css/scrollpagecss.css";

export default function App() {
  function fok() {
    var j = document.getElementById("arr");
    j.style.backgroundImage =
      "url(https://cdn.iconscout.com/icon/premium/png-64-thumb/chevron-arrow-3883460-3231250.png)";
  }

  function kof() {
    var j = document.getElementById("arr");
    j.style.backgroundImage =
      "url(https://cdn.iconscout.com/icon/free/png-64/right-arrow-1438234-1216195.png)";
  }

  function gok() {
    let j = document.getElementById("brr");
    j.style.backgroundImage =
      "url(https://cdn.iconscout.com/icon/premium/png-64-thumb/chevron-arrow-3883460-3231250.png)";
  }

  function kog() {
    let j = document.getElementById("brr");
    j.style.backgroundImage =
      "url(https://cdn.iconscout.com/icon/free/png-64/right-arrow-1438234-1216195.png)";
  }

  function hok() {
    let j = document.getElementById("crr");
    j.style.backgroundImage =
      "url(https://cdn.iconscout.com/icon/premium/png-64-thumb/chevron-arrow-3883460-3231250.png)";
  }

  function koh() {
    let j = document.getElementById("crr");
    j.style.backgroundImage =
      "url(https://cdn.iconscout.com/icon/free/png-64/right-arrow-1438234-1216195.png)";
  }

  window.onscroll = function () {
    jet();
  };

  function jet() {
    var ilake = document.getElementById("head");
    ilake.style.top = "0px";
    ilake.style.position = "sticky";
  }

  window.addEventListener("scroll", () => {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var wnd = window.innerHeight;
      var rtop = reveals[i].getBoundingClientRect().top;
      var rpoint = 100;

      if (rtop < wnd - rpoint) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  });
  return (
    <div classNameName="App">
      <main>
        <div id="front">
          <h1 style={{ textAlign: "center" }}>Welcome,To Clothing Branded</h1>
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/about-us-1805547-1537820.png"
            alt="font"
          />
          <p>
            Our goal is to remove any technical or financial barriers that can
            prevent you from building your own clothing brand. Our powerful
            tools empower individuals and business owners to create their brand,
            sell online, or reach global audiences. Whether you're a beginner or
            an expert in the fashion industry, we're excited to help you on your
            journey!
          </p>
        </div>

        <div id="fourth" className="reveal">
          <h2 style={{ color: "white" }}>Clothing Brabd Services</h2>
          <h1 style={{ color: "white" }}>
            Real Time Monitoring Your Infrstracture Branded Degital Solutions
          </h1>
          <div id="fourth_cards">
            <div>
              <img
                src="https://cdn.iconscout.com/icon/premium/png-64-thumb/data-analysis-27-681042.png"
                alt=" "
              />
              <p>Fashion Design</p>
            </div>
            <div>
              <img
                src="https://cdn.iconscout.com/icon/premium/png-64-thumb/ui-ux-designer-2755964-2289563.png"
                alt=" "
              />
              <p>Fabric Selection</p>
            </div>
            <div>
              <img
                src="https://cdn.iconscout.com/icon/premium/png-64-thumb/web-development-3-478143.png"
                alt=" "
              />
              <p>Manufacturing</p>
            </div>
            <div>
              <img
                src="https://cdn.iconscout.com/icon/premium/png-64-thumb/qa-testing-3919162-3246433.png"
                alt=" "
              />
              <p>E-commerce Integration</p>
            </div>
            <div>
              <img
                src="https://cdn.iconscout.com/icon/premium/png-64-thumb/team-135-386667.png"
                alt=" "
              />
              <p>Customer Support </p>
            </div>
          </div>
        </div>

        <div id="second" className="reveal">
          <div className="container">
            <div>
              <h1>Our Services</h1>
              <h2>Virtual Stylist</h2>
              <p>
                Access a diverse team of fashion experts who can provide
                personalized styling advice tailored to your preferences and
                needs. Whether you're looking for outfit recommendations,
                fashion trends insights, or wardrobe consultations, our virtual
                stylists are here to elevate your fashion game.
              </p>
            </div>
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/men-and-woman-characters-work-together-on-project-presentation-2706075-2259871.png"
              alt=""
            />
          </div>

          <div className="container">
            <div>
              <h1>OUR NETWORK</h1>
              <h2>Global Collaborations</h2>
              <p>
                We've established partnerships across 12 countries, fostering a
                diverse network to bring you the latest trends and styles from
                around the world. With a growing client base and strong
                recommendations, our collaborations span different fashion
                domains, ensuring you access to the best in the industry.
              </p>
            </div>
            <img
              src="https://cdn.iconscout.com/icon/premium/png-64-thumb/fashion-partnership-2975816-2476892.png"
              style={{ marginTop: "50px" }}
              alt=""
            />
          </div>

          <div className="container">
            <div>
              <h1>OUR MISSION</h1>
              <h2>Quality Fashion, Affordable Prices</h2>
              <p>
                Our mission revolves around offering top-notch fashion at
                unbeatable prices. We're revolutionizing the industry with our
                commitment to providing the same quality as high-end brands but
                at significantly lower costs. Our goal is to fill the gap in the
                market, offering Small and Medium Enterprises access to premium
                fashion without breaking the bank.
              </p>
            </div>
            <img
              src="https://cdn.iconscout.com/icon/premium/png-64-thumb/fashion-goal-4352585-3618767.png"
              style={{ marginTop: "80px" }}
              alt=""
            />
          </div>

          <div className="container">
            <div>
              <h1>OUR STRENGTHS</h1>
              <h2>Technology and Human Expertise</h2>
              <p>
                We leverage cutting-edge technology and human talent to deliver
                exceptional fashion experiences. Our dedicated team works
                tirelessly to ensure seamless operations, bridging the gap
                between physical and virtual spaces. With our intelligent use of
                resources, we provide a work-from-home environment that mirrors
                the efficiency of an in-person setup.
              </p>
            </div>
            <img
              src="https://cdn.iconscout.com/icon/premium/png-64-thumb/fashion-teamwork-3560853-2989144.png"
              alt=""
            />
          </div>
        </div>

        <div id="third" className="reveal">
          <h3 style={{ textAlign: "center" }}>OUR CREATIVE PROCESS</h3>
          <h1 style={{ textAlign: "center" }}>
            Crafting Unique Styles with Innovative Perspectives
          </h1>

          <div id="third_cards">
            <div>
              <h2>Comprehensive Fashion Solutions and Services</h2>
              <p>
                We offer end-to-end solutions for all your fashion needs. From
                design conception to manufacturing and distribution, we ensure a
                seamless process to bring your fashion ideas to life.
              </p>
            </div>
            <div>
              <h2>Stay Ahead of Trends with Future-Proof Fashion</h2>
              <p>
                Our team stays at the forefront of fashion trends, ensuring that
                your brand remains innovative and ahead of the curve. We
                future-proof your fashion line by anticipating market shifts and
                evolving consumer preferences.
              </p>
            </div>
            <div>
              <h2>Delivering Success with Every Collection</h2>
              <p>
                With a proven track record of successful collections, we
                guarantee a seamless execution process for each project. From
                concept to creation, we ensure that every garment meets the
                highest standards of quality and craftsmanship.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
