/* eslint-disable react/no-unescaped-entities */
import PropTypes from 'prop-types';

const GameOver = ({ winner, onRestart }) => {
    return (
        <div id="game-over">
            <h2>Game Over!</h2>
            {winner && <p>{winner} won!</p>}
            {!winner && <p>It's a draw!</p>}
            <p>
                <button onClick={onRestart}>Rematch!</button>
            </p>
        </div>
    );
}

GameOver.propTypes = {
    winner: PropTypes.string,
    onRestart: PropTypes.func.isRequired
};

export default GameOver;
