import React from 'react';
import * as S from './NoData.styles';



type props = {
    click: () => void,
}

const NoData = ({click}: props) => {
    return (
        <S.Container>
            <S.Text>This board is empty. Create a new column to get started</S.Text>
            <S.AddColumnBtn 
                disabled={false}
                text='+ Add New Column'
                handleClick={click}
            />
        </S.Container>
    )
}

export default NoData