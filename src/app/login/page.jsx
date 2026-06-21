"use client"

import {useState, useEffect} from "react"
import {supabase} from "@/lib/supabase"
import {useRouter} from "next/navigation"

export default function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter();

    const iniciarSesion = async (e) => {

        e.preventDefault();

        const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
        });

        if (error) {

        alert("Correo o contraseña incorrectos");

        } else {

        router.push("/admin");

        }

    };

    useEffect(() => {

        const verificarSesion = async () => {

            const { data } = await supabase.auth.getSession();

            if (data.session) {

                router.push("/admin");

            }

        };

        verificarSesion();

    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center">

        <div className="bg-gray-900 p-8 rounded-lg w-full max-w-md">

            <h1 className="text-3xl font-bold mb-6 text-center">
            Login Administrador
            </h1>

            <form
            onSubmit={iniciarSesion}
            className="space-y-4"
            >

                <input
                    type="email"
                    placeholder="Correo"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 border rounded"
                />

                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-3 border rounded"
                />

                <button
                    type="submit"
                    className="w-full bg-blue-600 py-3 rounded"
                >
                    Ingresar
                </button>

            </form>

        </div>

        </div>
    );
}