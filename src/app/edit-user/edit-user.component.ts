import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

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


  confirm(firstname: string, lastname: string, description: string) {
    if (firstname.length > 0) {
      this.editedUser.firstname = firstname;
    }
    if (lastname.length > 0) {
      this.editedUser.lastname = lastname;
    }
    if (description.length > 0) {
      this.editedUser.description = description;
    }
  //  this.dialogRef.close(this.editedUser)
  }
}
