import { FakeHashPassword } from "./fakeHashPassword";

class Auth {
  constructor(private readonly username: string, password: string) {}
}

const hash = new FakeHashPassword();
const auth = new Auth("username", "password");

console.log("fake auth is", auth);
