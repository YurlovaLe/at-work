import * as Yup from 'yup';

export const UserInfoSchema = Yup.object().shape({
  name: Yup.string()
    .required('Укажите имя'),
  username: Yup.string()
    .required('Укажите никнейм'),
  email: Yup.string()
    .email('Укажите корректный email')
    .required('Укажите email'),
  city: Yup.string()
    .required('Укажите город'),
  phone: Yup.string()
    .required('Укажите телефон'),
  company: Yup.string()
    .required('Укажите компанию'),
});
