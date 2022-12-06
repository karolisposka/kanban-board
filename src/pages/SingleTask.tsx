import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import Container from '../components/absoluteContainer/Container';
import Form from '../components/form/Form';
import Heading from '../components/heading/Heading';
import {ReactComponent as Ellipsis} from '../assets/icon-vertical-ellipsis.svg';
import Select from '../components/selectField/SelectField';
import SubTasks from '../components/subtasks/Subtasks';
import PopUp from '../components/popUp/PopUp';
import Paragrapth from '../components/paragraph/Paragraph';
import {board} from '../models'; 



type data = {
  boards: board[]
}

const SingleTask = () => {
  const [showMenu, setShowMenu] =useState<boolean>(false);
  const [data, setData] = useState<data>();
  const {page, id} = useParams();

  const text = "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition."
  return (
    <Container>
        <Form
          style={{position:'relative'}}
          handleSubmit={()=>{
          console.log('hi')
        }}>  
          <Heading flex='flex' size='large'>
            {'Build UI for onboarding flow Build UI for onboarding flow'}
            <Ellipsis 
              style={{
                cursor:'pointer',
              }}
              onClick={()=>{
                setShowMenu(!showMenu)
            }}/> 
          </Heading>
          {showMenu && 
            <PopUp 
              handleDelete={()=>{
                console.log('deleted');
              }}
              handleEdit={()=>{
                console.log('edit')
              }}
            />
          }
          {text  && 
            <Paragrapth size='large'>{text}</Paragrapth>
          }
          
          <SubTasks/>
          <Select/>
        </Form>
    </Container>
  )
}

export default SingleTask