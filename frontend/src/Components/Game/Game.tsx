import React from "react";
import "./Game.css";
import "../PriceDisplay/PriceDisplay"
import PriceDisplay from "../PriceDisplay/PriceDisplay";

interface Props {
    id: number;
    gameName: string;
    shortName: string;
    shortDescription: string;
    genre: string;
    price: number;
}

const Game: React.FC<Props> = ({ gameName, shortName, shortDescription, genre, price }: Props): JSX.Element => {
    return (
        <div className="game">
            <img 
                //src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Counter-Strike_2_logo.svg/556px-Counter-Strike_2_logo.svg.png?20230324180109"
                alt="Image"
            />
            <div className="details">
                <h2>{gameName}</h2>
                <h5>{shortName} {genre}</h5>
                <h3><PriceDisplay price={price}/></h3>
            </div>
            <p className="game-info">
                {shortDescription}
            </p>
            <button>SUB/UNSUB</button>
        </div>
    )
}

export default Game;