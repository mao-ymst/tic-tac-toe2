
import calculateWinner from "../utils/calculateWinner";
import Square from "./Square";

//3 どのマスが押され,なにを置くかを管理

export default function Board({squares,xIsNext,onPlay}) {
    
    function handleClick(i) {
        if(squares[i]) return;

        const nextSquares = squares.slice();

        if(xIsNext) {
            nextSquares[i] = "X";
        } else {
            nextSquares[i] = "O";
        }

        onPlay(nextSquares);

    }
    //3　マスがクリックされたらX、Oを表示させる
    //すでにマスに文字がある場合　return
    //新しい配列をコピーして作成 stateが変わったと判断して画面更新できる
    //Xの番(true)ならX,違うならOと処理を分ける
    //マス目をクリックしたら　変化した盤の状態をgameに伝える


    const winner = calculateWinner(squares);
    let status;
    if(winner) {
        status = "Winner: " + winner;
    } else {
        status = "Next Player: " + (xIsNext ? "X" : "O");
    }

    // 5 gameの勝敗を判定-->勝利：勝者を表示　続行中：次の手番を表示
    // calculateWinner をimportする
    // winnerで勝った(そろった)記号が返ってきた又は続行の指示なら　それぞれの内容を表示する

    return (
        <>
            <div>{status}</div>
            <div>
                <Square value={squares[0]} onSquareClick={() => handleClick(0)}></Square>
                <Square value={squares[1]} onSquareClick={() => handleClick(1)}></Square>
                <Square value={squares[2]} onSquareClick={() => handleClick(2)}></Square>
            </div>
        </>
  )

}

//6　squaresを9つ並べたboardの表示を作る
// status を反映させる 
// squareにvalue　handleClickの処理を一つずつ行う
