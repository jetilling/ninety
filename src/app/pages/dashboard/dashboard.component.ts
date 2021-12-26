import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CollectionService } from 'src/app/services/collections.service';
import { DataService } from 'src/app/services/data.service';
import { ItemService } from 'src/app/services/item.service';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})

export class DashboardComponent implements OnInit, OnDestroy {

  subscriptions = []
  collections = []
  currentUserName = ''

  constructor(private authService: AuthService,
            private collectionsService: CollectionService,
            private dataService: DataService,
            private itemService: ItemService,
            private router: Router) { }

  ngOnInit() { 
    this.subscriptions.push(this.authService.currentUer.subscribe(user => {
      this.currentUserName = user.first_name
    }))

    this.subscriptions.push(this.collectionsService.getCollections().subscribe(collections => {
      if (collections) {
        console.log(collections)
        this.collections = collections
        // this.collections = collections.map(collection => {
        //   return {name: collection.collection, color: collection.meta.color}
        // })
      }
    }))

    this.itemService.getAppConfig()
  }

  ngOnDestroy() {
      this.subscriptions.forEach(subscription => subscription.unsubscribe())
  }

  viewCollection(collection) {
    console.log(collection)
    this.router.navigate(['dashboard/c', collection.name])
  }
}