'use client';
import Image from 'next/image';
import styles from './header.module.scss';

/**
 * header returns
 * @return {React.Component} The header.
 */
export default function Header() {
  return (
    <header className={styles.header}>
      <h1>
        <a href="#">
          <Image
            data-test-id="logo"
            src="/logo.png"
            width={50}
            height={52}
            alt="Logo"
          />
        </a>
      </h1>
    </header>
  );
}


