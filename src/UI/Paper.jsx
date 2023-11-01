import paperImg from "../images/paper-emoji.png";
import pickComputerMove from "../modules/computerPick.module";

const Paper = ({ setComputerMove, setPlayerMove, setCheckDouble }) => {
    return (
        <button
            className="move-button"
            onClick={() => {
                setPlayerMove("paper");
                setComputerMove(pickComputerMove());
                setCheckDouble((a) => a + 1);
            }}
        >
            <img src={paperImg} className="move-icon" />
        </button>
    );
};

export default Paper;
