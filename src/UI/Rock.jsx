import rockImg from "../images/rock-emoji.png";
import pickComputerMove from "../modules/computerPick.module";

const Rock = ({ setComputerMove, setPlayerMove, setCheckDouble }) => {
    return (
        <button
            className="move-button"
            onClick={() => {
                setPlayerMove("rock");
                setComputerMove(pickComputerMove());
                setCheckDouble((a) => a + 1);
            }}
        >
            <img src={rockImg} className="move-icon" />
        </button>
    );
};

export default Rock;
