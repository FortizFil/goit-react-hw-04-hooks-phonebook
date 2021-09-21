import { useState } from 'react';
import s from './contactForm.module.css';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    if (name === 'name') {
      setName(value);
    } else {
      setNumber(value);
    }
    console.log(name);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ name, number });
  };

  return (
    <form className={s.contact__form} onSubmit={handleSubmit}>
      <h3 className={s.contact__label}>Name</h3>
      <input
        className={s.contact__input}
        onChange={handleChange}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        value={name}
      />
      <h3 className={s.contact__label}>Number</h3>
      <input
        className={s.contact__input}
        onChange={handleChange}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
        value={number}
      />
      <button className={s.contact__btn} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
