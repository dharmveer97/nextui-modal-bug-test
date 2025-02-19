'use client';

import { withFormik } from 'formik';
import * as yup from 'yup';
import { isEmpty } from 'lodash';
import { Button } from '@nextui-org/react';
import AutocompleteInput from '../elements/AutocompleteInput';
import TextInput  from '../elements/TextInput';
import {allCategories} from '../../utils/allCategories'

const CreateLotForm = (props) => {
  const {
    close,
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
    errors,
    touched,
    setFieldValue,
  } = props;


  return (
    <form
      onSubmit={handleSubmit}
      className="relative grid grid-cols-1 gap-x-6 gap-y-8"
    >
      <div className="mt-2">
        <TextInput
          className="w-full"
          label="Name*"
          name="name"
          placeholder="Enter Name"
          type="text"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors?.name && touched.name ? errors.name : undefined}
        />
      </div>
      <div className="mt-2">
        <TextInput
          className="w-full"
          label="Quantity"
          name="quantity"
          placeholder="Enter quantity"
          type="number"
          value={values.quantity}
          onChange={handleChange}
          onBlur={handleBlur}
          required
          min={0}
          error={
            errors?.quantity && touched.quantity ? errors.quantity : undefined
          }
        />
      </div>
      <div className="mt-2">
        <TextInput
          className="w-full"
          label="Cost"
          name="cost"
          min={0}
          placeholder="Enter cost"
          type="number"
          value={values.cost}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors?.cost && touched?.cost ? errors?.cost : undefined}
        />
      </div>

      <div className="mt-2">
      <AutocompleteInput
            allOptions={allCategories}
            name="category"
            selectedKey={values.category}
            value={values.category}
            handleChange={handleChange}
            label="Select Category"
            aria-label="Select Category"
            placeholder="Choose item from category list"
            onSelectionChange={(val) => setFieldValue('category', val)}
            error={
              errors && errors.category && touched?.category
                ? errors?.category
                : undefined
            }
          />
      </div>

      <div className="">
        <div className="mt-2 space-x-7 pb-6">
          {close && (
            <Button color="danger" variant="flat" onClick={close}>
              Close
            </Button>
          )}
          <Button
            onClick={handleSubmit}
            isLoading={isSubmitting}
            isDisabled={!isEmpty(errors) || isSubmitting}
            type="submit"
            color="primary"
          >
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
};

export default withFormik({
  mapPropsToValues: ({ initialValues }) => ({
    name: initialValues ? initialValues.name : '',
    quantity: initialValues ? initialValues.quantity : undefined,
    cost: initialValues ? initialValues.cost : undefined,
    user: initialValues ? initialValues?.user?.id : '',
    type: 'lot',
  }),

  validationSchema: yup.object().shape({
    name: yup.string().required('Lot name is required').nullable(),
    quantity: yup.number().required('Quantity is required').nullable(),
    cost: yup.number().required('Cost is required').nullable(),
    user: yup.string().required('Assigner name is required').nullable(),
  }),

  handleSubmit: (values, { setSubmitting, props }) => {
    props
      .onSubmit(values)
      .then(() => {
        setSubmitting(false);
      })
      .catch(() => {
        setSubmitting(false);
      });
  },
  displayName: 'CreateLotForm', // helps with React DevTools
})(CreateLotForm);
