import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent {
  blogForm:FormGroup;


  constructor(private formBuilder: FormBuilder){
    this.blogForm = this.formBuilder.group({
      blogName : ['',Validators.required],
      blogDescription : ['', Validators.required],
      blogText : ['', Validators.required]
    });
    
  }

}
