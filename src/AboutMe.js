import "./AboutMe.css";

function AboutMe() {
  return (
    <div>
      <Introduction />
      <Image />
      <Career />
      <Form />
    </div>
  );
}

function Introduction() {
  return (
    <div className="main-container">
      <p className="hey-there">HEY THERE!</p>
      <h1 className="a-name">
        {" "}
        It is <span className="favour">Favour Olukayode</span> here!{" "}
      </h1>
      <p align="center" className="introduction">
        I am a flutter developer and backend engineer based in Ibadan, Nigeria.
        I love games and Kendrick Lamar. Designing mobile apps and maintaining
        APIs is what I love to do for a living. Welcome to my world.
      </p>
    </div>
  );
}

function Image() {
  return (
    <div>
      <img
        src="https://assets.website-files.com/5c6e6f46bf98b2013cf621c5/5cdbeef9bd53280d68f98a0e_about-pic.svg"
        alt="A girl holding paint and paintbrush"
        width="100%"
        height="auto"
      ></img>
    </div>
  );
}

function Career() {
  return (
    <div>
      <h1 align="center" className="my-story">
        {" "}
        My Story{" "}
      </h1>
      <p className="the-story">
        {" "}
        I have been a passionate developer in the mobile and backend development
        industry for over 5 years. Throughout this time, I've had the privilege
        of collaborating with incredible professionals on numerous innovative
        projects. These projects range from creating dynamic mobile applications
        to building robust backend systems. My journey began in mobile
        development, where I specialized in Flutter and Android, utilizing Dart,
        Kotlin, and Java to bring ideas to life. Over the years, I have
        developed a deep understanding of mobile app architecture, user
        experience, and seamless performance. <br />
        <br />
        Transitioning to backend development two years ago, I expanded my skill
        set to include PostgreSQL, MongoDB, Redis, RabbitMQ, and Golang. This
        shift allowed me to design and implement scalable, efficient backend
        solutions that support complex mobile applications. <br />
        <br />
        Throughout my career, I've been dedicated to continuous learning and
        improvement, always seeking to enhance my skills and knowledge. I enjoy
        exploring new technologies and methodologies, which helps me stay
        current in this rapidly evolving field. My focus has always been on
        delivering high-quality, user-centric products and ensuring that every
        project I work on is innovative and impactful. <br />
        <br />
        You can check out my projects <a href="/portfolio">here</a>!
      </p>
    </div>
  );
}

function Form() {
  return (
    <div className="formcontainer">
      <div className="thecopy">
        <h1 className="copy">Want to get in touch? Drop me a line!</h1>
        <p className="copy2">
          {" "}
          *Note: you can click the "Download My Current CV" button to get my
          latest CV copy.{" "}
        </p>
      </div>

      <div className="justform">
        <form>
          <div className="namemail">
            <div className="inputwrapper">
              <label for="name" className="alabel">
                NAME:{" "}
              </label>
              <input
                className="input"
                type="text"
                id="name"
                name="user-name"
                placeholder="Enter your name"
              />
            </div>

            <div className="inputwrapper">
              <label for="email address" className="emailaddress">
                EMAIL ADDRESS:{" "}
              </label>
              <input
                className="input"
                type="email"
                id="email-address"
                name="email-address"
                placeholder="Enter your email address"
              />
            </div>
          </div>

          <p>
            <label className="formlabeltag">FORM LABEL:</label>
            <textarea
              name="subject"
              className="formlabel"
              placeholder="Enter your message"
            ></textarea>
          </p>
        </form>
      </div>

      <button className="button">SUBMIT</button>
      <button className="second-button">Download My Current CV</button>
    </div>
  );
}
export default AboutMe;
