import React, {useState} from 'react';
import * as S from './Header.styles';
import {ReactComponent as Icon} from '../../assets/logo-mobile.svg';

const test: number = 1;

const Header: React.FC = () => {
    const [chevronClicked, setChevronClicked] = useState<boolean>(false);
    const handleClick = () => {
        setChevronClicked(!chevronClicked); 
    }

    return (
        <S.Header>
            <S.Section>
                <S.LogoWrapper>
                    <Icon/>
                    <S.Title>Platform Launch</S.Title>
                    <S.Chevron onClick={()=>{
                        handleClick();
                    }}/> 
                </S.LogoWrapper>
                <S.ButtonsWrapper>
                    <S.AddBtn disabled={test === 1 ? true : false} handleClick={()=>{
                        console.log('sveiki');
                    }} text='+'/>
                    <S.AddBtnWide disabled={test === 1 ? true : false} handleClick={()=>{
                        console.log('sveiki');
                    }} text='+ Add New Task'/>
                    <S.StyledEllipsis/>
                </S.ButtonsWrapper>
            </S.Section>
        </S.Header>
    )
}

export default Header