import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../backend/user-api.service';
import { UserDTO } from '../data/user';

@Component({
  selector: 'app-render-users',
  templateUrl: './render-users.component.html',
  styleUrls: ['./render-users.component.scss']
})
export class RenderUsersComponent implements OnInit {

  userList: any;
  loading:boolean = false;

  constructor(private UserApiService: UserApiService){}

  ngOnInit(): void {
    this.loading = true;
    console.log(this.loading)
    this.UserApiService.list().subscribe(res=> {
      this.userList = res;
      console.log(this.userList);
      this.loading = false;
      console.log(this.loading)
    })
  }

  deleteUser(ID:any) {
    console.log(ID)
    this.UserApiService.delete(ID)
   // this.UserApiService.update(ID,t)
  }

}
