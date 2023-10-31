import Paper from "../UI/Paper";
import Rock from "../UI/Rock";
import Scissors from "../UI/Scissors";

const UserTurn = ({ getResult, setPlayerMove }) => {
    return (
        <div>
            <Rock getResult={getResult} setPlayerMove={setPlayerMove} />
            <Paper getResult={getResult} setPlayerMove={setPlayerMove} />
            <Scissors getResult={getResult} setPlayerMove={setPlayerMove} />
        </div>
    );
};

export default UserTurn;
