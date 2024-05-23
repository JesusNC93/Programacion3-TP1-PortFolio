import React from 'react';
import miFoto from "../assets/miFoto.jpg";
import Puar1 from "../assets/Puar1.jpg";
import "../css/Main.css";

const Main = () => {

    const Alumno = {
        nombre: "Jesús Nicolás",
        apellido: "Caram",
        edad: 30,
        hobby: "Jugar Budokai Tenkaichi 3",
        direccion: "Marcos Paz 1962",
        Tel: "3815120616",
        estadoCivil: "Soltero",
        legajo: "47121",
        comision: "2"
    };

    const Gato = {
        nombre: "Puar",
        edad: "10",
        hobby: "Dormir, comer y jugar",
        estadoCivil: "Es Complicado"
    };

    const Skills = ["C#", "Sql ,Server", "Html", "Css", "Javascript", "Json", "MySql", "React"]

    return (
        <div className='main'>
            <div className="container" style={{ backgroundColor: "aquamarine" }}>
                <div className="row">
                    <div className="col-6">
                        <br />
                        <br />
                        <h1>Mi nombre es: {Alumno.nombre} {Alumno.apellido}</h1>
                        <br />
                        <br />
                        <br />
                        <h4>Estudiante de la carrera de Programacion en la UTN FRT</h4>
                        <br />

                        <div className="row">
                            <div className="col-3"></div>
                            <div className="col-6">
                                <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                                    <li>Teléfono: {Alumno.Tel}</li>
                                    <li>Dirección: {Alumno.direccion}</li>
                                    <li>Edad: {Alumno.edad}</li>
                                    <li>Hobby: {Alumno.hobby}</li>
                                    <li>Estado Civil: {Alumno.estadoCivil}</li>
                                    <li>Legajo: {Alumno.legajo}</li>
                                </ul>
                            </div>
                            <div className="col-3">
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-3'></div>
                            <div className='col-6'>

                                <br />
                                <br />
                                <h2>SKILLS</h2>
                                <ul>
                                    <il style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                                        {Skills.map((skill, index) => (
                                            <li key={index}>{skill}</li>
                                        ))}
                                    </il>
                                </ul>
                            </div>
                        </div>
                        <br />
                    </div>

                    <div className="col-6">
                        <br />
                        <br />
                        <br />
                        <img src={miFoto} alt="Mi Foto" width="250px" />
                    </div>
                </div>

                <div className="row" style={{ backgroundColor: "lightblue" }}>
                    <div className="col-6">
                        <br />
                        <br />
                        <br />
                        <h3>Este es mi gato</h3>
                        <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                            <li>Su nombre es: {Gato.nombre}</li>
                            <li>Edad: {Gato.edad}</li>
                            <li>Hobby: {Gato.hobby}</li>
                            <li>Estado Civil: {Gato.estadoCivil}</li>
                        </ul>
                    </div>

                    <div className="col-6">
                        <img src={Puar1} width="200px" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
