import * as admin from 'firebase-admin'
import { logger } from 'firebase-functions'
import { onDocumentCreated } from 'firebase-functions/v2/firestore'
import { onCall, onRequest } from 'firebase-functions/v2/https'

// Initialize Firebase Admin SDK
admin.initializeApp()

// Example HTTP function
export const helloWorld = onRequest((_request, response) => {
  response.json({
    message: 'Hello from Firebase Functions!',
    timestamp: new Date().toISOString(),
  })
})

// Example callable function
export const getUserData = onCall(async request => {
  // Check if user is authenticated
  if (!request.auth) {
    throw new Error('User must be authenticated')
  }

  const { uid } = request.auth

  try {
    const userRecord = await admin.auth().getUser(uid)
    return {
      uid: userRecord.uid,
      email: userRecord.email,
      displayName: userRecord.displayName,
    }
  } catch {
    throw new Error('Failed to get user data')
  }
})

// Example Firestore trigger
export const onUserCreated = onDocumentCreated(
  'users/{userId}',
  async event => {
    const userData = event.data?.data()
    const userId = event.params.userId

    // Log new user creation
    logger.info(`New user created: ${userId}`, userData)

    // Example: Send welcome email or perform other actions
    return null
  }
)
