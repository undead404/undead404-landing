import { Typography } from 'antd';
import { SocialIcon } from 'react-social-icons';

import styles from './Footer.module.css';

export default function MyFooter(): JSX.Element {
  return (
    <>
      <SocialIcon
        target="_blank"
        title="Vitalii Perehonchuk @ Facebook"
        url="https://www.facebook.com/vitaliy.seeker/"
      />
      <SocialIcon
        target="_blank"
        title="survival and happiness @ Instagram"
        url="https://www.instagram.com/brute18/"
      />
      <SocialIcon
        target="_blank"
        title="undead404 @ Github"
        url="https://github.com/undead404"
      />
      <SocialIcon
        target="_blank"
        title="Vitalii Perehonchuk @ Linkedin"
        url="https://www.linkedin.com/in/vitalii-perehonchuk-10570693/"
      />
      <Typography.Link
        className={styles.lastfmLink}
        href="https://www.last.fm/user/UNDEADUM"
        target="_blank"
        title="UNDEADUM @ Lastfm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 24 24"
        >
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3.664 15.889c-2.773 0-3.736-1.25-4.248-2.806l-.515-1.604c-.385-1.17-.834-2.084-2.244-2.084-.979 0-1.974.706-1.974 2.678 0 1.539.786 2.502 1.894 2.502 1.249 0 2.083-.931 2.083-.931l.515 1.396s-.866.85-2.679.85c-2.245-.001-3.496-1.316-3.496-3.754 0-2.534 1.251-4.025 3.607-4.025 2.133 0 3.208.77 3.881 2.854l.53 1.604c.385 1.171 1.058 2.021 2.678 2.021 1.091 0 1.668-.24 1.668-.834 0-.465-.273-.802-1.09-.994l-1.091-.256c-1.331-.321-1.861-1.01-1.861-2.101 0-1.748 1.412-2.293 2.854-2.293 1.638 0 2.63.593 2.759 2.037l-1.604.192c-.063-.69-.48-.979-1.251-.979-.706 0-1.138.321-1.138.866 0 .481.208.77.914.93l1.025.225c1.381.321 2.119.994 2.119 2.293 0 1.603-1.347 2.213-3.336 2.213z" />
        </svg>
      </Typography.Link>
      <SocialIcon
        target="_blank"
        title="Email Vitalii Perehonchuk"
        url="mailto:brute18@gmail.com"
      />
    </>
  );
}
