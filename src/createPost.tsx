import { Devvit,useWebView,useState } from "@devvit/public-api";
import { Preview } from "./components/Preview.js";
Devvit.addMenuItem({
  label:"Create Cosmic Twist Post",
  location:'subreddit',
  forUserType:'moderator',
  onPress:async (_event,context) => {
    const { reddit, ui } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    const user = await reddit.getCurrentUser();
    const title = user ? `Cosmic Twist -u/${user.username}` : 'Cosmic Twist';
    const post = await reddit.submitPost({
      title,
      subredditName:subreddit.name,
      preview:<Preview/>
    });
    ui.showToast({ text:'Created post!'})
    ui.navigateTo(post.url)
  }
});