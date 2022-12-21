import React from 'react';
import * as S from './EditFormBoard.styles';
import Input from '../input/Input';
import { FieldArray, Formik } from 'formik';
import uuid from 'react-uuid';
import * as Yup from 'yup';

type props = {
  handleSubmit: (values: any) => void;
  initialValues: any;
};

const validationSchema = Yup.object({
  name: Yup.string().required("Can't be empty"),
  columns: Yup.array(
    Yup.object({
      id: Yup.string(),
      name: Yup.string().required("Can't be empty"),
    }),
  ).min(1),
});

const generateNewRow = () => {
  const id = uuid();
  return {
    name: '',
    id: id,
    tasks: [],
  };
};

const EditForm = ({ handleSubmit, initialValues }: props) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values: any) => {
        handleSubmit(values);
      }}
    >
      {(formik) => {
        const { errors, values } = formik;

        return (
          <S.FormComponent>
            <S.Title>Edit Board</S.Title>
            <Input
              handleBlur={formik.handleBlur}
              handleChange={formik.handleChange}
              error={errors.name}
              value={values.name}
              type="text"
              name="name"
              label="Board Name"
              placeholder="e.g Take coffee break"
            />
            <S.BoardColumns>
              <S.Label>Board Columns</S.Label>
              <FieldArray name="columns">
                {(props) => {
                  const { push, remove, form } = props;
                  const { values, errors, touched, setFieldValue } = form;
                  return (
                    <>
                      {values.columns.length > 0 &&
                        values.columns.map((column: any, index: number) => (
                          <Input
                            key={index}
                            id={column.id}
                            handleBlur={formik.handleBlur}
                            name={`columns[${index}]`}
                            type="text"
                            touched={touched}
                            error={errors ? errors : null}
                            icon={true}
                            handleDelete={() => {
                              remove(index);
                            }}
                            value={column.name}
                            handleChange={(e) => {
                              setFieldValue(`columns[${index}].name`, e.currentTarget.value);
                            }}
                          />
                        ))}
                      <S.NewColumnBtn
                        type="button"
                        disabled={false}
                        text="+ add new column"
                        handleClick={() => {
                          push(generateNewRow());
                        }}
                      />
                    </>
                  );
                }}
              </FieldArray>
            </S.BoardColumns>
            <S.SubmitBtn type="submit" disabled={false} text="Update board" />
          </S.FormComponent>
        );
      }}
    </Formik>
  );
};

export default EditForm;
