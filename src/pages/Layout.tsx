import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { dataContext, themeContext } from '../context';
import { darkTheme, lightTheme } from '../theme';
import { Outlet } from 'react-router-dom';
import {link} from '../models';
import Header from '../components/header/Header';
import Sidebar from '../components/sidebar/Sidebar';
import MobileMenu from '../components/mobileMenu/MobileMenu';
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
    const [show, setShow] = useState<boolean>(false);

    const toggleTheme = () => {
        if(theme === 'light'){
            setTheme('dark')
        }else{
            setTheme('light')
        }
    }

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
                            show={show}
                            handleClick={()=>{
                                setShow(!show)
                            }}
                            columnsLength={data}
                        />
                        <Container style={{display:'flex'}}>
                            <Sidebar 
                                theme={theme}
                                show={show}
                                links={paths}
                                handleClose={()=>{
                                setShow(false);
                                }}
                                handleToggler={()=>{
                                    toggleTheme()
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
                         <MobileMenu 
                            links={paths}
                            theme={theme}
                            show={show}
                            handleToggle={()=>{
                                toggleTheme();
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