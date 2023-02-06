import classes from './social-links.module.scss';

interface SocialLink {
  name: string;
  link: string;
}

const SocialLinks = () => {
  const socialLinks: SocialLink[] = [
    { name: 'twitter', link: 'https://twitter.com/avivharuzi' },
    {
      name: 'facebook',
      link: 'https://www.facebook.com/people/Aviv-Haruzi/100001590224128',
    },
    { name: 'linkedin', link: 'https://www.linkedin.com/in/avivharuzi' },
    { name: 'instagram', link: 'https://www.instagram.com/avivharuzi' },
    { name: 'github', link: 'https://github.com/avivharuzi' },
    { name: 'envelope', link: 'mailto:avivharuzi@gmail.com' },
  ];

  return (
    <div className={classes.SocialLinks}>
      <ul className="d-flex justify-content-center p-0 m-0">
        {socialLinks.map((socialLink) => {
          return (
            <li className="mx-3" key={socialLink.name}>
              <a
                className={socialLink.name}
                href={socialLink.link}
                target="_blank"
              >
                <i className={'fa fa-' + socialLink.name}></i>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SocialLinks;
