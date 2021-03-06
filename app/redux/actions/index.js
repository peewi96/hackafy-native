import {
  handleAuthWithFirebase,
  onAuthChange,
  handleLogout,
} from './actionCreators/authentication';
import { fetchPosts } from './actionCreators/fetchPosts';
import { likePost, unlikePost } from './actionCreators/likePost';
import { setFooterTab } from './actionCreators/activeFooterTab';
import { fetchNotifications } from './actionCreators/fetchNotifications';

export {
  handleAuthWithFirebase,
  onAuthChange,
  handleLogout,
  fetchPosts,
  likePost,
  unlikePost,
  setFooterTab,
  fetchNotifications,
};
