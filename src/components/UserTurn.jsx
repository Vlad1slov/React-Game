import Paper from "../UI/Paper";
import Rock from "../UI/Rock";
import Scissors from "../UI/Scissors";

const UserTurn = ({ setComputerMove, setPlayerMove }) => {
    return (
        <div>
            <Rock
                setComputerMove={setComputerMove}
                setPlayerMove={setPlayerMove}
            />
            <Paper
                setComputerMove={setComputerMove}
                setPlayerMove={setPlayerMove}
            />
            <Scissors
                setComputerMove={setComputerMove}
                setPlayerMove={setPlayerMove}
            />
        </div>
    );
};

export default UserTurn;
