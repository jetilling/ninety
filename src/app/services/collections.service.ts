import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '../interfaces/response';
import { map, tap } from 'rxjs';
import { Collection, CollectionRaw } from '../interfaces/collections';
import { DataService } from './data.service';

@Injectable()
export class CollectionService {
  constructor(private http: HttpClient,
              private dataService: DataService) { }
  
  getCollections(forceReload = false) {
    if (!forceReload && this.dataService.collections.value.length) {
      return this.dataService.collections
    }

    return this.http.get('/collections')
      .pipe(
        map((res: Response) => {
          const filteredCollections = res.data.filter((collections: CollectionRaw) => !collections.collection.includes('directus_'))
          return filteredCollections.map(collection => {
            return {name: collection.collection, color: collection.meta.color}
          })
        }),
        tap(collections => this.dataService.collections.next(collections))
      )
  }

  getCollection(collection) {
    return this.http.get(`/collections/${collection}`).subscribe((response: Response) => {
      console.log(response)
    })
  }


  // TEMP

  getFields(collection, forceReload = false) {
    console.log('here')
    if (forceReload && this.dataService.collectionFields.value[collection]) {
      return this.dataService.collectionFields.pipe(map(collectionKey => collectionKey === collection))
    }
    
    return this.http.get(`/fields/${collection}`)
      .pipe(
        tap((fields: Response) => {
          console.log('in service: ', fields)
          this.dataService.collectionFields.next({...this.dataService.collectionFields.value, [collection]: fields.data})
        })
      )
  }
}