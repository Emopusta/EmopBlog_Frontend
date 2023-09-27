import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BlogPostModel } from 'src/app/models/blog-post-model';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent {
  blogForm:FormGroup;
  selectedImage:File | null = null;

  constructor(private formBuilder: FormBuilder, private blogService:BlogService){
    this.blogForm = this.formBuilder.group({
      name : ['',Validators.required],
      description : ['', Validators.required],
      text : ['', Validators.required]
    });
    
  }

  saveBlog(){
    const formData = new FormData();
    formData.append('name', this.blogForm.value.name);
    formData.append('description', this.blogForm.value.description);
    formData.append('text', this.blogForm.value.text);
    formData.append('image', this.selectedImage??"none");

    this.blogService.PostData(formData).subscribe(response => {
      console.log("response => ", response);
    },
    error => {
      console.log("error => ", error);
    });
  }

  onImageSelect(e:any){
    this.selectedImage = e.target.files[0]
  }
}
