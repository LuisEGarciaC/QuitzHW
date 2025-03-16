import { useState } from "react";

const Buscador = ({ data }) => {
	const [searchTerm, setSearchTerm] = useState("");

	const handleSearch = (event) => {
		setSearchTerm(event.target.value);
	};

	const filteredData = data.filter(
		(item) =>
			item.pregunta.toLowerCase().includes(searchTerm.toLowerCase()) ||
			item.respuesta.toLowerCase().includes(searchTerm.toLowerCase())
	);
	console.log(filteredData);
	return (
		<div className="container">
			<input
				type="text"
				placeholder="Buscar..."
				value={searchTerm}
				onChange={handleSearch}
				className="form-control"
			/>
			<table className="table table-striped table-hover mt-5 shadow-lg">
				<thead>
					<tr className="bg-curso text-white">
						<th>#</th>
						<th>NAME</th>
						<th>USER NAME</th>
					</tr>
				</thead>
				<tbody>
					{filteredData.map((item) => (
						<tr key={item.id}>
							<td>{item.id}</td>
							<td>{item.pregunta}</td>
							<td>{item.respuesta}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Buscador;
