import scissorImg from "../images/scissors-emoji.png";
import pickComputerMove from "../modules/computerPick.module";

const Scissors = ({ setComputerMove, setPlayerMove, setCheckDouble }) => {
    return (
        <button
            className="move-button"
            onClick={() => {
                setPlayerMove("scissors");
                setComputerMove(pickComputerMove());
                setCheckDouble((a) => a + 1);
            }}
        >
            <img src={scissorImg} className="move-icon" />
        </button>
    );
};

export default Scissors;
