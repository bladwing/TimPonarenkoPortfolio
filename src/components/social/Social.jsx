import "./social.scss";

export default function Social() {
  return (
    <div>
      <ul>
        <li>
          <a
            href="https://www.facebook.com/tim.ponarenko/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-facebook" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/TimotiPonarenko/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-twitter" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/bladwing/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/tima-ponarenko/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/tima.ponarenko/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-instagram" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}
