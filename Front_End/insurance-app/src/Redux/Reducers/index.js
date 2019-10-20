import { combineReducers } from "redux";

import * as Gig from "./Gigs";
import { getPackages } from "./Insurance";
import { Login, Signup } from "./Auth";
import { FetchProfileData, profileData, getAllProfileData } from "./profile";

export default combineReducers({
  Login,
  getPackages,
  getAllProfileData,
  Signup,
  createGig: Gig.createGig,
  userGigs: Gig.userGigs,
  pauseGig: Gig.pauseGig,
  loveGig: Gig.loveGig,
  getOneGig: Gig.getOneGig,
  getBestGigsInfo: Gig.getBestGigsInfo,
  FetchProfileData,
  profileData
});
