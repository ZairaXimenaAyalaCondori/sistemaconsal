import React, { useEffect, useState } from 'react'
import { ApiWebURL } from '../utils';

export default function Employees(props) {
    const [listaEmpleados, setListaEmpleados] = useState([]);

    useEffect(() => {
        leerServicio(props.servicioEmpleados);
    }, [props.servicioEmpleados]);

    const leerServicio = (id) => {
        const rutaServicio = ApiWebURL + "team.php?idservicio=" + id;
        fetch(rutaServicio)
            .then(response => response.json())
            .then(data => {
                setListaEmpleados(data);
            });
    }

    return (
        <section id='tableemployee' className='container'>
            <table class="table table-striped table-hover mx-auto">
                <thead>
                    <tr >
                        <th>IDEMPLOYEE</th>
                        <th>FULLNAME</th>
                        <th>EMAIL</th>
                        <th>INSTAGRAM</th>
                        <th className='styleborder'>PHONE</th>
                    </tr>
                </thead>
                <tbody>
                    {listaEmpleados.map(item =>
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.nombresapellidos}</td>
                            <td>{item.email}</td>
                            <td>{item.ig}</td>
                            <td className='styleborder'>{item.telefono}</td>
                        </tr>

                    )}

                </tbody>
            </table>
        </section>
    )
}
