import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';
// import Notiflix from 'notiflix';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
    const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    // Notiflix.Notify.success(`${form.elements.name.value} is registered successfully!`);
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        UserName
        <input type="text" name="name" required />
      </label>
      <label className={css.label}>
        Email
        <input type="email" name="email" required />
      </label>
      <label className={css.label}>
        Password
        <input type="password" name="password" required />
      </label>
      <button className={css.contact__btn} type="submit">Register</button>
    </form>
  );
}