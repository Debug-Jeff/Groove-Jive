import SpotifyWebApi from 'spotify-web-api-node'

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
})

export const getRecommendations = async (accessToken: string, mood: string) => {
  spotifyApi.setAccessToken(accessToken)

  const moodToSeedTracks: { [key: string]: string[] } = {
    Happy: ['4NHQUGzhtTLFvgF5SZesLK', '0pqnGHJpmpxLKifKRmU6WP'],
    Sad: ['4RCWB3V8V0dignt99LZ8vH', '5Tzpo3PEBPPaHlZZtbYsKD'],
    Energetic: ['7CZyCXKG6d5ALeq41sLzbw', '5Z01UMMf7V1o0MzF86s6WJ'],
    Relaxed: ['0WjYNDQ3Szy8OuONnwzHZy', '3USxtqRwSYz57Ewm6wWRMp'],
    Focused: ['2gMXnyrvIjhVBUZwvLZDMP', '2fuCquhmrzHpu5xcA1ci9x'],
    Romantic: ['4VUwkH455At9kENOfzTqmF', '0tgVpDi06FyKpA1z0VMD4v'],
  }

  const seedTracks = moodToSeedTracks[mood] || moodToSeedTracks['Happy']

  const recommendations = await spotifyApi.getRecommendations({
    seed_tracks: seedTracks,
    limit: 20,
  })

  return recommendations.body.tracks
}

