module.exports = {

  // Props
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  createdAt: Date,
  updatedAt: Date,

  // Relationships
  memberships: [ Array('membership'), 'user' ],
};