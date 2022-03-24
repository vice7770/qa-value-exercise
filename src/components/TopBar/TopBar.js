import {
    FaSearch,
    FaHashtag,
    FaRegBell,
    FaUserCircle,
    FaMoon,
    FaSun,
} from 'react-icons/fa';
import useDarkMode from '../../hooks/useDarkMode';


function Topbar() {

    function ThemeIcon(){
        const [darkTheme, setDarkTheme] = useDarkMode();
        const handleMode = () => setDarkTheme(!darkTheme);
        
        return (
            <span onClick={handleMode}>
                {darkTheme ? (
                    <FaSun size='24' className='top-navigation-icon' />
                ) : (
                    <FaMoon size='24' className='top-navigation-icon' />
                )}
            </span>
        );
    };

    return(
        <div className='top-navigation'>
            <ThemeIcon />
        </div>
    );
};
  
export default Topbar;