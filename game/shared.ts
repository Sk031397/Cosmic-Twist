
export type Page = 'home' | 'game' | 'home-to-play' | 'about'

export type WebviewToBlockMessage = 
| { type: 'INIT' }
| { type: 'START_GAME' }
| { type: 'SUBMIT_SOLUTION'; payload: { solution: string[] } }
| { type: 'POST_GAME' }
export type BlocksToWebviewMessage =
  | {
      type: 'INIT_RESPONSE'
      payload: {
        postId: string
      }
    }
  | {
      type: 'GET_TOTAL_ATTEMPTS_RESPONSE'
      payload: {
        totalAttempts: number
      }
    }
  | {
      type: 'POST_GAME_RESPONSE'
      payload: {
        allPlayerStats: {
          [key: string]: number
        }
        totalPlayers: number
      }
    }
export type DevvitMessage = {
    type: 'devvit-message'
    data: { message: BlocksToWebviewMessage }
  }