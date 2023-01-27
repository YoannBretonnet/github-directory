import { Image, Menu } from 'semantic-ui-react';
import { useNavigate, useLocation } from 'react-router-dom';

import githubLogo from '../../assets/logo-github.png';

function Header() {
  // navigate nous renvoie une fonction permettant de changer de route
  const navigate = useNavigate();
  // location nous renvoei des infos sur l'url courante
  const location = useLocation();

  console.log('location : ', location);

  return (
    <>
      <Image
        src={githubLogo}
        centered
        size="small"
      />
      <Menu tabular>
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
