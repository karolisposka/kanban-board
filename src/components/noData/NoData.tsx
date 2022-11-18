import React from 'react';
import * as S from './NoData.styles';
import {useNavigate} from 'react-router-dom';


const NoData = () => {
    const navigate = useNavigate();
    return (
        <S.Container>
            <S.Text>This board is empty. Create a new column to get started</S.Text>
            <S.AddColumnBtn disabled={false} text='+ Add New Column' handleClick={()=>{
                navigate('/edit');
            }}/>
        </S.Container>
    )
}

export default NoData