import { Devvit, useState, useWebView } from '@devvit/public-api'
import { BlocksToWebviewMessage, WebviewToBlockMessage } from '../game/shared.js'
import { Preview } from './components/Preview.js'

Devvit.configure({
  redditAPI: true,
  http: true,
  redis: true,
  realtime: true,
  media: true,
})
Devvit.addMenuItem({
  label: 'Add new Cosmic Twist',
  location: 'subreddit',
  forUserType: 'moderator',
  onPress: async (_event, context) => {
    const { reddit, ui } = context
    const subreddit = await reddit.getCurrentSubreddit()

    const user = await reddit.getCurrentUser()

    const title = user ? `Cosmic Twist — u/${user.username}` : `Cosmic Twist`

    const post = await reddit.submitPost({
      title,
      subredditName: subreddit.name,
      preview: <Preview />,
    })
    ui.showToast({ text: 'Created Chronle!' })
    ui.navigateTo(post.url)
  },
})

// Add a post type definition
Devvit.addCustomPostType({
  name: 'Cosmic Twist',
  height: 'tall',
  render: (context) => {
    const { mount } = useWebView({
      url:'page.html',
      onMessage: async (event, { postMessage }) => {
        
      },
      
    })
    return (
      <vstack
        height="100%"
        width="100%"
        alignment="center middle"
        darkBackgroundColor="#1A1918"
        backgroundColor="#FFF1E6"
        gap="large"
      >
        <vstack gap="large" alignment="center middle">
          <vstack alignment="center middle" width="100%">
            <text size="large" weight="bold" darkColor="rgb(230, 230, 230)" lightColor="#1B1917">
              Date
            </text>
          </vstack>
          <button
            onPress={mount}
            appearance="primary"
          >
            Enter World
          </button>
        </vstack>
      </vstack>
    )
  },
})

export default Devvit