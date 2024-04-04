import { Component, OnInit } from '@angular/core';
import { FormserviceService } from 'src/app/componenti/formservice.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit  {
  forms: any[] = [];
  newForm: any = {};

  constructor(private formserviceService: FormserviceService) {}

    ngOnInit() {
    this.loadForms();
    
  }

  loadForms() {
    this.formserviceService.getForms().subscribe((data: any) => {
        this.forms = data;
    });
}

 addForm() {
  this.formserviceService.createForm(this.newForm).subscribe(() => {
      this.loadForms();
      this.newForm = {};
  });
}

updateForm(form: any) {
  this.formserviceService.updateForm(form.id, form).subscribe(() => {
      this.loadForms();
  });
}

deleteForm(id: number) {
  this.formserviceService.deleteForm(id).subscribe(() => {
      this.loadForms();
  });
 }

}
