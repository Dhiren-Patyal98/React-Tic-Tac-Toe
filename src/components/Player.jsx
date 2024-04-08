import PropTypes from 'prop-types';
import { useState } from 'react';

const Player = ({ initialName, symbol, isActive, onChangeName }) => {
    const [playerName, setplayerName] = useState(initialName);
    const [isEditing, setisEditing] = useState(false);

    function handleEditClick() {
        setisEditing((editing) => !editing);
        if (isEditing) {
            onChangeName(symbol, playerName);
        }
    }

    function handleChange(event) {
        setplayerName(event.target.value);
    }

    let editableplayerName = <span className='player-name'>{playerName}</span>;

    if (isEditing) {
        editableplayerName = (
            <input type="text" required value={playerName} onChange={handleChange} />
        );
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editableplayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}

Player.propTypes = {
    initialName: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    onChangeName: PropTypes.func.isRequired
};

export default Player;
