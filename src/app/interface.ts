export interface About {
title?:string,
content?:string
}

export interface Experience {
  title?:string,
  content?:[ExperienceContent]
}

export interface ExperienceContent {
  business?:string,
  start?:number,
  stop?:number|null,
  description?:any
}


export interface Skills {
  title?:string,
  content?:[SkillsContent]
}

export interface SkillsContent {
  item?:string,
  level?:number
}

export interface Hobby {
  title?: string,
  content?:[string]
}
