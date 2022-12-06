import React from 'react'
import Container from '../components/absoluteContainer/Container';
import Form from '../components/form/Form';
import Input from '../components/input/Input';
import Textarea from '../components/textarea/Textarea';

const newTask = () => {
  return (
    <Container>
        <Form>
            <Input name='title' label='title' placeholder='e.g Take coffee break' value='xx' type='text' icon={false} handleChange={()=>{
                console.log('blabal')
            }}/>
            <Textarea label='description' value='' placeholder="e.g it's always good to take a break. This 15 minute break will recharge the batteries a little" handleChange={(event)=>{
                console.log(event);
            }}/>
            <div>
                <Input name='subtask' placeholder='e.g Take coffee break' value='xx' type='text' icon={true} handleChange={()=>{
                    console.log('blabal')
                }}/>
                <Input name='subtask' placeholder='e.g Take coffee break' value='xx' type='text' icon={true} handleChange={()=>{
                    console.log('blabal')
                }}/>
            </div>
        </Form>  
    </Container>
  )
}

export default newTask