import "./Portfolio.css";

export default function Portfolio() {
  return (
    <div>
      <ProjectOne />
      <ProjectTwo />
    </div>
  );
}

function ProjectOne() {
  return (
    <div>
      <img />
      <h1> HeyFood (here is a sample)</h1>
      <p>Mobile App Design</p>
      <i>Technologies: Dart, Flutter...</i>
    </div>
  );
}

function ProjectTwo() {
  return (
    <div>
      <img
        src="https://play-lh.googleusercontent.com/IwSOoFSOkdYp_b8leMuCDuTiSO07HOrlOo1fMF_LpBpou8bXlnhLiWLkHNBvBQBO4Qqm=w2560-h1440-rw"
        height="auto"
        width="80%"
        alt="HeyFood app from playstore"
      />
      <h1> HeyFood (here is a sample)</h1>
      <p>Mobile App Design</p>
      <i>Technologies: Dart, Flutter...</i>
    </div>
  );
}
