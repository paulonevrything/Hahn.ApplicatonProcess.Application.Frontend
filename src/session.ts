export class Session {
    record = {
      firstName: 'jane',
      lastName: 'doe',
      email: 'user@email.non'
    }
    
    reset() {
      this.record.firstName = '';
      this.record.lastName = '';
      this.record.email = '';
    }
  }