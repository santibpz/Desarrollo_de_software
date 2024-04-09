import { CognitoIdentityProviderClient, AdminDeleteUserCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import

const client = new CognitoIdentityProviderClient({ region: "us-east-1" , credentials: {
    accessKeyId: Cypress.env('accessKeyId'),
    secretAccessKey: Cypress.env('secretAccessKey'),
  }});


describe('Signup Tests', () => {
    beforeEach(() => {
      cy.visit('https://localhost:5173/signup'); 
    });
  
    //here goes signup tests
    it('displays success message', () => {
      cy.log("success message")
    });

    after(async () => {
        // here goes after all tests hook
       
        const input = { // AdminDeleteUserRequest
            UserPoolId: "us-east-1_4KZw7nlgg", // required
            Username: "eddie@gmail.com", // required
          };
          const command = new AdminDeleteUserCommand(input);

          try {
              const response = await client.send(command);
              console.log("response: ", response)
              cy.log("user deleted")
          } catch(err) {
            console.log("catched error: ", err)
          }


    })
  
  });