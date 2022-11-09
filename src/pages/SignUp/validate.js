import yup from 'global/yupGlobal';

const schema = yup.object().shape({
  firstName: yup.string().required('Required'),
  lastName: yup.string().required('Required'),
  phone: yup.string().required('Phone invalid'),
  email: yup.string().required('Email invalid'),
  password: yup.string().required('Password invalid')
});

export default schema;
