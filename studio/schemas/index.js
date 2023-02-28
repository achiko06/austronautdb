import account from './account'
import blockContent from './blockContent'
import person from './person'
import user from './user'
import verificationToken from './verification-token'

export const schemaTypes = [
  // Document types
  person,
  user,
  account,
  verificationToken,

  // Other types
  blockContent,
]
