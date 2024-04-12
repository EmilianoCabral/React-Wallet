import { useState } from 'react';
import Swal from 'sweetalert2';
import axios, { AxiosError } from 'axios';
import { useNavigate } from "react-router-dom";

export const Usercreate = () => {
    const [newUser, setNewUser] = useState({
        name: '',
        email: '',
        password: '',
    });

    const navigate = useNavigate();

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setNewUser(prevUser => ({
            ...prevUser,
            [name]: value
        }));
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (newUser.email === '' || newUser.password === '') {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Fields must not be empty!",
            });
            return;
        }

        if (!regexEmail.test(newUser.email)) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please enter a valid email address!",
            });
            return;
        }

        try {
            const response = await axios.post('http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/users', newUser);
            Swal.fire({
                icon: "success",
                title: "User created successfully",
                showConfirmButton: false,
                timer: 1500
            });
            navigate("/");
            console.log('Usuario creado exitosamente:', response.data);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const axiosError = error as AxiosError;
                if (axiosError.response) {
                    console.error('Status code:', axiosError.response.status);
                    console.error('Error details:', axiosError.response.data);
                }
            } else {
                console.error('Error:', error);
            }
        }
    };

    return (
        <div className="flex min-h-full h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    className="mx-auto mx-60px h-10 w-auto"
                    src="./src/assets/Banck.svg"
                    alt="RedWallet"
                />
                <h2 className=" mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-indigo-600">
                    User create
                </h2>
            </div>
            <section className="mt-10 max-w-96 h-96 sm:mx-auto sm:w-full sm:max-w-sm bg-white px-8 py-8 shadow-lg rounded-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                        <input
                            onChange={handleChange}
                            value={newUser.email}
                            id="email"
                            name="email"
                            type="email"
                            className="grow"
                            placeholder="Email"
                        />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                        <input
                            onChange={handleChange}
                            value={newUser.password}
                            id="password"
                            name="password"
                            type="password"
                            className="grow"
                            placeholder="Password"
                        />
                    </label>
                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md
                            bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Create
                        </button>
                    </div>
                </form>
            </section>
        </div>
    )
}
