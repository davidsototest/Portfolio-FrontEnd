import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
footer:string= "© 2023 David Soto";
  constructor() { }

  ngOnInit(): void {
  }

}
