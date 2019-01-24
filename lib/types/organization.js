module.exports = {

  // Props
  name: String,
  type: String,
  code: String,
  logoUrl: String,
  createdAt: Date,
  updatedAt: Date,

  // Relationships
  memberships: [ Array('membership'), 'organization' ],
};
