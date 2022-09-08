import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
})
export class ContactoComponent implements OnInit {
  constructor(private route : Router) {}

  ngOnInit(): void {}

  public sendMail(e: Event) {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_i1g122m',
        'template_rgb75d7',
        e.target as HTMLFormElement,
        'qkqG5BYiVCAaDVIFP'
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log(result.text);
          this.route.navigate([('/inicio')])
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
}
