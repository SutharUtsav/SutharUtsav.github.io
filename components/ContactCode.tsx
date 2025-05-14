import styles from '@/styles/ContactCode.module.css';
import Image from 'next/image';

const contactItems = [
  {
    social: 'email',
    icon:'/logos/gmail.svg',
    link: 'utsavsuthar24@gmail.com',
    href: 'mailto:utsavsuthar24@gmail.com',
  },
  {
    social: 'github',
    icon:'/logos/github.svg',
    link: 'utsavsuthar',
    href: 'https://github.com/SutharUtsav',
  },
  {
    social: 'linkedin',
    icon:'/logos/linkedin.svg',
    link: 'utsavsuthar',
    href: 'https://www.linkedin.com/in/utsavsuthar/',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;<Image src={item.icon} alt={item.social} height={25} width={25} />:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
