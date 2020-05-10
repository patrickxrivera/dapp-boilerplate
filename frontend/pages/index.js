import { useEffect, useState } from "react";
import greeter from "../contracts/Greeter";

const Home = () => {
    const [greeting, setGreeting] = useState("");

    useEffect(() => {
        const greet = async () => {
            const greeting = await greeter.methods.greet().call();
            setGreeting(greeting);
        };

        greet();
    });

    return (
        <div>
            <h1>Greeting:</h1>
            <p>{greeting}</p>
        </div>
    );
};

export default Home;
