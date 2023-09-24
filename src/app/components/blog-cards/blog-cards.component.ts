import { Component } from '@angular/core';
import { timeout } from 'rxjs';
import { BlogCardModel } from 'src/app/models/blog-card-model';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-cards',
  templateUrl: './blog-cards.component.html',
  styleUrls: ['./blog-cards.component.css'],
})
export class BlogCardsComponent {
  data:BlogCardModel[] = [];

  constructor(private blogService:BlogService) {
    this.getBlogData();
  }

  getBlogData() {
    var data = this.blogService.GetDataForHomeCards();
    data.subscribe(data => {data.items.forEach(item => {
      this.data.push(item);
    })});
  }
}
