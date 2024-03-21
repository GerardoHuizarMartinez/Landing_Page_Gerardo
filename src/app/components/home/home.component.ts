import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon"

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  Mierda19= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDUtlt4GM53xlD5M2XeB7sCr8iGy8SWLCkTkJ-0QSQKg&s";
  ISSSTE= "https://mir-s3-cdn-cf.behance.net/projects/404/c1c73d166076329.Y3JvcCw5MjEsNzIxLDE4Miww.jpg"
  Anime = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk-HGmuh88HFS0hPB8FLTQevcrbMNVBvahlY_AiT_2UA&s";
}
