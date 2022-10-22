import React, { Component } from 'react';
import '../css/Testimonio.css'

// Utilizando clases
class Testimonio extends Component {
	render() {
		return (
			<div className='contenedor-testimonio'>
				<img className='imagen-testimonio'
				src={require(`../images/${this.props.imagen}.png`)}
				alt={`Foto de ${this.props.nombrecorto}`} />
				<div className="contenedor-texto-testimonio">
					<p className="nombre-testimonio">
						<strong>{this.props.nombre}</strong> en {this.props.pais}
					</p>
					<p className="cargo-testimonio">
						{this.props.cargo} en <strong>{this.props.empresa}</strong>
					</p>
					<p className="texto-testimonio">{this.props.testimonio}</p>
				</div>
			</div>
		);
	}
}

// Componente funcional
// function Testimonio(props) {
// 	return (
// 		<div className='contenedor-testimonio'>
// 			<img className='imagen-testimonio'
// 			src={require(`../imagenes/${props.imagen}.png`)}
// 			alt={`Foto de ${props.nombrecorto}`} />
// 			<div className="contenedor-texto-testimonio">
// 				<p className="nombre-testimonio">
// 					<strong>{props.nombre}</strong> en {props.pais}
// 				</p>
// 				<p className="cargo-testimonio">
// 					{props.cargo} en <strong>{props.empresa}</strong>
// 				</p>
// 				<p className="texto-testimonio">{props.testimonio}</p>
// 			</div>
// 		</div>
// 	);
// }

export default Testimonio;