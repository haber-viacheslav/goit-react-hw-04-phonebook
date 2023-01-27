import { Formik } from 'formik';
import { string, object } from 'yup';
import 'yup-phone';
import PropTypes from 'prop-types';
import {
  FormWrap,
  FormErrorMessage,
  FormInput,
  FormLabel,
  FormInputWrp,
  FormButton,
} from './ContactForm.styled';
const initialValues = {
  name: '',
  number: '',
};

const schema = object().shape({
  name: string().required(),
  number: string().phone('UA').required(),
});

const ContactForm = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormWrap autoComplete="off">
        <FormInputWrp htmlFor="name">
          <FormLabel>Name</FormLabel>
          <FormInput type="text" name="name" />
          <FormErrorMessage name="name" component="div" />
        </FormInputWrp>

        <FormInputWrp htmlFor="number">
          <FormLabel>Number</FormLabel>
          <FormInput type="tel" name="number" />
          <FormErrorMessage name="number" component="div" />
        </FormInputWrp>

        <FormButton type="submit">Add contact</FormButton>
      </FormWrap>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
