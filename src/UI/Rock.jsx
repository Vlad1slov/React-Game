import rockImg from "../images/rock-emoji.png";

const Rock = ({ getResult, setPlayerMove }) => {
    return (
        <button
            className="move-button"
            onClick={() => {
                getResult("rock");
                setPlayerMove("rock");
            }}
        >
            <img src={rockImg} className="move-icon" />
        </button>
    );
};

export default Rock;
