// Import the model exported in the Skill.js model file
import { Skill } from '../models/skill.js'


function index(req, res) {
  Skill.find({}).then(skills => {
    res.render('skills/index', {
      skills: skills,
      time: req.time
    })
  })
  .catch(error => {
    console.log(`💥`, error)
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
    console.log(`💥`, error)
    res.redirect('/skills')
  })
}

function show(req, res) {
  Skill.findById(req.params.skillId).then(skill => {
    res.render('skills/show', {
      skill: skill
    })
  })
  .catch(error => {
    console.log(`💥`, error)
    res.redirect('/skills')
  })
}

function deleteSkill(req, res) {
  Skill.findByIdAndDelete(req.params.skillId).then(skill => {
    res.redirect('/skills')
  })
  .catch(error => {
    console.log(`💥`, error)
    res.redirect('/skills')
  })
}

function edit(req, res) {
  Skill.findById(req.params.skillId).then(skill => {
    res.render('skills/edit', {
      skill: skill
    })
  })
  .catch(error => {
    console.log(`💥`, error)
    res.redirect('/')
  })
}

function update(req, res) {
  req.body.learned = !!req.body.learned
  Skill.findByIdAndUpdate(req.params.skillId, req.body, {new: true}).then(skill => {
    res.redirect(`/skills/${skill._id}`)
  })
  .catch(error => {
    console.log(`💥`, error)
    res.redirect('/')
  })
}

export {
  index,
  show,
  newSkill as new,
  create,
  deleteSkill as delete,
  edit,
  update,
}