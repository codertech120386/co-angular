import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'co-angular';

  constructor(private http: HttpClient) {}

  addOrganisation(addForm: NgForm) {
    this.http
      .post('http://localhost:8000/nested/api/organisations', addForm.value)
      .subscribe((data) => console.log('data', data));
  }

  searchOrganisation(searchForm: NgForm) {
    const name = searchForm.value.name;
    this.http
      .get(`http://localhost:8000/nested/api/organisations/${name}`)
      .subscribe((data) => {
        console.log('data', data);
      });
  }
}
