import './createPost.js';

import { Devvit, useState, useAsync } from '@devvit/public-api';

Devvit.configure({
  redditAPI: true,
  redis: true,
  http:true
});
Devvit.addMenuItem({
  label:"Add Cosmic Twist to subreddit",
  location:'subreddit',
  forUserType:'moderator',
  onPress:async (_event,context) => {
    const { reddit, ui } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    await reddit.submitPost({
      title:'',
      subredditName:subreddit.name,
      preview:(
        <vstack height={"100%"} width={"100%"} alignment='middle center'>
          <text size='large'>Loading Game...</text>
        </vstack>
      )
    });
    ui.showToast({ text:'Created post!'})
  }
});
// Add a post type defintion
Devvit.addCustomPostType({
  name:'Cosmic Twist',
  height:'tall',
  render:(_context)=>{}
})
export default Devvit;
