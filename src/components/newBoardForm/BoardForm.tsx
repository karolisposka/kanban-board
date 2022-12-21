import React from 'react';
import * as S from './BoardForm.styles';
import Input from '../input/Input';
import { FieldArray, Formik } from 'formik';
import uuid from 'react-uuid';
import * as Yup from 'yup';

type column = {
  name: string;
  columns: {
    id: string;
    name: string;
    tasks: [];
  }[];
};

type props = {
  handleSubmit: (values: any) => void;
};

const initialValues: column = {
  name: '',
  columns: [
    {
      id: uuid(),
      name: 'Todo',
      tasks: [],
    },
  ],
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

const BoardForm = ({ handleSubmit }: props) => {
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
            <S.Title>Add New Board</S.Title>
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
                      {values.columns.map((column: any, index: number) => (
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
                            remove(column.id);
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
                          push({ name: '', id: uuid(), tasks: [] });
                        }}
                      />
                    </>
                  );
                }}
              </FieldArray>
            </S.BoardColumns>
            <S.SubmitBtn type="submit" disabled={false} text="Create New Board" />
          </S.FormComponent>
        );
      }}
    </Formik>
  );
};

export default BoardForm;
