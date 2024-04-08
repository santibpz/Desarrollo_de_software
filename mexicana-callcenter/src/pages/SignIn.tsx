import { FunctionComponent, useState } from "react";
import {
  CognitoIdentityProviderClient,
  InitiateAuthCommand,
  AuthFlowType,
} from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
import { jwtDecode } from 'jwt-decode';
import useCustomToast from "../components/notificationComponent";
import { useAuth, CustomTokenPayload } from "../components/authContext";
import { useNavigate } from "react-router-dom";

const SignIn: FunctionComponent = () => {
  const [emailTextValue, setEmailTextValue] = useState("");
  const [passwordTextValue, setPasswordTextValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { showError } = useCustomToast();
  const { showSuccess } = useCustomToast();
  const { setJobLevel } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const client = new CognitoIdentityProviderClient({ region: "us-east-1" });

    const input = {
      // InitiateAuthRequest
      AuthFlow: AuthFlowType.USER_PASSWORD_AUTH, // required
      AuthParameters: {
        // AuthParametersType
        USERNAME: emailTextValue,
        PASSWORD: passwordTextValue,
      },
      ClientId: "7n1pkdlieo0jnsl5uht0vpd5pj", // required
    };
    const command = new InitiateAuthCommand(input);

    try {
      const response = await client.send(command);
      const { $metadata } = response;
      const { AuthenticationResult } = response;

      // check if user was successfully logged in
      if ($metadata.httpStatusCode === 200) {
        showSuccess("🎉 You are now signed in.");
        if (AuthenticationResult && AuthenticationResult.IdToken) {
          const decodedToken = jwtDecode<CustomTokenPayload>(AuthenticationResult.IdToken);
          if (decodedToken['custom:job_level']) {
            const jobLevel = decodedToken['custom:job_level'];
            
            setJobLevel(jobLevel);
            navigate("/profileTest");
          }
        }
      }      
    } catch (err) {
      // check if there was an error logging in and notify the user
      const errorMessage =
        err instanceof Error ? err.message : "An unexpected error occurred.";
      showError(`🚨 ${errorMessage}`);
    }
  }
 

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start gap-[75px] tracking-[normal] text-right text-41xl text-primary font-paragraph sm:gap-[50px] md:gap-[30px]">
      <header className="self-stretch h-[100px] relative bg-tertiary shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] hidden" />
      <div className="w-[339px] h-[73px] relative font-medium hidden max-w-full">
        Sign In
      </div>
      <div className="self-stretch bg-tertiary shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-end pt-[15px] px-[41px] pb-3 box-border max-w-full z-[2]">
        <div className="h-[100px] w-[1280px] relative bg-tertiary shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] hidden max-w-full" />
        <h1 className="m-0 h-[73px] w-[339px] relative text-inherit font-medium font-inherit inline-block shrink-0 max-w-full mq450:text-[36px] mq1050:text-[48px]">
          Sign In
        </h1>
      </div>
      <main className="self-stretch h-[700px] flex flex-row items-start justify-start pt-0 pb-[250px] pr-[0px] pl-[700px] box-border gap-[35px] max-w-full lg:pl-[250px] lg:pr-[50px] lg:box-border mq40:pl-5 mq400:pb-[10px] mq400:box-border mq750:gap-[17px] mq750:pl-[155px] mq750:pr-[26px] mq750:box-border mq1050:pb-[158px] mq1050:box-border">
      <img
          className="ml-[-829px] h-[732px] w-[794px] relative shrink-0 [debug_commit:1cbd860] max-w-[144%] z-[2] sm:ml-0 lg:mr-0"
          alt=""
          src="/sign-in-label.svg"
        />
        <div className="self-stretch w-[553px] flex flex-col items-start justify-start pt-[114px] px-0 pb-0 box-border max-w-full mq450:pt-[74px] mq450:box-border">
          <form
            onSubmit={handleLogin}
            className="m-0 self-stretch flex-1 flex flex-col items-end justify-start gap-[46px] shrink-0 [debug_commit:1cbd860] sm:gap-[30px] md:gap-[20px]"
          >
            <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[16.2px] max-w-full">
              <div className="w-[501px] flex-1 flex flex-row items-start justify-start relative max-w-full">
                <div className="h-[697px] w-[632px] absolute my-0 mx-[!important] bottom-[-453px] left-[-620px]">
                  <div className="absolute top-[126px] left-[249px] w-[85px] h-[85px]">
                  </div>
                  <img
                    className="absolute top-[0px] left-[-162px] w-[794px] h-[732px] z-[3]"
                    alt=""
                    src="/vector-2.svg"
                  />
                </div>
                <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 pr-0 pl-3 box-border max-w-full">
                  <img
                    className="h-[130px] flex-1 relative max-w-full overflow-hidden object-cover z-[4]"
                    loading="lazy" 
                    alt=""
                    src="/untitled-design-2-1@2x.png"
                  />
                </div>
              </div>
              <div className="self-stretch rounded-3xs bg-tertiary box-border flex flex-row items-start justify-start pt-4 px-[10px] pb-[10px] max-w-full border-[1px] border-solid border-marco mr-0">
                <div className="h-[44.8px] w-[553px] relative rounded-3xs bg-tertiary box-border hidden max-w-full border-[1px] border-solid border-marco" />
                <input
                  className="[border:none] [outline:none] font-paragraph text-lg bg-[transparent] h-[18px] w-[100%] relative text-marco text-left flex items-end shrink-0 p-0 z-[1]"
                  data-cy="email-input" // Added to do cypress testing
                  placeholder="Email"
                  type="text"
                  value={emailTextValue}
                  onChange={(event) => setEmailTextValue(event.target.value)}
                />
              </div>
              <div className="self-stretch rounded-3xs bg-tertiary box-border flex flex-row items-start justify-start pt-[15.800000000000182px] px-[19px] pb-[11px] max-w-full border-[1px] border-solid border-marco relative">
                  <input
                      className="[border:none] [outline:none] font-paragraph text-lg bg-[transparent] h-[18px] w-[calc(100% - 10%)] relative text-marco text-left flex items-end shrink-0 p-0 z-[1] "
                      data-cy="password-input" // Added to do cypress testing
                      placeholder="Password"
                      type={showPassword ? "text" : "password"}
                      value={passwordTextValue}
                      onChange={(event) => setPasswordTextValue(event.target.value)}
                  />
                  <img
                      className="cursor-pointer absolute top-1/2 right-2 transform -translate-y-1/2 h-[20px] w-[20px]"
                      src="/eye_password.png"
                      alt="toggle password visibility"
                      onClick={togglePasswordVisibility}
                  />
              </div>
            </div>
            <div className="w-[508px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
              <button
               data-cy="submit-button" // Added to do cypress testing
                type="submit"
                className="cursor-pointer [border:none] py-2.5 px-5 bg-primary w-[300px] rounded-3xs flex flex-row items-start justify-center box-border whitespace-nowrap hover:bg-slategray"
              >
                <div className="h-[22px] w-[58px] relative text-lg font-paragraph text-tertiary text-center inline-block min-w-[58px]">
                  Sign in
                </div>
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}



export default SignIn;
