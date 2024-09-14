import "./Footer.css";

import { Link } from "react-router-dom";

import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div>
        <p>Veja mais projetos no meu Linkedin:</p>
        <Link to="https://www.linkedin.com/in/roberto-de-oliveira-35976621b/">
          {" "}
          <BsLinkedin className="linkedin" />{" "}
        </Link>
      </div>
      <div>
        <p>Veja meus repositórios:</p>
        <Link to="https://www.linkedin.com/in/roberto-de-oliveira-35976621b/">
          {" "}
          <BsGithub className="github" />{" "}
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
