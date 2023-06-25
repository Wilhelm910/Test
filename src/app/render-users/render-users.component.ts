import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserApiService } from '../backend/user-api.service';
import { DatePipe } from '@angular/common';
import { EditUserComponent } from '../edit-user/edit-user.component';
import { MatDialog } from '@angular/material/dialog';


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

  constructor(private UserApiService: UserApiService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.isLoading.emit(true);
    this.UserApiService.list().subscribe(res => {
      this.userList = res;
      this.isLoading.emit(false);
    })
  }


  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
  }


  deleteUser(ID: number) {
    this.UserApiService.delete(ID).subscribe((newUserList) => {
      this.userList = newUserList;
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


  openDialog(ID: number) {
    let editingUser = [];
    for (let i = 0; i < this.userList.length; i++) {
      if (this.userList[i].id == ID) {
        editingUser = this.userList[i];
      }
    }
    this.dialog.open(EditUserComponent, {
      data: editingUser
    });
  }

}
