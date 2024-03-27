import axios from "axios";
import Swal from 'sweetalert2'


axios

export const LogIn = () => {
    const handleSubmit = (e) =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            if (email === '' || password === '') {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "fields must not be empty!",
                });
            };
            if (email !== '' && !regexEmail.test(email)) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "fields must not be empty!",
                });
            };
            if (email !== 'juanperez@example.com' || password !== 'abc123') {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "invalid credentials!",
                });
            }
            axios.post('http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/auth/login', {email,password})
            .then(res => {
                Swal.fire({
                    icon: "success",
                    title: "be logged in successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                console.log(res.data);
                const tokenRecibido = res.data.token;
                localStorage.setItem('token', tokenRecibido)
            })
    }
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
                <form onSubmit={handleSubmit}  className="space-y-6" action="#" method="POST">
                    <div>
                        <label htmlFor="email" className=" block text-sm font-medium leading-6 text-gray-900">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                placeholder="username"
                                id="email"
                                type="email"
                                autoComplete="email"
                                name="email"
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
                                id="password"
                                type="password"
                                autoComplete="current-password"
                                name="password"
                                className="p-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md
                            bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Sign in
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
