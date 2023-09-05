import style from "./Table.module.css"

const formatter = new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD",
	minimumFractionDigits: 2,
	maximumFractionDigits: 2
});

const Table = props => {



	return (
		<table className={style.result}>
        	<thead>
          		<tr>
            	<th>Year</th>
            	<th>Total Savings</th>
            	<th>Interest (Year)</th>
            	<th>Total Interest</th>
            	<th>Invested Capital</th>
          	</tr>
        	</thead>
        <tbody>
			{props.data.map(item => (
			<tr key={item.year}>
            	<td>{item.year}</td>
            	
            	<td>{formatter.format(item.savingsEndOfYear)}</td>
				<td>{formatter.format(item.yearlyInterest)}</td>
            	<td>{formatter.format(item.savingsEndOfYear - props.initialEnvest - item.yearlyContribution * item.year)}</td>
            	<td>{formatter.format(props.initialEnvest + item.yearlyContribution * item.year)}</td>
          	</tr>
			)	
			)}
          
        </tbody>
      </table>
	)
}

export default Table