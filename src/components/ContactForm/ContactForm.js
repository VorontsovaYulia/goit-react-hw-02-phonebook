import { nanoid } from "nanoid";
import { Formik, Form, Field } from "formik";

export const ContactForm = ({addContact}) => {
  
const nameId = nanoid();
  
  return (
    <Formik
      initialValues={{
        name: '',
      }}
      onSubmit={values => {
        addContact({
          name: values.name,
          id: nameId,
        })
      }}
    >
      <Form>
        <label>First Name
          <Field
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          />
        </label>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
    )
}