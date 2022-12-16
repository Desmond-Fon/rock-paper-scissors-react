import logo from '../assets/images/logo.svg'

const Header = ({score}) => {
    return ( <div className='mx-6 pt-6 pb-3'>
        <div className="border-[3px] rounded-md  border-gray-500 h-full p-3 flex justify-between items-center">
    <div className="ml-2">
    <img src={logo} alt="logo" className='h-[50px]' />
    </div>

    <div className="bg-white p-2 rounded-md text-center w-[60px]">
        <p className="text-score-text text-[9px]">SCORE</p>
        <p className="text-radical-gradient-from text-2xl font-extrabold">{score}</p>
    </div>
    </div>
    </div> );
}
 
export default Header;