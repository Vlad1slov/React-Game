const ResetButton = ({ setScore, setResult }) => {
    return (
        <div>
            <button
                className="reset-score-button"
                onClick={() => {
                    setScore({
                        wins: 0,
                        losses: 0,
                        ties: 0,
                    });
                    setResult("");
                }}
            >
                Reset score
            </button>
        </div>
    );
};

export default ResetButton;
