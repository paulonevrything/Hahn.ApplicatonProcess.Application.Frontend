import { ValidationRules } from "aurelia-validation";
import {bindable} from "aurelia-framework";

export class ApplicantDetail {
  @bindable
    applicant = {
      name: 'Paulo',
      familyName: 'Olabisi',
      address: 'Lagos Mainland, Lagos',
      countryOfOrigin: 'Nigeria',
      email: 'pauloolabisi@gmail.com',
      age: 27,
      hired: 1,
    }
    
    reset() {
      this.applicant.name = '';
      this.applicant.familyName = '';
      this.applicant.address = '';
      this.applicant.countryOfOrigin = '';
      this.applicant.email = '';
      this.applicant.age = 0;
      this.applicant.hired = 0;
    }

    public bind() {
      ValidationRules
        .ensure("name").required().minLength(5).withMessage("Name must be minimun of 5 characters")
        .ensure("familyName").required().minLength(5).withMessage("Family Name must be minimun of 5 characters")
        .ensure("address").required().minLength(10).withMessage("Address must be minimun of 10 characters")
        .ensure("email").required().email().withMessage("Email Address must be valid")
        .ensure("age").required().range(20, 60).withMessage("Age must be between 20 and 60")
        .on(this.applicant);
    }
  }