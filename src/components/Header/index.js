import { Image, Menu } from 'semantic-ui-react';

import githubLogo from 'src/assets/images/logo-github.png';

function Header() {
 
  console.log('location : ', location);

  return (
    <>
      <Image
        src={githubLogo}
        centered
        size="small"
      />
      <Menu>
        <Menu.Item
          name="search"
          active={location.pathname === '/'}
          content="Recherche"
          onClick={() => navigate('/')}
        />

        <Menu.Item
          name="faq"
          active={location.pathname === '/faq'}
          content="FAQ"
          onClick={() => navigate('/faq')}
        />
      </Menu>
    </>
  );
}

export default Header;
