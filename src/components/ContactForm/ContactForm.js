import { nanoid } from "nanoid";
import { Formik, Form, Field } from "formik";

export const ContactForm = ({addContact}) => {
  
const nameId = nanoid();
  
  return (
    <Formik
      initialValues={{
        name: '',
        number: ''
      }}

      onSubmit={(values, actions) => {
        addContact({
          id: nameId,
          name: values.name,
          number: values.number
        })
        actions.resetForm();
      }}
    >
      <Form>
        <label>Name
          <Field
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          />
        </label>
        <label>Number
          <Field
          type="tel"
          name="number"
          pattern="\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
    )
}