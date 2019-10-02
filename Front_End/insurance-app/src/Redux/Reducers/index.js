import { combineReducers } from "redux";

import * as Gig from "./Gigs";
import { Login, Signup } from "./Auth";
import { FetchProfileData, profileData } from "./profile";

export default combineReducers({
  Login,
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
