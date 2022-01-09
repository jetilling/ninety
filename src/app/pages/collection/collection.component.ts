import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin, mergeMap } from 'rxjs';
import { Response } from 'src/app/interfaces/response';
import { RouteParam } from 'src/app/interfaces/routeParams';
import { Views } from 'src/app/shared/utilities/constants';

@Component({
  selector: 'collection',
  templateUrl: 'collection.component.html',
  styleUrls: ['collection.component.css']
})

export class CollectionComponent implements OnInit, OnDestroy {

  subscriptions = []
  collection = ''
  collectionConfig = {
    actions: [],
    fields: [],
    color: ''
  }
  items = []
  view = Views.None

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // this.subscriptions.push(this.route.params
    //   .pipe(
    //     mergeMap((params: RouteParam) => {
    //       this.collection = params.collection
    //       // const fields = this.collectionService.getFields(params.collection)
    //       // const items = this.itemService.getItems(params.collection)
    //       // const collections = this.dataService.collections
    //       // return forkJoin([fields, items])
    //     })
    //   )
    //   .subscribe((data) => {
    //     console.log('data: ', data)

    //     // this.collectionService.getCollection(params.collection)
    //     // this.collectionService.getItems(params.collection)
    // }))

    

  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe())
  }

  viewItemList(action) {
    // this.collectionConfig.actions.forEach(configAction => configAction.isActive = false)
    // action.isActive = true
    // console.log('view item list')
    // this.view = Views.Table
    // this.itemService.getItems(this.collection).subscribe(items => {
    //   console.log(items)
    //   this.items = items.data
    // })
  }

  viewEditCollection(action) {
    // this.collectionConfig.actions.forEach(configAction => configAction.isActive = false)
    // action.isActive = true
    // console.log('view edit collection')
  }

  viewAddItem(action) {
  //   this.collectionConfig.actions.forEach(configAction => configAction.isActive = false)
  //   action.isActive = true
  //   console.log('add item')
  //   // this.collectionService.getFields(this.collection).subscribe((fields: Response) => {
  //     // console.log(fields)
  //     // loop through here and all non-hidden fields. Match them with the corresponding ninety components
  //     // and dynamically create the form. 
  //   // })
  }
  
}