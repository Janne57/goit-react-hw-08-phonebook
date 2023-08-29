import { Navigation } from '../Navigation/Navigation.js';
import { UserMenu } from '../UserMenu/UseMenu.js';
import { AuthNav } from '../AuthNav/AuthNav.js';
import { useAuth } from '..//../hooks/useAuth.js';
import css from './AppBar.module.css';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      <header className={css.header}>
        <Navigation />
        <nav className={css.header_nav}>
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </nav>
      </header>
    </div>
  );
};
