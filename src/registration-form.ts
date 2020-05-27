import { inject } from 'aurelia-dependency-injection';
import { ValidationControllerFactory, ValidationController, ValidationRules } from 'aurelia-validation';
import {ApplicantDetail} from './applicant-detail';
import { BootstrapFormRenderer } from './bootstrap-form-renderer';

@inject(ValidationControllerFactory, ApplicantDetail)
export class RegistrationForm {
  controller = null;
  session: ApplicantDetail;
  
  constructor(controllerFactory, session) {
    this.controller = controllerFactory.createForCurrentScope();
    this.controller.addRenderer(new BootstrapFormRenderer());
    
    this.session = session;

  }
  
  public bind() {
    ValidationRules
      .ensure("firstName").required()
      .ensure("lastName").required().withMessage("My custom error message")
      .on(this.session);
  }

  submit() {
    this.session.bind();
    console.log(this.session.applicant);
    this.controller.validate();
  }
  
  reset() {
    this.controller.reset();
    this.session.reset();
  }
}