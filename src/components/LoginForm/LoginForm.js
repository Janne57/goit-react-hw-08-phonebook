import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operations';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Email
        <input type="email" name="email" required/>
      </label>
      <label className={css.label}>
        Password
        <input type="password" name="password" required />
      </label>
      <button className={css.contact__btn} type="submit">Log In</button>
    </form>
  );
};
