
import style from "./Header.module.css"

const Header = props => {
	return (
		<header  className={style.header}>
        <img src={props.img} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>
	)
} 

export default Header