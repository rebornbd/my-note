import React from 'react';

import {
  socialProps,
  SOCIALS
} from "../data/social";
import styles from "./Social.module.css";


export const Social = ({ pt=0, pb=0 }: { pt?: number, pb?: number }) => {
  const social_styles = {
    paddingTop: `${pt}px`,
    paddingBottom: `${pb}px`
  };

  const SocialIcon = ({ link, title="", icon, className }: socialProps) => {
    const Icon = icon;

    const onclickHandler = (link: string) => {
      const newWindow = window.open(link, '_blank', 'noopener,noreferrer')
      if (newWindow) newWindow.opener = null
    }

    return (
      <a
        // onClick={() => onclickHandler(link)}
        className={`${styles.socialIconTag} ${styles[className]}`}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon
          title={title}
          className={`${styles.socialIcon}`}
        />
      </a>
    )
  };


  return (
    <div className={styles.container} style={social_styles}>
      {SOCIALS && SOCIALS.map((socialsLink, index) => (
        <SocialIcon
          link={socialsLink.link}
          title={socialsLink.title}
          icon={socialsLink.icon}
          className={socialsLink.className}
          key={socialsLink.title}
        />
      ))}
    </div>
  )
}
