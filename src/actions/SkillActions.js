// const deployment = 'http://localhost:3000/'
// const deployment = 'https://resources-exchange-backend.herokuapp.com/'


// fetch all the skills 
export const loadSkills = skillsArr => ({
  type: "LOAD_SKILLS",
  payload: skillsArr
})

export const loadAllSkills = () => dispatch => {
  const token = localStorage.token
  if (token) {
    fetch(`skills`, {
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
  fetch(`user_skills`, object)
    .then(res => res.json())
    .then(data => {
      // debugger
      data.errors ? window.alert(data.errors) :
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

// delete / cancel a review
export const deleteSkill = (skillObj) => ({
  type: 'DELETE_SKILL',
  payload: skillObj
})

// remove / delete a review 
export const deleteThisSkill = user_skill => dispatch => {
  // debugger
  let user_skill_id = user_skill.id
  const object = {
    method: 'DELETE'
  }
  fetch(`user_skills/${user_skill_id}`, object)
  .then(r => {
    // debugger
    dispatch(deleteSkill(user_skill))
  })
}