import './App.css';
import { Chess } from 'chess.js';
import { Chessboard } from 'react-chessboard';
import { useState, useEffect, useRef } from 'react';

function App() {
 {

    // track the current position of the chess game in state to trigger a re-render of the chessboard
    const [chessPosition, setChessPosition] = useState("r1bqk1nr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R b Kkq - 0 5");

    // set the chessboard options
    const chessboardOptions = {
      position: chessPosition,
      id: 'play-vs-random'
    };

    // render the chessboard
    return <Chessboard options={chessboardOptions} />;
  }
}

export default App;
