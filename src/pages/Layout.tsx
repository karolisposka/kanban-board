import React, {useState} from 'react';
import { ThemeProvider } from 'styled-components';
import { dataContext, themeContext } from '../context';
import { darkTheme, lightTheme } from '../theme';
import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
import SideBar from '../components/sideBar/SideBar';
import Container from '../components/container/Container';
import ShowSideBar from '../components/showSideBar/ShowSideBar';

const Layout = () => {
    const [theme, setTheme] = useState<string>('dark');
    const [data, setData] = useState<number>(0);
    const [chevronClicked, setChevronClicked] = useState<boolean>(false);
    const [show, setShow] = useState<boolean>(false);

    return (
        <>
        <dataContext.Provider value={[data, setData]}>
            <themeContext.Provider value={[theme, setTheme]}>
                <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
                    <Container style={{position: 'relative'}}>
                        <Header chevronClicked={chevronClicked} setChevronClicked={setChevronClicked} columnsLength={data}/>
                        <Container style={{display:'flex'}}>
                            <SideBar show={show}/>
                            <Outlet/>
                        </Container>
                        <ShowSideBar 
                            show={show} 
                            handleClick={()=>{
                            setShow(true);
                            }}
                        />
                    </Container>
                </ThemeProvider>
            </themeContext.Provider>
        </dataContext.Provider>
        </>
    )
}

export default Layout