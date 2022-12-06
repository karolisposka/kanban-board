import React, {useState} from 'react';
import * as S from './BoardForm.styles';
import Input from '../input/Input';



type column = {
    id: number,
    value: string,
}

const BoardForm = () => {
    const [columns, setColumns] = useState<column[]>([
        {
            value: 'todo',
            id: 1
        },
        {
            value: 'doing',
            id: 2
        }
    ]);



    const addNewColumn : () => void = () => {
        const randomId = Math.floor(Math.random()*10000000);
        setColumns(columns.length < 4  ?  [...columns, { id: randomId, value: ''}] : columns);
    };

    const deleteColumn = (id: number) => {
        setColumns(columns.filter(column => column.id !== id));
    }

    const updateValue = (id: number, input: string) => {
        setColumns(columns.map(column => {
            if(column.id == id){
                return {...column, value: input}
            } else {
                return column
            }
        }))
    }

  return (
    <S.Form>
        <S.Title> Add new board </S.Title>
        <Input 
            name='boardname'
            type='text'
            label='board name'
            placeholder='e.g Web Design'
        />
        <S.BoardColumns>
            <S.Label>Board Columns</S.Label>
            {columns && columns.map((column) => (
                <Input 
                    name={column.value}
                    key={column.id}
                    type='text'
                    placeholder={column.value}
                    icon={true}
                    value={column.value}
                    handleDelete={()=>{deleteColumn(column.id)}}
                    handleChange={(event) => updateValue(column.id, event.currentTarget.value)}
                 />
            ))}
            <S.NewColumnBtn
                type='button'
                disabled={false}
                handleClick={()=>{
                    addNewColumn();
                }}
                text='+ add new column'
            />
        </S.BoardColumns>
        
        <S.SubmitBtn  
            disabled={false}
            handleClick={()=>{
                console.log('cool')
            }}
            text='create new board'
        />
    </S.Form>
  )
}

export default BoardForm