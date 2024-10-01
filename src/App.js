import "./App.css";
import { useState, useEffect } from "react";

function App() {
	const [init, setInit] = useState(Number(15000));
	const [ann, setAnn] = useState(Number(900));
	const [expec, setExpec] = useState(Number(5.5));
	const [dur, setDur] = useState(Number(12));
	const [arr, setArr] = useState([]);
	//const [arr, setArr] = useState([{ year: 0, invest: 0, interest: 0, totInterest: 0, capital: init + ann }]);

	useEffect(() => {
		arrCalc();
	}, [init, ann, expec, dur]);

	function arrCalc() {
		setArr([]);
		let newArr = [];
		let init2 = init;
		for (let i = 0; i < dur; i++) {
			let inter = (init2 * expec) / 100;
			init2 += ann + (init2 * expec) / 100;
			let invesCap = init + ann + ann * i;
			let totInter = inter;

			newArr.push({ year: i + 1, invest: init2, interest: inter, totInterest: totInter, capital: invesCap });
		}
		setArr(newArr);
		//return arr;
	}

	return (
		<div>
			<h1 style={{display: 'flex', justifyContent: 'center'}}>Investment Calculator</h1>
			<div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", }}>
				<div>
					<h3>Initial Investment</h3>
					<input
						type="number"
						value={init}
						onChange={(e) => setInit(Number(e.target.value))}></input>
				</div>

				<div>
					<h3>Annual Investment</h3>
					<input
						value={ann}
						type="number"
						onChange={(e) => setAnn(Number(e.target.value))}></input>
				</div>

				<div>
					<h3>Expected Return (%)</h3>
					<input
						value={expec}
						type="number"
						onChange={(e) => setExpec(Number(e.target.value))}></input>
				</div>

				<div>
					<h3>Duration </h3>
					<input
						value={dur}
						type="number"
						onChange={(e) => setDur(Number(e.target.value))}></input>
				</div>
			</div>
			<h2 style={{display: 'flex', justifyContent: 'center'}}>Table</h2>
			<div>
				<div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
					<h3>Year</h3>
					<h3>Investment Value</h3>
					<h3>Interest (Year)</h3>
					<h3>Total Interest</h3>
					<h3>Invested Capital</h3>
				</div>
				{arr.map((single) => {
					return (
						<div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
							<h4>{Math.round(single.year)}</h4>
							<h4>{Math.round(single.invest)}</h4>
							<h4>{Math.round(single.interest)}</h4>
							<h4>{Math.round(single.totInterest)}</h4>
							<h4>{Math.round(single.capital)}</h4>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default App;
