// Import the model exported in the Skill.js model file
import { Skill } from '../models/skill.js'


function index(req, res) {
  Skill.find({}).then(skills => {
    res.render('skills/index', {
      skills: skills,
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

function newSkill(req, res) {
  res.render('skills/new')
}

function create(req, res) {
  console.log(req.body)
  req.body.learned = false
  Skill.create(req.body).then(skill => {
    res.redirect('/skills')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/skills')
  })
}

export {
  index,
  newSkill as new,
  create,
}