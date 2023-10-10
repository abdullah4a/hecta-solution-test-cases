// Import Statements
const loginUser = require('./loginAndHomewithWait.selenium.test');
// const loginUserWithError = require('./loginAndVerifyError.selenium.test');
// const resetPassword = require('./resetPassword.selenium.test');
// const loginAndCheckMenus = require("./loginAndNoClose.selenium.test");

// Method Calls
// loginUser()
// loginUserWithError()
// resetPassword()

describe('Login and Redirection', ()=>{
    it(`Let's Login`,loginUser)
})
// describe('Login and Redirection', ()=>{
//     it('Login with service Failure',loginUserWithError)
// })
// describe('Login and Redirection', ()=>{
//     it('Reset Password',resetPassword)
// })

// describe("Login and Redirection", () => {
//   it("Login and go for App", loginAndCheckMenus);
// });
