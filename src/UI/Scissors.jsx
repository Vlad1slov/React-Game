import scissorImg from "../images/scissors-emoji.png";

const Scissors = ({ getResult, setPlayerMove }) => {
    return (
        <button
            className="move-button"
            onClick={() => {
                getResult("scissors");
                setPlayerMove("scissors");
            }}
        >
            <img src={scissorImg} className="move-icon" />
        </button>
    );
};

export default Scissors;
