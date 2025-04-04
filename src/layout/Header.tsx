import React, { useState, useEffect, useRef } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import '../styles/layout/Header.scss';
import { Link, useLocation } from "react-router";
import Input from '../components/Input';
import { FaSun, FaMoon, FaAlignJustify, FaTimes } from "react-icons/fa";


const Header: React.FC = () => {

    // refresh página

    useEffect(() => {
        const detectManualRefresh = () => {
          if (window.performance) {
            const navigation = performance.getEntriesByType('navigation');
            if (navigation.length > 0 && (navigation[0] as PerformanceNavigationTiming).type === 'reload') {
              return true;
            }
            // Fallback para navegadores antigos
            if (performance.navigation && performance.navigation.type === 1) {
              return true;
            }
          }
          return false;
        };
    
        const isManualRefresh = detectManualRefresh();
        if (isManualRefresh && window.location.pathname !== '/') {
          console.log('Refresh manual detectado. Redirecionando para a raiz.');
          window.location.href = '/';
        }
      }, []);

    // input search 

    const [query, setQuery] = useState('');

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (query.trim() !== '') {
            // Redireciona para o Google
            window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
        }
        setQuery('');
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSearch(e as unknown as React.FormEvent<HTMLFormElement>);
        }
    };


    // Scrool header

    const [isVisible, setIsVisible] = useState(true);
    const lastScrollYRef = useRef(0);

    useEffect(() => {

        lastScrollYRef.current = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;



            if (currentScrollY < lastScrollYRef.current) {

                setIsVisible(true);

            } else if (currentScrollY > lastScrollYRef.current) {

                setIsVisible(false);
            }

            lastScrollYRef.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    //toggle btn responsive

    const [isActive, setIsActive] = useState(false);

    const toggleModal = () => {
        setIsActive(!isActive);
    };

    // Alternância de temas

    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    // Campo Ativo


    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);

    useEffect(() => {
        console.log("Atualizando activeLink:", location.pathname);
        setActiveLink(location.pathname)
    }, [location.pathname])

    interface Link {
        path: string,
        label: string
    }



    const links: Link[] = [
        { path: '/', label: 'Energia' },
        { path: '/eletrica', label: 'Elétrica' },
        { path: '/mecanica', label: 'Mecânica' },
        { path: '/quimica', label: 'Química' },
        { path: '/termica', label: 'Térmica' },
        { path: '/nuclear', label: 'Nuclear' },
        { path: '/optica', label: 'Óptica' },
        { path: '/acustica', label: 'Acústica' },
    ];

    return (
        <header style={{
            transform: isVisible ? "translateY(0)" : "translateY(-100%)",
            transition: "transform 0.5s ease-in-out"
        }}>
            <nav className='header-nav'>
                <ul className={`header-ul ${isActive ? 'active' : ''}`}>
                    {links.map((link, index) => (
                        <li key={index}>
                            <Link
                                to={link.path}
                                className={activeLink === link.path ? 'active' : ''}                    >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>


                <div className="header-model">
                    <button className='btn-theme' onClick={toggleTheme}>
                        {theme === 'light' ? <FaSun /> : <FaMoon />}
                    </button>

                    <Input
                        placeholder={'Para mais informações... '}
                        onsubmit={handleSearch}
                        onkeydown={handleKeyDown}
                        value={query}
                        onchange={(e) => setQuery(e.target.value)}
                        type='text' />

                </div>

                <div className="icon-bar" onClick={toggleModal}>
                    {isActive ? <FaTimes /> : <FaAlignJustify />}
                </div>

            </nav>

            <Breadcrumb />


        </header>
    )
}



export default Header