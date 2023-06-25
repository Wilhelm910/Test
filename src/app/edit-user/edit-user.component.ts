import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserDTO } from '../data/user';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
  template: 'passed in {{ data }}',
})
export class EditUserComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<EditUserComponent>) { }

  ngOnInit(): void {

  }
  editedUser = this.data;


  confirm(email: string, firstname: string, lastname: string, description: string) {
    if (email.length > 0) {
      this.editedUser.email = email;
    }
    if (firstname.length > 0) {
      this.editedUser.firstname = firstname;
    }
    if (lastname.length > 0) {
      this.editedUser.lastname = lastname;
    }
    if (description.length > 0) {
      this.editedUser.description = description;
    }
    this.dialogRef.close(this.editedUser)
  }
}
