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

    return (
        <>
            <div>Board</div>

        </>
  )
  //4 Squaresを9個並べる

}
