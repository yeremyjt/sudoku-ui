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
  ninebyNineCell0: string; ninebyNineCell1: string; ninebyNineCell2: string; ninebyNineCell3: string; ninebyNineCell4: string; ninebyNineCell5: string; ninebyNineCell6: string; ninebyNineCell7: string; ninebyNineCell8: string; ninebyNineCell9: string;
  ninebyNineCell10: string; ninebyNineCell11: string; ninebyNineCell12: string; ninebyNineCell13: string; ninebyNineCell14: string; ninebyNineCell15: string; ninebyNineCell16: string; ninebyNineCell17: string; ninebyNineCell18: string; ninebyNineCell19: string;
  ninebyNineCell20: string; ninebyNineCell21: string; ninebyNineCell22: string; ninebyNineCell23: string; ninebyNineCell24: string; ninebyNineCell25: string; ninebyNineCell26: string; ninebyNineCell27: string; ninebyNineCell28: string; ninebyNineCell29: string;
  ninebyNineCell30: string; ninebyNineCell31: string; ninebyNineCell32: string; ninebyNineCell33: string; ninebyNineCell34: string; ninebyNineCell35: string; ninebyNineCell36: string; ninebyNineCell37: string; ninebyNineCell38: string; ninebyNineCell39: string;
  ninebyNineCell40: string; ninebyNineCell41: string; ninebyNineCell42: string; ninebyNineCell43: string; ninebyNineCell44: string; ninebyNineCell45: string; ninebyNineCell46: string; ninebyNineCell47: string; ninebyNineCell48: string; ninebyNineCell49: string;
  ninebyNineCell50: string; ninebyNineCell51: string; ninebyNineCell52: string; ninebyNineCell53: string; ninebyNineCell54: string; ninebyNineCell55: string; ninebyNineCell56: string; ninebyNineCell57: string; ninebyNineCell58: string; ninebyNineCell59: string;
  ninebyNineCell60: string; ninebyNineCell61: string; ninebyNineCell62: string; ninebyNineCell63: string; ninebyNineCell64: string; ninebyNineCell65: string; ninebyNineCell66: string; ninebyNineCell67: string; ninebyNineCell68: string; ninebyNineCell69: string;
  ninebyNineCell70: string; ninebyNineCell71: string; ninebyNineCell72: string; ninebyNineCell73: string; ninebyNineCell74: string; ninebyNineCell75: string; ninebyNineCell76: string; ninebyNineCell77: string; ninebyNineCell78: string; ninebyNineCell79: string;
  ninebyNineCell80: string;

  constructor(private sudokuService: SudokuService) {}

  solveNineByNine() {
    this.inputBoard = new InputBoard([
      [this.ninebyNineCell0, this.ninebyNineCell1, this.ninebyNineCell2, this.ninebyNineCell3, this.ninebyNineCell4, this.ninebyNineCell5, this.ninebyNineCell6, this.ninebyNineCell7, this.ninebyNineCell8],
      [this.ninebyNineCell9, this.ninebyNineCell10, this.ninebyNineCell11, this.ninebyNineCell12, this.ninebyNineCell13, this.ninebyNineCell14, this.ninebyNineCell15, this.ninebyNineCell16, this.ninebyNineCell17],
      [this.ninebyNineCell18, this.ninebyNineCell19, this.ninebyNineCell20, this.ninebyNineCell21, this.ninebyNineCell22, this.ninebyNineCell23, this.ninebyNineCell24, this.ninebyNineCell25, this.ninebyNineCell26],
      [this.ninebyNineCell27, this.ninebyNineCell28, this.ninebyNineCell29, this.ninebyNineCell30, this.ninebyNineCell31, this.ninebyNineCell32, this.ninebyNineCell33, this.ninebyNineCell34, this.ninebyNineCell35],
      [this.ninebyNineCell36, this.ninebyNineCell37, this.ninebyNineCell38, this.ninebyNineCell39, this.ninebyNineCell40, this.ninebyNineCell41, this.ninebyNineCell42, this.ninebyNineCell43, this.ninebyNineCell44],
      [this.ninebyNineCell45, this.ninebyNineCell46, this.ninebyNineCell47, this.ninebyNineCell48, this.ninebyNineCell49, this.ninebyNineCell50, this.ninebyNineCell51, this.ninebyNineCell52, this.ninebyNineCell53],
      [this.ninebyNineCell54, this.ninebyNineCell55, this.ninebyNineCell56, this.ninebyNineCell57, this.ninebyNineCell58, this.ninebyNineCell59, this.ninebyNineCell60, this.ninebyNineCell61, this.ninebyNineCell62],
      [this.ninebyNineCell63, this.ninebyNineCell64, this.ninebyNineCell65, this.ninebyNineCell66, this.ninebyNineCell67, this.ninebyNineCell68, this.ninebyNineCell69, this.ninebyNineCell70, this.ninebyNineCell71],
      [this.ninebyNineCell72, this.ninebyNineCell73, this.ninebyNineCell74, this.ninebyNineCell75, this.ninebyNineCell76, this.ninebyNineCell77, this.ninebyNineCell78, this.ninebyNineCell79, this.ninebyNineCell80]
    ]);

    let bodyString = JSON.stringify(this.inputBoard);

    console.log(this.inputBoard.getMatrix());
    console.log(bodyString);

    this.sudokuService.solve(this.inputBoard).subscribe
    (board => {
      console.log(board);
      this.board = board;
      
      this.ninebyNineCell0 = this.board.matrix[0][0].value;
      this.ninebyNineCell1 = this.board.matrix[0][1].value;
      this.ninebyNineCell2 = this.board.matrix[0][2].value;
      this.ninebyNineCell3 = this.board.matrix[0][3].value;
      this.ninebyNineCell4 = this.board.matrix[0][4].value;
      this.ninebyNineCell5 = this.board.matrix[0][5].value;
      this.ninebyNineCell6 = this.board.matrix[0][6].value;
      this.ninebyNineCell7 = this.board.matrix[0][7].value;
      this.ninebyNineCell8 = this.board.matrix[0][8].value;

      this.ninebyNineCell9 = this.board.matrix[1][0].value;
      this.ninebyNineCell10 = this.board.matrix[1][1].value;
      this.ninebyNineCell11 = this.board.matrix[1][2].value;
      this.ninebyNineCell12 = this.board.matrix[1][3].value;
      this.ninebyNineCell13 = this.board.matrix[1][4].value;
      this.ninebyNineCell14 = this.board.matrix[1][5].value;
      this.ninebyNineCell15 = this.board.matrix[1][6].value;
      this.ninebyNineCell16 = this.board.matrix[1][7].value;
      this.ninebyNineCell17 = this.board.matrix[1][8].value;
      
      this.ninebyNineCell18 = this.board.matrix[2][0].value;
      this.ninebyNineCell19 = this.board.matrix[2][1].value;
      this.ninebyNineCell20 = this.board.matrix[2][2].value;
      this.ninebyNineCell21 = this.board.matrix[2][3].value;
      this.ninebyNineCell22 = this.board.matrix[2][4].value;
      this.ninebyNineCell23 = this.board.matrix[2][5].value;
      this.ninebyNineCell24 = this.board.matrix[2][6].value;
      this.ninebyNineCell25 = this.board.matrix[2][7].value;
      this.ninebyNineCell26 = this.board.matrix[2][8].value;

      this.ninebyNineCell27 = this.board.matrix[3][0].value;
      this.ninebyNineCell28 = this.board.matrix[3][1].value;
      this.ninebyNineCell29 = this.board.matrix[3][2].value;
      this.ninebyNineCell30 = this.board.matrix[3][3].value;
      this.ninebyNineCell31 = this.board.matrix[3][4].value;
      this.ninebyNineCell32 = this.board.matrix[3][5].value;
      this.ninebyNineCell33 = this.board.matrix[3][6].value;
      this.ninebyNineCell34 = this.board.matrix[3][7].value;
      this.ninebyNineCell35 = this.board.matrix[3][8].value;

      this.ninebyNineCell36 = this.board.matrix[4][0].value;
      this.ninebyNineCell37 = this.board.matrix[4][1].value;
      this.ninebyNineCell38 = this.board.matrix[4][2].value;
      this.ninebyNineCell39 = this.board.matrix[4][3].value;
      this.ninebyNineCell40 = this.board.matrix[4][4].value;
      this.ninebyNineCell41 = this.board.matrix[4][5].value;
      this.ninebyNineCell42 = this.board.matrix[4][6].value;
      this.ninebyNineCell43 = this.board.matrix[4][7].value;
      this.ninebyNineCell44 = this.board.matrix[4][8].value;

      this.ninebyNineCell45 = this.board.matrix[5][0].value;
      this.ninebyNineCell46 = this.board.matrix[5][1].value;
      this.ninebyNineCell47 = this.board.matrix[5][2].value;
      this.ninebyNineCell48 = this.board.matrix[5][3].value;
      this.ninebyNineCell49 = this.board.matrix[5][4].value;
      this.ninebyNineCell50 = this.board.matrix[5][5].value;
      this.ninebyNineCell51 = this.board.matrix[5][6].value;
      this.ninebyNineCell52 = this.board.matrix[5][7].value;
      this.ninebyNineCell53 = this.board.matrix[5][8].value;

      this.ninebyNineCell54 = this.board.matrix[6][0].value;
      this.ninebyNineCell55 = this.board.matrix[6][1].value;
      this.ninebyNineCell56 = this.board.matrix[6][2].value;
      this.ninebyNineCell57 = this.board.matrix[6][3].value;
      this.ninebyNineCell58 = this.board.matrix[6][4].value;
      this.ninebyNineCell59 = this.board.matrix[6][5].value;
      this.ninebyNineCell60 = this.board.matrix[6][6].value;
      this.ninebyNineCell61 = this.board.matrix[6][7].value;
      this.ninebyNineCell62 = this.board.matrix[6][8].value;

      this.ninebyNineCell63 = this.board.matrix[7][0].value;
      this.ninebyNineCell64 = this.board.matrix[7][1].value;
      this.ninebyNineCell65 = this.board.matrix[7][2].value;
      this.ninebyNineCell66 = this.board.matrix[7][3].value;
      this.ninebyNineCell67 = this.board.matrix[7][4].value;
      this.ninebyNineCell68 = this.board.matrix[7][5].value;
      this.ninebyNineCell69 = this.board.matrix[7][6].value;
      this.ninebyNineCell70 = this.board.matrix[7][7].value;
      this.ninebyNineCell71 = this.board.matrix[7][8].value;

      this.ninebyNineCell72 = this.board.matrix[8][0].value;
      this.ninebyNineCell73 = this.board.matrix[8][1].value;
      this.ninebyNineCell74 = this.board.matrix[8][2].value;
      this.ninebyNineCell75 = this.board.matrix[8][3].value;
      this.ninebyNineCell76 = this.board.matrix[8][4].value;
      this.ninebyNineCell77 = this.board.matrix[8][5].value;
      this.ninebyNineCell78 = this.board.matrix[8][6].value;
      this.ninebyNineCell79 = this.board.matrix[8][7].value;
      this.ninebyNineCell80 = this.board.matrix[8][8].value;
    });
  } // end of solveNineByNine()

  clearNineByNine() {
    this.ninebyNineCell0 = null;
      this.ninebyNineCell1 = null;
      this.ninebyNineCell2 = null;
      this.ninebyNineCell3 = null;
      this.ninebyNineCell4 = null;
      this.ninebyNineCell5 = null;
      this.ninebyNineCell6 = null;
      this.ninebyNineCell7 = null;
      this.ninebyNineCell8 = null;

      this.ninebyNineCell9 = null;
      this.ninebyNineCell10 = null;
      this.ninebyNineCell11 = null;
      this.ninebyNineCell12 = null;
      this.ninebyNineCell13 = null;
      this.ninebyNineCell14 = null;
      this.ninebyNineCell15 = null;
      this.ninebyNineCell16 = null;
      this.ninebyNineCell17 = null;
      
      this.ninebyNineCell18 = null;
      this.ninebyNineCell19 = null;
      this.ninebyNineCell20 = null;
      this.ninebyNineCell21 = null;
      this.ninebyNineCell22 = null;
      this.ninebyNineCell23 = null;
      this.ninebyNineCell24 = null;
      this.ninebyNineCell25 = null;
      this.ninebyNineCell26 = null;

      this.ninebyNineCell27 = null;
      this.ninebyNineCell28 = null;
      this.ninebyNineCell29 = null;
      this.ninebyNineCell30 = null;
      this.ninebyNineCell31 = null;
      this.ninebyNineCell32 = null;
      this.ninebyNineCell33 = null;
      this.ninebyNineCell34 = null;
      this.ninebyNineCell35 = null;

      this.ninebyNineCell36 = null;
      this.ninebyNineCell37 = null;
      this.ninebyNineCell38 = null;
      this.ninebyNineCell39 = null;
      this.ninebyNineCell40 = null;
      this.ninebyNineCell41 = null;
      this.ninebyNineCell42 = null;
      this.ninebyNineCell43 = null;
      this.ninebyNineCell44 = null;

      this.ninebyNineCell45 = null;
      this.ninebyNineCell46 = null;
      this.ninebyNineCell47 = null;
      this.ninebyNineCell48 = null;
      this.ninebyNineCell49 = null;
      this.ninebyNineCell50 = null;
      this.ninebyNineCell51 = null;
      this.ninebyNineCell52 = null;
      this.ninebyNineCell53 = null;

      this.ninebyNineCell54 = null;
      this.ninebyNineCell55 = null;
      this.ninebyNineCell56 = null;
      this.ninebyNineCell57 = null;
      this.ninebyNineCell58 = null;
      this.ninebyNineCell59 = null;
      this.ninebyNineCell60 = null;
      this.ninebyNineCell61 = null;
      this.ninebyNineCell62 = null;

      this.ninebyNineCell63 = null;
      this.ninebyNineCell64 = null;
      this.ninebyNineCell65 = null;
      this.ninebyNineCell66 = null;
      this.ninebyNineCell67 = null;
      this.ninebyNineCell68 = null;
      this.ninebyNineCell69 = null;
      this.ninebyNineCell70 = null;
      this.ninebyNineCell71 = null;

      this.ninebyNineCell72 = null;
      this.ninebyNineCell73 = null;
      this.ninebyNineCell74 = null;
      this.ninebyNineCell75 = null;
      this.ninebyNineCell76 = null;
      this.ninebyNineCell77 = null;
      this.ninebyNineCell78 = null;
      this.ninebyNineCell79 = null;
      this.ninebyNineCell80 = null;
  }
}