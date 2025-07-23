import { useState, useEffect } from "react";

export default function Timer(){
    const [time, setTime] = useState(10);

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(prevTime => {
                if (prevTime <= 1) {
                    clearInterval(timer);
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div>
            <h1>{time} {time == 0 ? alert("Time's up!") : ""}</h1>
        </div>
    )
}