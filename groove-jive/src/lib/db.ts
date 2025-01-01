import { MongoClient } from 'mongodb'
import clientPromise from './mongodb'

let client: MongoClient
let db: any

async function init() {
  if (db) return
  try {
    client = await clientPromise
    db = await client.db()
  } catch (error) {
    throw new Error('Failed to establish connection to database')
  }
}

;(async () => {
  await init()
})()

export async function getUserById(userId: string) {
  try {
    if (!db) await init()
    const result = await db.collection('users').findOne({ _id: userId })
    return result
  } catch (error) {
    return { error: 'Failed to fetch user.' }
  }
}

export async function updateUserPreferences(userId: string, preferences: any) {
  try {
    if (!db) await init()
    const result = await db.collection('users').updateOne(
      { _id: userId },
      { $set: { preferences: preferences } },
      { upsert: true }
    )
    return result
  } catch (error) {
    return { error: 'Failed to update user preferences.' }
  }
}

export async function saveMoodRecommendation(userId: string, mood: string, songs: any[]) {
  try {
    if (!db) await init()
    const result = await db.collection('moodRecommendations').insertOne({
      userId,
      mood,
      songs,
      timestamp: new Date()
    })
    return result
  } catch (error) {
    return { error: 'Failed to save mood recommendation.' }
  }
}