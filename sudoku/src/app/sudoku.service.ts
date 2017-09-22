import { Injectable } from '@angular/core'
import { Board } from './model/board'
import { BOARD } from './test/mock-board'

@Injectable()
export class SudokuService {
    
    solve(): Board {
        return BOARD
    }
}