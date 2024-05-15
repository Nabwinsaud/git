export class FakeHashPassword {
  hash(password: string) {
    return password;
  }

  compare(password: string, hashedPassword: string) {
    return password === hashedPassword;
  }
}
