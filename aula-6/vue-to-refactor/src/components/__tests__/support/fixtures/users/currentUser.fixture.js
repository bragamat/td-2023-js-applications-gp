export const adminUser = {
  role: 'admin',
  name: 'faker',
  profile: null
}

export const guestUser = {
  role: 'guest',
  name: 'Guest No'
}

export function createUser({ type }) {
  if (!type) return

  const users = {
    adminUser, guestUser
  }

  return users[type]
}
