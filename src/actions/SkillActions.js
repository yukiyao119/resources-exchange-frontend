// fetch all the skills 
export const loadSkills = skillsArr => ({
  type: "LOAD_SKILLS",
  payload: skillsArr
})

export const loadAllSkills = () => dispatch => {
  const token = localStorage.token
  if (token) {
    fetch("http://localhost:3000/skills", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
        // Authorization: `Bearer ${token}`
      }
    })
    .then(resp => resp.json())
    .then(data => {
      // debugger
      dispatch(loadSkills(data))
    })
  }
}


// make a new user_skill, add a skill to a logged in user
export const addSkill = skillObj => ({
  type: "ADD_SKILL",
  payload: skillObj
})

// post to /user_skills join model
export const addASkill = ( userSkillObj ) => dispatch => {
  const object = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify( userSkillObj )
    }
  fetch("http://localhost:3000/user_skills", object)
    .then(res => res.json())
    .then(data => {
      // console.log("backend created new userskill,", data.user_skill)
      dispatch(addSkill(data.user_skill)) })
}

// choose a skill, needed for create exchange
export const selectSkill = skillObj => ({
  type: "SELECT_SKILL",
  payload: skillObj
})

export const selectASkill = (skillObj) => dispatch => {
  dispatch(selectSkill(skillObj))
}