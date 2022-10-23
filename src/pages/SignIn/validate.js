import yup from 'global/yupGlobal';

const schema = yup.object().shape({
  email: yup.string().required('Email invalid').email('Email invalid'),
  password: yup
    .string()
    .required('Password invalid')
    .password('Password invalid')
});

export default schema;
