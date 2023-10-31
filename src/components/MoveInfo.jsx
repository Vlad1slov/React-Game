const MoveInfo = ({ result, computerMove, playerMove }) => {
    return (
        <div>
            <h3>{`${result}
            You ${playerMove} - ${computerMove} Computer
            `}</h3>
        </div>
    );
};

export default MoveInfo;
