import { useNavigate } from "react-router-dom"

export const hello : string = `marco`

export const hello2 : string = `marco2`

export function go(path:string){
    const navigate = useNavigate()
    navigate(path)
} 

export interface link{
  label: string; value: string; type: string;
}

export interface portfolio {
    template?: string;
    name?: string;
    surname?: string;
    about?: string;
    skills?: string[];
    hobbies?: string[];
    softSkills?: string[];
    workExperience?: { company: string; position: string; from_date: string, to_date: string }[];
    education?: { company: string; position: string; from_date: string, to_date: string }[];
    email?: string;
    occupation?: string;
    links?: link[];
    footer?: string;
    navbar?: string;
    scroll?: boolean;
    font?: string;
    cell?: string;
    photo?: string;
    views?: number;
    photo2?: any;
    photoChange?: any;
  }

  export const defaultPortfolio: portfolio = {
    template: '',
    name: '',
    surname: '',
    about: '',
    skills: [],
    hobbies: [],
    softSkills: [],
    workExperience: [],
    education: [],
    email: '',
    occupation: '',
    links: [],
    footer: '',
    navbar: '',
    scroll: false,
    font: '',
    cell: '',
    photo: '',
    views:0
  };


  export interface form {
    _id?: string,
    user_id?: string,
    bgcolor?: string,
    fontcolor?: string,
    inputbgcolor?: string,
    btncolor?: string,
    btntxtcolor?: string,
    inputtxtcolor?: string,
    name?: string,
    email?: string,
    title?: string,
    reply_email?: boolean,
    reply_email_content?: string,
    premium?: boolean,
    namefield?: boolean,
    emailfield?: boolean,
    bodyfield?: boolean,
    status?: boolean,
    theme?: string,
    type?: number,
    custom?: boolean,
  }
