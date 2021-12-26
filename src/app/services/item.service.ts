import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { Response } from '../interfaces/response';
import { tap } from 'rxjs';

@Injectable()
export class ItemService {
  constructor(private http: HttpClient, 
              private dataSerivce: DataService) { }

  getAppConfig() {
    return this.http.get(`/items/app_config`).subscribe((response: Response) => {
      let config = {}

      response.data.forEach(item => {
          config[item.Table] = {
            metaData: item.MetaData
          }
      })

      this.dataSerivce.applicationConfig.next(config)
    })
  }
  
  getItems(collection) {
    return this.http.get(`/items/${collection}`).pipe(
      tap((items: Response) => {
        this.dataSerivce.collectionItems.next({...this.dataSerivce.collectionItems.value, [collection]: items.data})
      })
    )
  }
}