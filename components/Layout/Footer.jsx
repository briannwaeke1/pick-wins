import { Text, TextLink } from '@/components/Text';

import styles from './Footer.module.css';
import Spacer from './Spacer';
import Wrapper from './Wrapper';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Wrapper>
        <Text color="accents-7">🚧 Site Under Construction 🚧</Text>
        <Spacer size={1} axis="vertical" />
      </Wrapper>
    </footer>
  );
};

export default Footer;
