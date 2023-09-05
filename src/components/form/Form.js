import {useState} from "react"
import style from "./form.module.css"

const Form = props => {
	

	const initialUserInput = {
		"current-savings": 10000,
		"yearly-contribution": 1200,
		"expected-return": 7,
		duration: 10
	};

	const [userInput, setUserInput] = useState(initialUserInput);

	function inputSavings(input, value) {
		setUserInput((prevInput) => {
			return {
				...prevInput,
				[input]: +value
			}
		})
	}

	const Reset = () => {
		setUserInput(initialUserInput);
	}

	function HandlerSubmit(e) {
		e.preventDefault();

		props.onCalculate(userInput);
	}

	return (
		<form className={style.form} onSubmit={HandlerSubmit}>
        <div className={style["input-group"]}>
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input 
				onChange={(e) => inputSavings("current-savings", e.target.value)}
				value={userInput["current-savings"]}
				type="number"
				id="current-savings" 
			/>
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input 
				onChange={(e) => inputSavings("yearly-contribution", e.target.value)}
				value={userInput["yearly-contribution"]}
				type="number"
				id="yearly-contribution"
			/>
          </p>
        </div>
        <div className={style["input-group"]}>
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input  
				onChange={(e) => inputSavings("expected-return", e.target.value)}
				value={userInput["expected-return"]}
				type="number"
				id="expected-return"
				/>
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input  
				onChange={(e) => inputSavings("duration", e.target.value)}
				value={userInput.duration}
				type="number"
				id="duration"
				/>
          </p>
        </div>
        <p className={style.actions}>
          <button type="reset" onClick={Reset}  className={style.buttonAlt}>
            Reset
          </button>
          <button type="submit" className={style.button}>
            Calculate
          </button>
        </p>
      </form>
	)
}

export default Form 