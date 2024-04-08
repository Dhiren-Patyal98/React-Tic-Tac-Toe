
import PropTypes from 'prop-types';

const GameBoard = ({ onSelectSquare, board }) => {
    return (
        <div>
            <ol id="game-board">
                {board.map((row, rowIndex) => <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => <li key={colIndex}>
                            <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null}>{playerSymbol}</button></li>)}
                    </ol>
                </li>)}
            </ol>
        </div>
    );
}

GameBoard.propTypes = {
  onSelectSquare: PropTypes.func.isRequired,
  board: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
  ).isRequired
};

export default GameBoard;
