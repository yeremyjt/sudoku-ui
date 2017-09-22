import { Component } from '@angular/core';
import { InputBoard } from '../model/input-board';
import { SudokuService } from '../sudoku.service';
import { Board } from '../model/board'
import { OnInit } from '@angular/core'


@Component({
    selector: 'nine-by-nine',
    templateUrl: './ninebynine.html',
    styleUrls: ['./ninebynine.css'],
    providers: [SudokuService]
})

export class NineByNineComponent {
  inputBoard: InputBoard;
  clickMessage = '';
  board: Board;
  cell0: string; cell1: string; cell2: string; cell3: string; cell4: string; cell5: string; cell6: string; cell7: string; cell8: string; cell9: string;
  cell10: string; cell11: string; cell12: string; cell13: string; cell14: string; cell15: string; cell16: string; cell17: string; cell18: string; cell19: string;
  cell20: string; cell21: string; cell22: string; cell23: string; cell24: string; cell25: string; cell26: string; cell27: string; cell28: string; cell29: string;
  cell30: string; cell31: string; cell32: string; cell33: string; cell34: string; cell35: string; cell36: string; cell37: string; cell38: string; cell39: string;
  cell40: string; cell41: string; cell42: string; cell43: string; cell44: string; cell45: string; cell46: string; cell47: string; cell48: string; cell49: string;
  cell50: string; cell51: string; cell52: string; cell53: string; cell54: string; cell55: string; cell56: string; cell57: string; cell58: string; cell59: string;
  cell60: string; cell61: string; cell62: string; cell63: string; cell64: string; cell65: string; cell66: string; cell67: string; cell68: string; cell69: string;
  cell70: string; cell71: string; cell72: string; cell73: string; cell74: string; cell75: string; cell76: string; cell77: string; cell78: string; cell79: string;
  cell80: string;

  constructor(private sudokuService: SudokuService) {}

