import { inject } from 'aurelia-dependency-injection';
import { ValidationControllerFactory, ValidationController, ValidationRules } from 'aurelia-validation';
import {Session} from './session';
import { BootstrapFormRenderer } from './bootstrap-form-renderer';

@inject(ValidationControllerFactory, Session)
export class RegistrationForm {
  controller = null;
  session: any;
  
  constructor(controllerFactory, session) {
    this.controller = controllerFactory.createForCurrentScope();
    this.controller.addRenderer(new BootstrapFormRenderer());
    
    this.session = session;
    // ValidationRules
    //   .ensure(a => a.firstName).required()
    //   .ensure(a => a.lastName).required()
    //   .ensure(a => a.email).required().email()
    //   .on(this.session.record);
  }
  
  submit() {
    console.log(this.session.record);
    this.controller.validate();
  }
  
  reset() {
    this.controller.reset();
    this.session.reset();
    // document.getElementById('validationTest').reset();
  }
}