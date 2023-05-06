import { Component, Inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Header } from './interface';
import { About } from './interface';
import { Experience } from './interface';
import { Skills } from './interface';
import { Hobby } from './interface';
import { Service } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'cv';
  currentLang: string = "pl";
  imgPath: string = "./assets/img/";
  dataUrl: string = './assets/data_'+this.currentLang+'.json';
  header: Header = {name:"",address:"",phone:"",email:"",photo:""};
  about: About = {};
  experience: Experience = {};
  skills: Skills = {};
  hobby: Hobby = {};
  footer: string = "";

  constructor(
    private Service: Service
  ){ }

  ngOnInit(){
    this.getData();
  }

  getData(){
    this.Service.getData(this.dataUrl).pipe(
      map(data => {
        this.header = data.header;
        this.header.photo = this.imgPath + this.header.photo;
        this.about = data.about;
        this.experience = data.experience;
        if(this.experience.content){
        this.experience.content.sort((a:any,b:any) => b.start - a.start);
        }
        this.skills = data.skills;
        this.hobby = data.hobby;
        this.footer = data.footer;
      })
    )
    .subscribe(
      {
        next: data => {
          console.log(this.hobby);
        },
        error: data => {
          console.log(data);
        }
      });
  }

}
