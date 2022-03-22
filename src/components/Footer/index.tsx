import bioInterface from "src/lib/Types";

const Footer = ({ bio }: bioInterface) => {
  return (
    <footer className="justify-content-start footer" id="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-contact">
            <div className="footer-contact__email">
              <i className="fa fa-envelope" />
              {/* <EnvelopeFill className="me-2" size={16} /> */}
              <span>{bio.email}</span>
            </div>
            <div className="footer-contact__phone">
              <i className="fa fa-phone" />
              {/* <PhoneFill className="me-2" size={16} /> */}
              <span>{bio.phone}</span>
            </div>
          </div>
          <div className="footer-content__socials">
            {bio.social.map(({ name, url }, key) => (
              <div key={key}>
                <a href={url} target="__blank">
                  <i className={`fa fa-${name.toLocaleLowerCase()}`} />
                </a>
              </div>
            ))}
          </div>
          <div className="footer-copyright">
            <div>Designed and Built by Andre Adikara</div>
            <div>© 2021-{new Date().getFullYear()}</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
