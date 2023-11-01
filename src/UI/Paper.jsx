import paperImg from "../images/paper-emoji.png";
import pickComputerMove from "../modules/computerPick.module";

const Paper = ({ setComputerMove, setPlayerMove }) => {
    return (
        <button
            className="move-button"
            onClick={() => {
                setPlayerMove("paper");
                setComputerMove(pickComputerMove());
            }}
        >
            <img src={paperImg} className="move-icon" />
        </button>
    );
};

export default Paper;
