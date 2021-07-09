import "./topbar.scss";
import { Mail, Person } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            askarovmb.
          </a>
          <div className="itemcontainer">
            <Person className="icon" />
            <span>+998 (90) 123 10 70</span>
          </div>
          <div className="itemcontainer">
            <Mail className="icon" />
            <span>mbobur.askarov@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
