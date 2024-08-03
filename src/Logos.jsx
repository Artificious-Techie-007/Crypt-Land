import './styles.css';

function LogoComponent({logo, text}) {
    return(
        <div className='LogoComponentContainer'>
            <img alt='' src={logo} />
            <span>{text}</span>
        </div>
    );
}

export default LogoComponent;