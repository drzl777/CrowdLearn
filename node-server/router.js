const Authentication = require('./controllers/authentication')
const passportService = require('./services/passport')
const passport = require('passport')
const CourseController = require('./controllers/courses')
const LocationController = require('./controllers/locations')
const VoteController = require('./controllers/votes')
const TopicController = require('./controllers/topics')

const requireAuth = passport.authenticate('jwt', { session: false })
const requireSignin = passport.authenticate('local', { session: false })

module.exports = function (app) {
  app.get('/', requireAuth, function (req, res) {
    res.send({ message: 'Token is valid' })
  })
  app.post('/api/v1/signin', requireSignin, Authentication.signin)
  app.post('/api/v1/signup', Authentication.signup)
  app.get('/api/v1/courses', CourseController.fetchCourses)
  app.get('/api/v1/topics', TopicController.fetchTopics)
  app.get('/api/v1/topics/:topicId/courses', CourseController.fetchTopicCourses)
  app.post('/api/v1/topics/:topicId/courses', CourseController.createCourse)
  app.post('/api/v1/topics', TopicController.createTopic)
  // app.post('/api/v1/courses', CourseController.createCourse)
  app.post('/api/v1/courses/:courseId/locations', LocationController.addLocation)
  app.post('/api/v1/courses/:courseId/locations/:locationId/approve', LocationController.toggleApproveLocation)
  app.post('/api/v1/courses/:courseId/locations/:locationId/votes', VoteController.voteForLocation)
  app.patch('/api/v1/courses/:courseId/locations/:locationId/votes/:voteId', VoteController.updateVote)
  app.delete('/api/v1/courses/:courseId/locations/:locationId/votes/:voteId', VoteController.removeVote)
  app.post('/api/v1/locations', CourseController.addLocation)// ???
}
// create prefix in index app.use('/api/v1', apiRoutes)
