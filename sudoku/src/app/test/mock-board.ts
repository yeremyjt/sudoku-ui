import { Board } from '.././model/board'
import { Cell } from '.././model/cell'

export const BOARD: Board = {
    matrix: [
    [  new Cell("5", []),
       new Cell("6", []),
       new Cell("8", []),
       new Cell("3", []),
       new Cell("1", []),
       new Cell("9", []),
       new Cell("4", []),
       new Cell("7", []),
       new Cell("2", [])
    ],
    [
       new Cell("7", []),
       new Cell("9", []),
       new Cell("1", []),
       new Cell("4", []),
       new Cell("5", []),
       new Cell("2", []),
       new Cell("3", []),
       new Cell("6", []),
       new Cell("8", [])
    ],
    [
       new Cell("2", []),
       new Cell("3", []),
       new Cell("4", []),
       new Cell("6", []),
       new Cell("7", []),
       new Cell("8", []),
       new Cell("5", []),
       new Cell("9", []),
       new Cell("1", [])
    ],
    [
       new Cell("6", []),
       new Cell("1", []),
       new Cell("9", []),
       new Cell("5", []),
       new Cell("8", []),
       new Cell("4", []),
       new Cell("7", []),
       new Cell("2", []),
       new Cell("3", [])
    ],
    [
       new Cell("3", []),
       new Cell("2", []),
       new Cell("5", []),
       new Cell("7", []),
       new Cell("9", []),
       new Cell("1", []),
       new Cell("6", []),
       new Cell("8", []),
       new Cell("4", [])
    ],
    [
       new Cell("4", []),
       new Cell("8", []),
       new Cell("7", []),
       new Cell("2", []),
       new Cell("3", []),
       new Cell("6", []),
       new Cell("9", []),
       new Cell("1", []),
       new Cell("5", [])
    ],
    [
       new Cell("1", []),
       new Cell("4", []),
       new Cell("3", []),
       new Cell("8", []),
       new Cell("6", []),
       new Cell("7", []),
       new Cell("2", []),
       new Cell("5", []),
       new Cell("9", [])
    ],
    [
       new Cell("8", []),
       new Cell("5", []),
       new Cell("6", []),
       new Cell("9", []),
       new Cell("2", []),
       new Cell("3", []),
       new Cell("1", []),
       new Cell("4", []),
       new Cell("7", [])
    ],
    [
       new Cell("9", []),
       new Cell("7", []),
       new Cell("2", []),
       new Cell("1", []),
       new Cell("4", []),
       new Cell("5", []),
       new Cell("8", []),
       new Cell("3", []),
       new Cell("6", [])
    ]
],
    solved: false,
    hasChanged: true
}