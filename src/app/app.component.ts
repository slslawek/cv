import { Component, Inject } from '@angular/core';
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
  dataUrl = './assets/data_'+this.currentLang+'.json';
  about: About = {};
  experience: Experience = {};
  skills: Skills = {};
  hobby: Hobby = {};

  constructor(
    private Service: Service
  ){ }

  ngOnInit(){
    this.getData();
  }

  getData(){
    this.Service.getData(this.dataUrl).subscribe(
      {
        next: data => {
          this.about = data.about;
          this.experience = data.experience;
          if(this.experience.content){
          this.experience.content.sort((a:any,b:any) => b.start - a.start);
          }
          this.skills = data.skills;
          this.hobby = data.hobby;
          console.log(this.experience);
        },
        error: data => {
          console.log(data);
        }
      });
  }
}
