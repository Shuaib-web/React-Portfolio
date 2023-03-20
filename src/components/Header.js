import profile from "../images/shuib.jpg";


function Header() {
  return (
    <div className="container header">
      <div className="profilePic">
        <img alt="picture of jacob nordan" src={profile}></img>
      </div>
      <div className="intro">
        <h1>
          Hi, I'm <b>Shuib Mohamed</b>. A Fullstack Developer and Creative
          Thinker.
        </h1>
      </div>
    </div>
  );
}

export default Header;
