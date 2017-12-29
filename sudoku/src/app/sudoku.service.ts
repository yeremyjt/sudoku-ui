import { Injectable } from '@angular/core'
import { Board } from './model/board'
import { BOARD } from './test/mock-board'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InputBoard } from 'app/model/input-board';
import { Observable } from 'rxjs/Observable';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  

@Injectable()
export class SudokuService {

    private sudokuApiNineByNineUrl = 'http://localhost:8080/solve/nineByNine';
    
    constructor ( private http: HttpClient ) {}
    
    solve(inputBoard): Observable<Board> {
        console.log("InputBoard from SudokuService class.")
        console.log(inputBoard.getMatrix())
        console.log("JSON inputBoard from SudokuService.")
        console.log(JSON.stringify(inputBoard))
        
        return this.http.post<Board>(this.sudokuApiNineByNineUrl, inputBoard, httpOptions);
    }
}