import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '../interfaces/response';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }
  

}