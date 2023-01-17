const PostRepository = require('../repositories/posts.repository.js');

class PostService {
  postRepository = new PostRepository();

  findAllPost = async (userNo) => {
    const result = await this.postRepository.findAllPost(userNo);
    result.sort((a, b) => {
      return b.createdAt - a.createdAt;
    });
    
    const allPosts = JSON.parse(JSON.stringify(result)).map((post)=>{

      return {
        "id": post.postId,
        "postId":post.postId,
        "userNo": post.userNo,
        "nickname": post.User.nickname,
        "image": post.image,
        "inputAnswer": post.inputAnswer,
        "difficult": post.difficult,
        "createdAt": post.createdAt,
        "isAnswered": Boolean(post.Answers.length)
        }
      })
    
    return allPosts;
  };

  getPostById = async (postId) => {
       
    return await this.postRepository.findPostById(postId);
  };

  createPost = async (postInputArgs) => {
    return await this.postRepository.createPost(postInputArgs);
  };
}

module.exports = PostService;
