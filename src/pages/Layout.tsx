import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { dataContext, themeContext } from '../context';
import { darkTheme, lightTheme } from '../theme';
import { Outlet } from 'react-router-dom';
import {link} from '../models';
import Header from '../components/header/Header';
import Sidebar from '../components/sidebar/Sidebar';
import Container from '../components/container/Container';
import ShowSidebar from '../components/showSidebar/ShowSidebar';

const Layout = () => {
    const navigate = useNavigate();
    const [theme, setTheme] = useState<string>('dark');
    const [paths, setPaths] = useState<link[]>([
        {path: '/platform', text: 'platform'},
        {path: '/roadmap', text: 'roadmap'},
        {path: '/marketing', text: 'marketing plan'}
    ]);
    const [data, setData] = useState<number>(0);
    const [chevronClicked, setChevronClicked] = useState<boolean>(false);
    const [show, setShow] = useState<boolean>(false);

    //temporary solution to navigate user to first board

    useEffect(()=>{
        if(paths){
            navigate(paths[0].path)
        }else{
            return
        }
    },[])

    return (
        <>
        <dataContext.Provider value={[data, setData]}>
            <themeContext.Provider value={[theme, setTheme]}>
                <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
                    <Container style={{position: 'relative'}}>
                        <Header 
                            chevronClicked={chevronClicked}
                            setChevronClicked={setChevronClicked}
                            columnsLength={data}
                        />
                        <Container style={{display:'flex'}}>
                            <Sidebar 
                                show={show}
                                links={paths}
                                handleClose={()=>{
                                setShow(false);
                                }}
                            />
                            <Outlet/>
                        </Container>
                        <ShowSidebar 
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