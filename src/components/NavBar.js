import { useNavigate } from 'react-router-dom';

function NavBar() {
    const navigate = useNavigate();

    return (
        <nav className="bg-gray-800 p-4 text-center text-white cursor-pointer" onClick={() => navigate('/')}>
            U4Ea
        </nav>
    );
}

export default NavBar;
