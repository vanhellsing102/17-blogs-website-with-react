import profile from '../../../images/profile.png'

const Header = () => {
    return (
        <header className='flex justify-between py-1 border-b items-center'> 
            <h1 className='text-3xl font-bol'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header; 