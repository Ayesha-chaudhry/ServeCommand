// AuthService.ts
"use client"

import { CognitoIdentityServiceProvider } from "aws-sdk";
import { Contextvalue } from "@/app/context/context";


interface Config {
  region: string;
  userPoolId: string;
  clientId: string;
}

const config: Config = {
  region: "us-east-1",
  userPoolId: "us-east-1_DIwOdU2TN",
  clientId: "1727702mdj4021tmc218s3efab",
};

const cognito = new CognitoIdentityServiceProvider({ region: config.region });

export const signIn = async (username: string, password: string): Promise<any> => {
  
  
  const params: CognitoIdentityServiceProvider.InitiateAuthRequest = {
    AuthFlow: "USER_PASSWORD_AUTH",
    ClientId: config.clientId,
    AuthParameters: {
      USERNAME: username,
      PASSWORD: password,
    },
  };
  try {
    const data = await cognito.initiateAuth(params).promise();
    console.log("data :", data.ChallengeName)
    if(data.ChallengeName == "NEW_PASSWORD_REQUIRED"){
      
      console.log("User needs to set a new password")
      return data.ChallengeName
    }
    else{
      return data.AuthenticationResult?.AccessToken || "";
    }

    
  } catch (error) {
    throw error;
  }
};

export const changePassword = async (
  username: string,
  oldPassword: string,
  newPassword: string
): Promise<void> => {
  const params: CognitoIdentityServiceProvider.ChangePasswordRequest = {
    AccessToken: await signIn(username, oldPassword),
    PreviousPassword: oldPassword,
    ProposedPassword: newPassword,
  };

  try {
    await cognito.changePassword(params).promise();
  } catch (error) {
    throw error;
  }
};

export const forgotPassword = async (username: string): Promise<void> => {
  const params: CognitoIdentityServiceProvider.ForgotPasswordRequest = {
    ClientId: config.clientId,
    Username: username,
  };

  try {
    await cognito.forgotPassword(params).promise();
  } catch (error) {
    throw error;
  }
};

