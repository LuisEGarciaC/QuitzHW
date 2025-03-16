import Buscador from "./components/buscador";
import data from "./data/data.json";

function App() {
	return (
		<>
			<div className="container">
				<h1>Buscador en Vivo de Preguntas de HERO WARS VER 0.25 </h1>
				<Buscador data={data} />
			</div>
		</>
	);
}

export default App;
