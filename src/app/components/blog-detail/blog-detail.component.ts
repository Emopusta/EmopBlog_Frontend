import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  description:string="";
  image:string="";
  author:string="";
  constructor(private route: ActivatedRoute, private blogService: BlogService, private location:Location) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.blogId = params['id'];
    });
    this.getBlogDetails();
  }

  getBlogDetails(){
    this.blogService.getDataById(this.blogId).subscribe((blog:BlogDetailModel) => {
      this.name = blog.name;
      this.text = blog.text;
      this.description = blog.description;
      this.image = blog.image;
      this.author = blog.author;
    })
  }

  backNavigation(){
    this.location.back();
  }
}
