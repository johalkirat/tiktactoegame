export default function Gameboard() {
    const intialBoard = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];
    return (
        <ol id="game-board">
            {
                intialBoard.map((row, rowIndex) => <li key={rowIndex}>
                    <ol>
                    {row.map(
                        (playerSymbol,colIndex)=> 
                        <li key={playerSymbol}><button>{playerSymbol}</button></li>)}
                    </ol>
                </li>)
            }
        </ol>
    );
}