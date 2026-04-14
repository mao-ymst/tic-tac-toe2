//1 1つのbuttonの中身を設定する
export default function Square({ value, onSquareClick }) {

    return (

        <button className="square" onClick={onSquareClick}>
            {value}
        </button>

    )
}

//2 value X,O,nullを表示、onSquareClick clickされたらBoardに知らせて表示