import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../backend/user-api.service';
import { UserDTO } from '../data/user';

@Component({
  selector: 'app-render-users',
  templateUrl: './render-users.component.html',
  styleUrls: ['./render-users.component.scss']
})
export class RenderUsersComponent implements OnInit {

  constructor(private UserApiService: UserApiService){}

  ngOnInit(): void {
    let test = this.UserApiService.list()
   // console.log(test)
  }

}
