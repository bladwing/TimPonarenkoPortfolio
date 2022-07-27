import "./social.scss"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom"
export default function Social() {
  return (
    <div>
      <nav className="social">
        <ul>
          <li>
           <Link to="/">
              Twitter <i className="fa fa-twitter"></i>
              </Link>
          </li>
          <li>
          <Link to="/">
              Github <i className="fa fa-github"><AiFillGithub/></i>
              </Link>
          </li>
          <li>
            <Link to="/">
              Linkedin <i className="fa fa-linkedin"><AiFillLinkedin/></i>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
