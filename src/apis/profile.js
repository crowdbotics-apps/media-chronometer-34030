import APIKit from "../shared/APIKit"

getProfileData = async () => {
  var profile = await APIKit.get("/accounts/profile/")
  return profile.data
}

export default getProfileData
