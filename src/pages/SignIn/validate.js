// import * as yup from 'yup';
import yup from 'global/yupGlobal';

const schema = yup.object().shape({
  email: yup.string().required('Required').email('Email invalid'),
  password: yup.string().required('Required').password('Password invalid')
});

export default schema;
