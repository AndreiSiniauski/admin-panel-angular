import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Observable, map } from 'rxjs';
import { User } from '../../user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contacts-details',
  templateUrl: './contacts-details.component.html',
  styleUrls: ['./contacts-details.component.scss']
})
export class ContactsDetailsComponent implements OnInit{

  id!: number;
  user!: Observable<User>;

  constructor(private adminService: AdminService , private acivateRoute: ActivatedRoute) {}

  ngOnInit(): void {
    // this.acivateRoute.params.subscribe((params) => this.id = params?.['id']);
    // this.user = this.adminService.getPerson(this.id);

    this.user = this.acivateRoute.data.pipe(map((data) => data?.['user']))
  }
}
