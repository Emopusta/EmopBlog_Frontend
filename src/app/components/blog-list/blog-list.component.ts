import { Component, OnInit } from '@angular/core';
import { BlogDetailModel } from 'src/app/models/blog-detail-model';
import { ListResponseModel } from 'src/app/models/list-response-model';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  counter:number[] = [];

  blogs:BlogDetailModel[] = [];
  index:number = 0;
  size:number = 20;
  hasPrevious:boolean = false;
  hasNext:boolean = false;
  count: number = 0;
  pages: number = 0;
  
  constructor(private blogService:BlogService){

  }

  ngOnInit(): void {
    this.blogService.getDataForListing(this.index, this.size).subscribe((response:ListResponseModel) => {
      console.log(response);
      this.hasPrevious = response.hasPrevious;
      this.hasNext = response.hasNext;
      this.pages = response.pages;
      response.items.forEach(blog => {
        this.blogs.push(blog["name"]);
      });
      
      for (let i = 0; i < this.pages; i++) {
        this.counter.push(i);
      }
      });
      
      console.log(this.blogs);
  }
  
  nextButton(){
    this.index++;
    this.blogs = [];
    this.counter = [];
    this.ngOnInit()
  }

  previousButton(){
    this.index--;
    this.blogs = [];
    this.counter = [];
    this.ngOnInit()
  }
  spesificButton(index:number){
    this.index = index;
    this.blogs = [];
    this.counter = [];
    this.ngOnInit()
  }
}
