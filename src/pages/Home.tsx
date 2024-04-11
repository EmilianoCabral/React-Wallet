import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
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
        <div className="w-full mx-auto container px-4 sm:max-xl:  md:max-w-1xl">
            <Header />
                <main className="flex justify-center">
                    <Cardinfo />
                </main>
            <Footer />
        </div>
    )
}
