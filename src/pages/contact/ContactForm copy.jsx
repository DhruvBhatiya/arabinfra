import {
  Box,
  Grid,
  TextField,
  MenuItem,
} from '@mui/material';
import emailjs from 'emailjs-com';
import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';
import { ButtonBorder } from '../../components/shared/ButtonCustom';

const validationSchema = Yup.object({
  name: Yup.string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters'),
  email: Yup.string()
    .email('Enter a valid email')
    .required('Email is required'),
  mobile: Yup.string()
    .required('Mobile number is required')
    .matches(/^[0-9]{10}$/, 'Mobile number must be 10 digits'),
  subject: Yup.string().required('Subject is required'),
  message: Yup.string()
    .required('Message is required')
    .min(10, 'Message must be at least 10 characters'),
  attachment: Yup.mixed()
    .test('fileSize', 'File size is too large', (value) =>
      value ? value.size <= 2 * 1024 * 1024 : true // 2MB limit
    )
    .notRequired(),
});

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState('');

  const sendEmail = (values, { setSubmitting, resetForm }) => {
    const serviceID = 'service_68r7ee1';
    const templateID = 'template_atfhiht';
    const userID = 'owmcB0tBHvjSWlAU6'; // Public Key

    const emailData = new FormData();
    emailData.append('name', values.name);
    emailData.append('email', values.email);
    emailData.append('mobile', values.mobile); // Add mobile number
    emailData.append('subject', values.subject);
    emailData.append('message', values.message);

    if (values.attachment) {
      emailData.append('attachment', values.attachment);
    }

    emailjs
      .send(serviceID, templateID, emailData, userID)
      .then(() => {
        setIsSubmitted('Submitted successfully, we will get back to you soon');
        resetForm();
        setSubmitting(false);
      })
      .catch(() => {
        setIsSubmitted('Failed to send the message. Please try again later.');
        setSubmitting(false);
      });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {isSubmitted ? (
        <p className="font-semibold text-green-600">{isSubmitted}</p>
      ) : (
        <p className="font-semibold text-red-600">{isSubmitted}</p>
      )}

      <Formik
        initialValues={{
          name: '',
          email: '',
          mobile: '', // New mobile field
          subject: '',
          message: '',
          attachment: null,
        }}
        validationSchema={validationSchema}
        onSubmit={sendEmail}
      >
        {({ errors, touched, setFieldValue, values, isSubmitting }) => (
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  select
                  fullWidth
                  name="subject"
                  label="Subject"
                  variant="outlined"
                  error={touched.subject && Boolean(errors.subject)}
                  helperText={touched.subject && errors.subject}
                >
                  <MenuItem value="Training">Training</MenuItem>
                  <MenuItem value="Business inquiry">Business inquiry</MenuItem>
                  <MenuItem value="Upload your documents">
                    Upload your documents
                  </MenuItem>
                </Field>
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  fullWidth
                  name="name"
                  label="Name"
                  variant="outlined"
                  error={touched.name && Boolean(errors.name)}
                  helperText={touched.name && errors.name}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  fullWidth
                  name="email"
                  label="Email"
                  variant="outlined"
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  fullWidth
                  name="mobile"
                  label="Mobile Number"
                  variant="outlined"
                  error={touched.mobile && Boolean(errors.mobile)}
                  helperText={touched.mobile && errors.mobile}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  fullWidth
                  name="message"
                  label="Message"
                  multiline
                  rows={4}
                  variant="outlined"
                  error={touched.message && Boolean(errors.message)}
                  helperText={touched.message && errors.message}
                />
              </Grid>
              {values.subject === 'Upload your documents' && (
                <Grid item xs={12}>
                  <input
                    type="file"
                    accept="application/pdf,image/*"
                    onChange={(event) =>
                      setFieldValue('attachment', event.currentTarget.files[0])
                    }
                  />
                  {errors.attachment && touched.attachment && (
                    <p className="text-red-600 text-sm">{errors.attachment}</p>
                  )}
                </Grid>
              )}
              <Grid item xs={12}>
                <ButtonBorder
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </ButtonBorder>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default ContactForm;
