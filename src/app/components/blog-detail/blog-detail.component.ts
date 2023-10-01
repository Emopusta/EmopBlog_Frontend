import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { BlogDetailModel } from 'src/app/models/blog-detail-model';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css'],
})
export class BlogDetailComponent implements OnInit {
  blogId: string = '';
  details:BlogDetailModel[] = [];
  name:string="";
  text:string="";
  id:string="";
  description:string="";
  image:string="";
  author:string="";
  constructor(private route: ActivatedRoute, private blogService: BlogService) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.blogId = params['id'];
    });
    this.getBlogDetails();

    this.name = this.details[0]["name"];
    this.text = this.details[0]["text"];
  }

  getBlogDetails(){
    this.blogService.getDataById(this.blogId).subscribe((blog:BlogDetailModel) => {
      this.name = blog.name;
      this.text = blog.text;
      this.id = blog.id;
      this.description = blog.description;
      this.image = blog.image;
      this.author = blog.author;
    })
  }
}
