import React from 'react'
import Game from '../Game/Game'
import './GameList.css';

interface Game {
    id: number;
    gameName: string;
    shortName: string;
    shortDescription: string;
    genre: string;
    price: number;
}

interface Props {
    games: Game[];
}

const CardList: React.FC<Props> = ({games}: Props): JSX.Element => {
  return (
    <div className='game-list'>
        {games.map((game) => (
            <Game
                id={game.id}
                gameName={game.gameName}
                shortName={game.shortName}
                shortDescription={game.shortDescription}
                genre={game.genre}
                price={game.price}
            />
        ))}
    </div>
  )
}

export default CardList;