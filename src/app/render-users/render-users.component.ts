import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserApiService } from '../backend/user-api.service';
import { UserDTO } from '../data/user';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-render-users',
  templateUrl: './render-users.component.html',
  styleUrls: ['./render-users.component.scss'],
  providers: [DatePipe],
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
      this.isLoading.emit(false)
    })
  }

  
  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
  }


  deleteUser(ID: number) {
    console.log(ID)
    this.UserApiService.delete(ID).subscribe((newUserList) => {
      this.userList = newUserList;
     // this.UserApiService.update(2, this.userList).subscribe(() => { })
    })
  }


  getDateTimeFromTimestamp(timestamp: number) {
    const date = new Date(timestamp);
    const formattedDate = date.toLocaleDateString(); // Datum im gewünschten Format
    const formattedTime = date.toLocaleTimeString(); // Uhrzeit im gewünschten Format
    return {
      formattedDate,
      formattedTime
    };
  }

}
