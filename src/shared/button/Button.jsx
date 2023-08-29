import './button.css'

const Button = ({ text }) => {
    return (
        <button className='btn hover:text'> {text} </button>
    );
};

export default Button;