const ResetButton = ({ setScore }) => {
    return (
        <div>
            <button
                className="reset-score-button"
                onClick={() =>
                    setScore({
                        wins: 0,
                        losses: 0,
                        ties: 0,
                    })
                }
            >
                Reset score
            </button>
        </div>
    );
};

export default ResetButton;
