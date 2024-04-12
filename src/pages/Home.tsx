import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Cardinfo } from "../Components/Cardinfo";



export const Home = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const Token = localStorage.getItem('token');
        console.log(Token);
        if (Token === null) {
            navigate('/');
        }
    }, []);
    return (
        <main className="w-full mx-auto container px-4 sm:max-xl:  md:max-w-1xl">
            <section>
                <div className="flex justify-center">
                    <Cardinfo />
                </div>
            </section>
        </main>
    )
}
