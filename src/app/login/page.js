'use client';

import { useState } from 'react';
import { iniciarSesion } from '../actions/AuthActions';
import './Login.css';

export default function Login() {

    const [form, setForm] = useState({
        email: '',
        password: '',
        destino: '/productos'
    });

    const handleSubmit = async (e) => {

        e.preventDefault();

        const resultado = await iniciarSesion(form);

        if (resultado?.error) {
            alert(resultado.error);
            return;
        }

        alert(`Bienvenido: ${form.email}`);
    };

    return (
        <div className="login-container">

            <form className="login-form" onSubmit={handleSubmit}>

                <h1>Iniciar Sesión</h1>
                <p>Ingresa tus datos para continuar</p>

                <div className="input-group">

                    <label>Correo electrónico</label>

                    <input
                        type="email"
                        placeholder="ejemplo@correo.com"
                        value={form.email}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                email: e.target.value
                            })
                        }
                        required
                    />

                </div>

                <div className="input-group">

                    <label>Contraseña</label>

                    <input
                        type="password"
                        placeholder="Ingresa tu contraseña"
                        value={form.password}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                password: e.target.value
                            })
                        }
                        required
                    />

                </div>

                <div className="input-group">

                    <label>¿A dónde deseas ir?</label>

                    <select
                        value={form.destino}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                destino: e.target.value
                            })
                        }
                    >
                        <option value="/productos">
                            Productos
                        </option>

                        <option value="/contactos">
                            Contactos
                        </option>
                    </select>

                </div>

                <button type="submit">
                    Entrar
                </button>

                <a href="#">
                    ¿Olvidaste tu contraseña?
                </a>

            </form>

        </div>
    );
}