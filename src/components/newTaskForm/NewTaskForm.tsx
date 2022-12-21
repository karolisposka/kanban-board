import React from 'react';
import * as S from './NewTaskForm.styles';
import { Formik, FieldArray } from 'formik';
import uuid from 'react-uuid';
import Form from '../form/Form';
import Input from '../input/Input';
import Textarea from '../textarea/Textarea';
import * as Yup from 'yup';

type props = {
  handleSubmit: (values: any) => void;
  options: {
    value: string;
    label: string;
  }[];
};

const initialValues = {
  name: '',
  id: uuid(),
  description: '',
  status: '',
  subtasks: [
    {
      id: uuid(),
      title: '',
      isCompleted: false,
    },
  ],
};

const createNewSubtask = () => {
  const id = uuid();
  return {
    id: id,
    title: '',
    isCompleted: false,
  };
};

const validationSchema = Yup.object({
  name: Yup.string().required("Can't be empty"),
  description: Yup.string().required("Can't be empty"),
  status: Yup.string().required(),
  subtasks: Yup.array(
    Yup.object({
      id: Yup.string(),
      title: Yup.string().required("Can't be empty"),
      isCompleted: Yup.boolean(),
    }),
  ).min(1),
});

const NewTaskForm = ({ handleSubmit, options }: props) => {
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
          <Form handleSubmit={formik.handleSubmit}>
            <S.Title>Add New Task</S.Title>
            <Input
              handleBlur={formik.handleBlur}
              handleChange={formik.handleChange}
              error={errors.name}
              value={values.name}
              type="text"
              name="name"
              label="task name"
              placeholder="e.g Take coffee break"
            />
            <Textarea
              label="description"
              name="description"
              error={errors.description && errors.description}
              value={values.description}
              placeholder="e.g it's always good to take a break. This 15 minute break will recharge the batteries a little"
              handleChange={formik.handleChange}
            />

            <S.Label>Subtasks</S.Label>
            <FieldArray name="subtasks">
              {(props) => {
                const { push, remove, form } = props;
                const { values, errors, touched, setFieldValue } = form;
                return (
                  <>
                    {values.subtasks.map((column: any, index: number) => (
                      <Input
                        key={index}
                        id={column.id}
                        handleBlur={formik.handleBlur}
                        name={`subtasks[${index}]`}
                        type="text"
                        touched={touched}
                        error={errors ? errors : null}
                        icon={true}
                        handleDelete={() => {
                          remove(column.id);
                        }}
                        value={column.title}
                        handleChange={(e) => {
                          setFieldValue(`subtasks[${index}].title`, e.currentTarget.value);
                        }}
                      />
                    ))}
                    <S.AddBtn
                      type="button"
                      disabled={false}
                      text="+ Add new subtask"
                      handleClick={() => {
                        const newSubtask = createNewSubtask();
                        push(newSubtask);
                      }}
                    />
                  </>
                );
              }}
            </FieldArray>
            <S.SelectField
              value={values.status}
              disabled={false}
              options={options}
              name="status"
              label="status"
              handleChange={(e) => {
                formik.setFieldValue('status', e.value);
              }}
            />
            <S.CreateBtn type="submit" disabled={false} text="Create Task" />
          </Form>
        );
      }}
    </Formik>
  );
};

export default NewTaskForm;
