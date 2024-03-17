import React, { useContext, useEffect, useState } from "react";

// import axios from "../api/axios";
// import { RequestContext } from "./RequestContext";
import {
  EmailAuthProvider,
  User as FirebaseUser,
  createUserWithEmailAndPassword,
  reauthenticateWithCredential,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { apiUrl } from "../utilities/fetchPath";
import { AuthContextType, UserInfoType } from "../Tstypes/types";
import axios from "axios";
import { auth } from "../auth/firebase";

const AuthContext = React.createContext<AuthContextType | any>("");

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: any }) {
  const [currentUser, setCurrentUser] = useState<FirebaseUser>();
  const [token, setToken] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState<UserInfoType>();

  const [celeb, setCeleb] = useState<boolean | undefined>();

  // const [requests, setRequests] = useState();

  async function signup(
    email: any,
    password: any,
    username: string
  ): Promise<string> {
    try {
      // Wait for createUserWithEmailAndPassword to complete
      const userCredential: any = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Obtain the user's UID
      const user: any = userCredential.user;

      await updateProfile(user, {
        displayName: username,
      });

      //return user, will use this for profile pic upload function below
      return userCredential.user;
    } catch (error: any) {
      // Handle any errors that might occur during the signup process
      console.error("Signup error:", error.message);
      throw error; // Rethrow the error to let the caller handle it
    }
  }

  async function uploadProfilePic(imgurl: string, user: any) {
    await updateProfile(user, {
      photoURL: imgurl,
    });
  }

  function login(email: any, password: any) {
    console.log("inside login");
    return signInWithEmailAndPassword(auth, email, password);
    // signInWithCustomToken;
  }

  function logout() {
    try {
      return auth.signOut();
    } catch (error) {
      console.log(error);
    }
  }

  async function reauthenticateUser(password: string) {
    const user = auth.currentUser;

    if (user && user.email) {
      const credential = EmailAuthProvider.credential(user.email, password);
      console.log("bewlo creds: ", user.email);
      try {
        await reauthenticateWithCredential(user, credential);
        console.log("User reauthenticated successfully.");
        return {
          state: true,
          message: "User credentials updated successfully",
        };
      } catch (error: any) {
        console.error("Error reauthenticating user:", error.message);
        return { state: false, message: error.message };
        // throw error;
      }
    } else {
      console.error("No user is currently signed in.");
    }
  }

  //reset password
  async function resetPassword(email: string) {
    try {
      // await sendPasswordResetEmail(auth, email);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    console.log("useEffectXXa");
    const unsubscribe = auth.onAuthStateChanged(
      async (
        user: any //this works
      ) => {
        console.log("user auth: ", auth.currentUser);
        setCurrentUser(user);

        // console.log("userXXX: ", user);

        if (user) {
          console.log("we're in user");
          try {
            const response = await axios.get(`${apiUrl}/user/status`, {
              params: { uid: user.uid },
            });

            console.log("celebStatus: ", response);

            let req;

            let fullUserInfo;

            if (response.data) {
              console.log("dashboard");
              req = await axios.get(`${apiUrl}/dashboard`, {
                params: { data: user.uid },
              });

              fullUserInfo = await axios.get(`${apiUrl}/celebs/${user.uid}`);
              console.log("myFULL: ", fullUserInfo);
            } else {
              console.log("here");
              req = await axios.get(`${apiUrl}/request/fanrequests`, {
                params: { data: user.uid },
              });

              // const userInfo = await axios.get(`${apiUrl}/fan`, {
              //   params: { uid: user.uid },
              // });

              fullUserInfo = await axios.get(`${apiUrl}/fan/${user.uid}`);
              console.log("fullAuth: ", fullUserInfo.data);
            }

            setRequests(req.data);
            setCeleb(response.data);
            setUserInfo(fullUserInfo.data);
          } catch (error) {
            console.log("second try");
            console.error(error);
          }
          user.getIdToken().then((token: any) => {
            // 'token' contains the session token
            setToken(token);
          });
        } else {
          console.log("not current user");
        }

        setLoading(false);
      }
    );

    return unsubscribe;
  }, []);

  const value: AuthContextType = {
    currentUser,
    resetPassword,
    token,
    signup,
    login,
    logout,
    reauthenticateUser,
    uploadProfilePic,
    celeb,
    userInfo,
  };

  // this is for the Request Context
  const [requests, setRequests] = useState();

  // this holds all the user's requests, dispalyed when user clicks requests tab
  const requestValues: any = {
    requests,
    setRequests,
    name: "muath",
  };
  return (
    <>
      {/* <RequestContext.Provider value={requestValues}> */}
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
      {/* </RequestContext.Provider> */}
    </>
  );
}
