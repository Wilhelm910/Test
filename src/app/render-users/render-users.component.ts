import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserApiService } from '../backend/user-api.service';
import { UserDTO } from '../data/user';


@Component({
  selector: 'app-render-users',
  templateUrl: './render-users.component.html',
  styleUrls: ['./render-users.component.scss']
})
export class RenderUsersComponent implements OnInit {

  userList: any;
  searchText: string = '';

  @Output() isLoading: EventEmitter<any> = new EventEmitter()

  constructor(private UserApiService: UserApiService) { }

  ngOnInit(): void {
    this.isLoading.emit(true)
    this.UserApiService.list().subscribe(res => {
      this.userList = res;
      console.log(this.userList);
      console.log(this.userList[0].username.replace('-',' '))
      this.isLoading.emit(false)
    })
  }

  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
  }

  deleteUser(ID: any) {
    console.log(ID)
    this.UserApiService.delete(ID)
    // this.UserApiService.update(ID,t)
  }

}
