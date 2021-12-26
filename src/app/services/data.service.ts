import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Collection } from '../interfaces/collections';

@Injectable()
export class DataService {
  constructor() { }
  
  collections = new BehaviorSubject<Collection[]>([])
  collectionItems = new BehaviorSubject({})
  collectionFields = new BehaviorSubject({})

  applicationConfig = new BehaviorSubject({})
}