import { useState, useEffect } from "react";
import "./App.css";
import ResetButton from "./UI/ResetButton";
import UserScore from "./components/UserScore";
import UserTurn from "./components/UserTurn";
import MoveInfo from "./components/MoveInfo";

function App() {
    const [score, setScore] = useState({
        wins: 0,
        losses: 0,
        ties: 0,
    });
    const [result, setResult] = useState("");
    const [computerMove, setComputerMove] = useState("");
    const [playerMove, setPlayerMove] = useState("");
    const [checkDouble, setCheckDouble] = useState(0);

    useEffect(() => {
        if (playerMove !== "" && computerMove !== "") {
            if (playerMove === "scissors") {
                if (computerMove === "rock") {
                    setResult("You lose.");
                    setScore((prevScore) => ({
                        ...prevScore,
                        losses: prevScore.losses + 1,
                    }));
                } else if (computerMove === "paper") {
                    setResult("You win!");
                    setScore((prevScore) => ({
                        ...prevScore,
                        wins: prevScore.wins + 1,
                    }));
                } else if (computerMove === "scissors") {
                    setResult("Tie.");
                    setScore((prevScore) => ({
                        ...prevScore,
                        ties: prevScore.ties + 1,
                    }));
                }
            } else if (playerMove === "paper") {
                if (computerMove === "rock") {
                    setResult("You win!");
                    setScore((prevScore) => ({
                        ...prevScore,
                        wins: prevScore.wins + 1,
                    }));
                } else if (computerMove === "paper") {
                    setResult("Tie.");
                    setScore((prevScore) => ({
                        ...prevScore,
                        ties: prevScore.ties + 1,
                    }));
                } else if (computerMove === "scissors") {
                    setResult("You lose.");
                    setScore((prevScore) => ({
                        ...prevScore,
                        losses: prevScore.losses + 1,
                    }));
                }
            } else if (playerMove === "rock") {
                if (computerMove === "rock") {
                    setResult("Tie.");
                    setScore((prevScore) => ({
                        ...prevScore,
                        ties: prevScore.ties + 1,
                    }));
                } else if (computerMove === "paper") {
                    setResult("You lose.");
                    setScore((prevScore) => ({
                        ...prevScore,
                        losses: prevScore.losses + 1,
                    }));
                } else if (computerMove === "scissors") {
                    setResult("You win!");
                    setScore((prevScore) => ({
                        ...prevScore,
                        wins: prevScore.wins + 1,
                    }));
                }
            }
        }
    }, [playerMove, computerMove, checkDouble]);

    // useEffect(() => {

    // }, [result]);

    return (
        <div className="App">
            <h1>Rock Paper Scissors</h1>
            <UserTurn
                setCheckDouble={setCheckDouble}
                setComputerMove={setComputerMove}
                setPlayerMove={setPlayerMove}
            />
            <MoveInfo
                result={result}
                computerMove={computerMove}
                playerMove={playerMove}
            />
            <UserScore score={score} />
            <ResetButton setScore={setScore} setResult={setResult} />
        </div>
    );
}

export default App;