  solveNineByNine() {
    this.inputBoard = new InputBoard([
      [this.cell0, this.cell1, this.cell2, this.cell3, this.cell4, this.cell5, this.cell6, this.cell7, this.cell8],
      [this.cell9, this.cell10, this.cell11, this.cell12, this.cell13, this.cell14, this.cell15, this.cell16, this.cell17],
      [this.cell18, this.cell19, this.cell20, this.cell21, this.cell22, this.cell23, this.cell24, this.cell25, this.cell26],
      [this.cell27, this.cell28, this.cell29, this.cell30, this.cell31, this.cell32, this.cell33, this.cell34, this.cell35],
      [this.cell36, this.cell37, this.cell38, this.cell39, this.cell40, this.cell41, this.cell42, this.cell43, this.cell44],
      [this.cell45, this.cell46, this.cell47, this.cell48, this.cell49, this.cell50, this.cell51, this.cell52, this.cell53],
      [this.cell54, this.cell55, this.cell56, this.cell57, this.cell58, this.cell59, this.cell60, this.cell61, this.cell62],
      [this.cell63, this.cell64, this.cell65, this.cell66, this.cell67, this.cell68, this.cell69, this.cell70, this.cell71],
      [this.cell72, this.cell73, this.cell74, this.cell75, this.cell76, this.cell77, this.cell78, this.cell79, this.cell80]
    ]);

    let bodyString = JSON.stringify(this.inputBoard);

    this.cell0 = 'A';
    this.cell1 = this.cell4;
    this.cell2 = this.cell4;
    console.log(this.inputBoard.getMatrix());
    console.log(bodyString);

    this.board = this.sudokuService.solve();
    console.log(this.board)

    this.cell0 = this.board.matrix[0][0].value;
    this.cell1 = this.board.matrix[0][1].value;
    this.cell2 = this.board.matrix[0][2].value;
    this.cell3 = this.board.matrix[0][3].value;
    this.cell4 = this.board.matrix[0][4].value;
    this.cell5 = this.board.matrix[0][5].value;
    this.cell6 = this.board.matrix[0][6].value;
    this.cell7 = this.board.matrix[0][7].value;
    this.cell8 = this.board.matrix[0][8].value;

    this.cell9 = this.board.matrix[1][0].value;
    this.cell10 = this.board.matrix[1][1].value;
    this.cell11 = this.board.matrix[1][2].value;
    this.cell12 = this.board.matrix[1][3].value;
    this.cell13 = this.board.matrix[1][4].value;
    this.cell14 = this.board.matrix[1][5].value;
    this.cell15 = this.board.matrix[1][6].value;
    this.cell16 = this.board.matrix[1][7].value;
    this.cell17 = this.board.matrix[1][8].value;
    
    this.cell18 = this.board.matrix[2][0].value;
    this.cell19 = this.board.matrix[2][1].value;
    this.cell20 = this.board.matrix[2][2].value;
    this.cell21 = this.board.matrix[2][3].value;
    this.cell22 = this.board.matrix[2][4].value;
    this.cell23 = this.board.matrix[2][5].value;
    this.cell24 = this.board.matrix[2][6].value;
    this.cell25 = this.board.matrix[2][7].value;
    this.cell26 = this.board.matrix[2][8].value;

    this.cell27 = this.board.matrix[3][0].value;
    this.cell28 = this.board.matrix[3][1].value;
    this.cell29 = this.board.matrix[3][2].value;
    this.cell30 = this.board.matrix[3][3].value;
    this.cell31 = this.board.matrix[3][4].value;
    this.cell32 = this.board.matrix[3][5].value;
    this.cell33 = this.board.matrix[3][6].value;
    this.cell34 = this.board.matrix[3][7].value;
    this.cell35 = this.board.matrix[3][8].value;

    this.cell36 = this.board.matrix[4][0].value;
    this.cell37 = this.board.matrix[4][1].value;
    this.cell38 = this.board.matrix[4][2].value;
    this.cell39 = this.board.matrix[4][3].value;
    this.cell40 = this.board.matrix[4][4].value;
    this.cell41 = this.board.matrix[4][5].value;
    this.cell42 = this.board.matrix[4][6].value;
    this.cell43 = this.board.matrix[4][7].value;
    this.cell44 = this.board.matrix[4][8].value;

    this.cell45 = this.board.matrix[5][0].value;
    this.cell46 = this.board.matrix[5][1].value;
    this.cell47 = this.board.matrix[5][2].value;
    this.cell48 = this.board.matrix[5][3].value;
    this.cell49 = this.board.matrix[5][4].value;
    this.cell50 = this.board.matrix[5][5].value;
    this.cell51 = this.board.matrix[5][6].value;
    this.cell52 = this.board.matrix[5][7].value;
    this.cell53 = this.board.matrix[5][8].value;

    this.cell54 = this.board.matrix[6][0].value;
    this.cell55 = this.board.matrix[6][1].value;
    this.cell56 = this.board.matrix[6][2].value;
    this.cell57 = this.board.matrix[6][3].value;
    this.cell58 = this.board.matrix[6][4].value;
    this.cell59 = this.board.matrix[6][5].value;
    this.cell60 = this.board.matrix[6][6].value;
    this.cell61 = this.board.matrix[6][7].value;
    this.cell62 = this.board.matrix[6][8].value;

    this.cell63 = this.board.matrix[7][0].value;
    this.cell64 = this.board.matrix[7][1].value;
    this.cell65 = this.board.matrix[7][2].value;
    this.cell66 = this.board.matrix[7][3].value;
    this.cell67 = this.board.matrix[7][4].value;
    this.cell68 = this.board.matrix[7][5].value;
    this.cell69 = this.board.matrix[7][6].value;
    this.cell70 = this.board.matrix[7][7].value;
    this.cell71 = this.board.matrix[7][8].value;

    this.cell72 = this.board.matrix[8][0].value;
    this.cell73 = this.board.matrix[8][1].value;
    this.cell74 = this.board.matrix[8][2].value;
    this.cell75 = this.board.matrix[8][3].value;
    this.cell76 = this.board.matrix[8][4].value;
    this.cell77 = this.board.matrix[8][5].value;
    this.cell78 = this.board.matrix[8][6].value;
    this.cell79 = this.board.matrix[8][7].value;
    this.cell80 = this.board.matrix[8][8].value;      
  }
}