import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

function Greeting() {
	return (
		//Asi regresamos el componente en caso de querer mas de no del mismo nivel al nivel cero
		<React.Fragment> // Análogo a esto podemos usar solo los brackets <></>
			<p>Este es mi primer componente</p>
			<p>Este es otro</p>
		</React.Fragment>
	)
}

// dentro de los elementos jsx podemos usar para el click, onClick, 



ReactDOM.render(
	<React.StrictMode>
	  <App />
	</React.StrictMode>,
	document.getElementById('root')
  );

// Esto es mucho texto
// const Greeting = () => {
// 	return React.createElement('p', {}, "Este es mi primer componente")
// }