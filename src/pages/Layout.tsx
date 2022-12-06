import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { dataContext, themeContext } from '../context';
import { darkTheme, lightTheme } from '../theme';
import { useFetch } from '../hooks';
import { Outlet } from 'react-router-dom';
import {link, board} from '../models';
import Header from '../components/header/Header';
import Sidebar from '../components/sidebar/Sidebar';
import MobileMenu from '../components/mobileMenu/MobileMenu';
import Container from '../components/container/Container';
import ShowSidebar from '../components/showSidebar/ShowSidebar';

type data = {
    boards: board[] | any;
}

const Layout = () => {
    const path = useParams();
    const board = Number(path.page);
    const navigate = useNavigate();
    const [theme, setTheme] = useState<string>('dark');
    const [show, setShow] = useState<boolean>(false);

    const {query, error} = useFetch();
    
    const [paths, setPaths] = useState<link[]>([
        {path: '/0', text: 'platform'},
        {path: '/1', text: 'roadmap'},
        {path: '/2', text: 'marketing plan'},
        {path: `/1/new`, text: '+ create new board'}
    ]);

    useEffect(()=>{
        if(paths){
            navigate(paths[0].path);
        }else{
            return
        }
    },[]);
    


    const toggleTheme = () => {
        if(theme === 'light'){
            setTheme('dark')
        }else{
            setTheme('light')
        }
    }

    return (
        <>
        <dataContext.Provider value={[query]}>
            <themeContext.Provider value={[theme, setTheme]}>
                <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
                    <Container style={{position: 'relative'}}>
                        <Header 
                            board={'Platform Launch'}
                            show={show}
                            handleClick={()=>{
                                setShow(!show)
                            }}
                        />
                        <Container style={{display:'flex', minHeight:'calc(100vh -72px)'}}>
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