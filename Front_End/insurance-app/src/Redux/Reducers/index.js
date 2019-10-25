import { combineReducers } from "redux";

import * as Gig from "./Gigs";
import { getPackages, insuranceSubscripe, getInsurance } from "./Insurance";
import { Login, Signup } from "./Auth";
import { FetchProfileData, profileData, getAllProfileData } from "./profile";
import { getSellerRequests, getBuyerRequests } from "./Requests";

export default combineReducers({
  Login,
  getSellerRequests,
  getBuyerRequests,
  getPackages,
  getInsurance,
  insuranceSubscripe,
  getAllProfileData,
  Signup,
  getLatestMobileGigs: Gig.getLatestMobileGigs,
  getLatestWebGigs: Gig.getLatestWebGigs,
  getLatestDesktopGigs: Gig.getLatestDesktopGigs,
  getLatestApiGigs: Gig.getLatestApiGigs,
  getLatestSoftwareGigs: Gig.getLatestSoftwareGigs,
  getGigById: Gig.getGigById,
  createGig: Gig.createGig,
  userGigs: Gig.userGigs,
  pauseGig: Gig.pauseGig,
  loveGig: Gig.loveGig,
  getOneGig: Gig.getOneGig,
  getBestGigsInfo: Gig.getBestGigsInfo,
  FetchProfileData,
  profileData
});
