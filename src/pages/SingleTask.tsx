import React, { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../hooks';
import { useNavigate, useParams } from 'react-router-dom';
import Container from '../components/absoluteContainer/Container';
import Form from '../components/form/Form';
import Heading from '../components/heading/Heading';
import { changeTaskStatus, displayError } from '../store/slices/board';
import { ReactComponent as Ellipsis } from '../assets/icon-vertical-ellipsis.svg';
import Select from '../components/selectField/SelectField';
import Loader from '../components/loader/Loader';
import SubTasks from '../components/subtasks/Subtasks';
import PopUp from '../components/popUp/PopUp';
import Paragrapth from '../components/paragraph/Paragraph';
import { options } from '../models';

type task = {
  id?: string;
  name: string;
  description?: string;
  status: string;
  subtasks: {
    id?: any;
    title: string;
    isCompleted: boolean;
  }[];
};

const SingleTask = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const query = useAppSelector((state) => state.board.board);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [options, setOptions] = useState<options[]>();
  const [data, setData] = useState<task>();
  const { id, column, page } = useParams();

  useEffect(() => {
    if (query.columns) {
      const filteredData = query?.columns
        .filter((item) => item.name === column)[0]
        .tasks.filter((task) => task.name.toLowerCase() === id?.toLowerCase())[0];
      const options: options[] = query.columns.map((column) => {
        return {
          value: column.name,
          label: column.name,
        };
      });
      console.log(filteredData);
      setOptions(options);
      setData(filteredData);
    } else {
      return;
    }
  }, [query]);

  return (
    <Container>
      {data ? (
        <Form style={{ position: 'relative' }}>
          <Heading flex="flex" size="large">
            {data.name}
            <Ellipsis
              style={{
                cursor: 'pointer',
              }}
              onClick={() => {
                setShowMenu(!showMenu);
              }}
            />
          </Heading>
          {showMenu && (
            <PopUp title="task" editPath="/" deletePath={`/${page}/${column}/task/${id}/delete`} />
          )}
          <Paragrapth size="large"> {data.description} </Paragrapth>
          <SubTasks subtasks={data.subtasks} />
          <Select
            name="select"
            options={options!}
            value={data.status}
            label="Current status"
            handleChange={(value) => {
              if (column?.toLowerCase() !== value.value.toLowerCase()) {
                dispatch(
                  changeTaskStatus({
                    status: value.value,
                    task: data.name,
                    page: page,
                    column: column,
                  }),
                );
                navigate(-1);
              } else {
                dispatch(displayError({ err: 'Invalid selection' }));
              }
            }}
          />
        </Form>
      ) : (
        <Loader />
      )}
    </Container>
  );
};

export default SingleTask;
