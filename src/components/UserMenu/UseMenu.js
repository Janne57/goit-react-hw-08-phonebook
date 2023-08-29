import {useAuth} from '..//../hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Hello, {user.name}</p>
      <button className={css.contact__btn} type="button" onClick={() => dispatch(logOut())}>
        LogOut
      </button>
    </div>
  );
};
