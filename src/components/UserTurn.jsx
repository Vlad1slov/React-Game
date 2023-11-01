import Paper from "../UI/Paper";
import Rock from "../UI/Rock";
import Scissors from "../UI/Scissors";

const UserTurn = ({ setComputerMove, setPlayerMove, setCheckDouble }) => {
    return (
        <div>
            <Rock
                setCheckDouble={setCheckDouble}
                setComputerMove={setComputerMove}
                setPlayerMove={setPlayerMove}
            />
            <Paper
                setCheckDouble={setCheckDouble}
                setComputerMove={setComputerMove}
                setPlayerMove={setPlayerMove}
            />
            <Scissors
                setCheckDouble={setCheckDouble}
                setComputerMove={setComputerMove}
                setPlayerMove={setPlayerMove}
            />
        </div>
    );
};

export default UserTurn;
