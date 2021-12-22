import { User } from '../model/user';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/users.service';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon'







@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {

  users!: User[];

  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'email', 'phone', 'orders', 'delete' ];



  constructor(
    private usersService: UsersService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.usersService.getAllUsers().subscribe(response => this.users = response)
  }

  removeUsers(user: any) {
    this.usersService.deleteUsers(user.id).subscribe(response => {
      //simulazione in assenza di server
      this.users = this.users.filter((item: { id: any; }) => item.id !== user.id)
    }
  );
}

//impossibile prendere l'id tramite interpolazione nei parametri del link. Si procede con la funzione.
//Per gestire la navigazione utilizzare l'oggetto Router.
getUser(user: any) {
  //console.log(user.id)
  // 'users/:id/cart'
  this.router.navigate(['users/'+user.id+'/cart'])
}

  

}

