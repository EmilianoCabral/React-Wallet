import axios from "axios";
import { useState } from "react"
import  {useNavigate} from "react-router-dom"


export const LogIn = () => {
    const [username, setUsername] = useState ("");
    const [password, setPassword] = useState ("");
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate()

    const handleSubmit =  async (e) => {
        e.preventDefault();
        if (!username || !password) {
            setError('por favor, completa todos los campos.');
            return;
        }
        setIsLoading(true);
        try {
            const response = await axios.post<{ token: string }>('http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/auth/login', {
                username,
                password
            }); 
            console.log('respuestas del servidor', response.data);

            const userData = {
                username,
                token: response.data.token
            };
            localStorage.setItem('userData', JSON.stringify(userData));
            navigate('/')
        } catch (error) {
            console.error('Error al iniciar sesión:', error.response.data);
            setError('Credenciales incorrectas. Por favor, intenta de nuevo.');
        }
        setIsLoading(false);
    };
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    className="mx-auto mx-60px h-10 w-auto"
                    src="./src/assets/Banck.svg"
                    alt="RedWallet"
                />
                <h2 className=" mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Sign in to your account
                </h2>
            </div>
            <div className="mt-10 max-w-96 h-96 sm:mx-auto sm:w-full sm:max-w-sm bg-white px-8 py-8 shadow-lg rounded-lg">
                <form onSubmit={handleSubmit} className="space-y-6" action="#" method="POST">
                    <div>
                        <label htmlFor="email" className=" block text-sm font-medium leading-6 text-gray-900">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                placeholder="username"
                                onChange={(e) => setUsername(e.target.value)}
                                value={username}
                                id="email"
                                name="username"
                                type="email"
                                autoComplete="email"
                                required
                                className="p-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" 
                            className="block text-sm font-medium leading-6 text-gray-900">
                                Password
                            </label>
                            <div className="text-sm">
                                <a 
                                    href="#" 
                                    className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Forgot password?
                                </a>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input
                            placeholder="password"
                            onChange={(e) => setPassword (e.target.value)}
                            value={password}
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="p-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            disabled={isLoading}
                            type="submit"
                            className="flex w-full justify-center rounded-md
                            bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            {isLoading ? 'Cargando...' : 'Sign in'}
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Not a member?{' '}
                    <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        Start a 14 day free trial
                    </a>
                </p>
            </div>
        </div>
    )
}
