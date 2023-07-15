// Navigation bar displayed at the top
import { useNavigate } from 'react-router-dom';

function NavBar() {
    const navigate = useNavigate();

    return (
        <nav className="bg-blue-600 hover:bg-blue-900 p-4 text-center text-white cursor-pointer font-semibold" onClick={() => navigate('/')}>
            U4Ea
        </nav>
    );
}

export default NavBar;
