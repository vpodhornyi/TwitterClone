export default ({
  ping: [
    {
      method: "get",
      url: "/ping",
      controller: "pingController",
      controllerMethod: "getPong"
    }
  ],
  users: [
    {
      method: "get",
      url: "/users/test/ping",
      controller: "userController",
      controllerMethod: "getPong",
    },
    {
      method: "get",
      url: "/users",
      controller: "userController",
      controllerMethod: "getUsers"
    },
    {
      method: "post",
      url: "/users",
      controller: "userController",
      controllerMethod: "registration"
    },
    {
      method: "post",
      url: "/users/login",
      controller: "userController",
      controllerMethod: "login"
    },
    {
      method: "post",
      url: "/users/logout",
      controller: "userController",
      controllerMethod: "logout"
    },
    {
      method: "post",
      url: "/users/activate",
      controller: "userController",
      controllerMethod: "activate"
    },
    {
      method: "get",
      url: "/users/refresh",
      controller: "userController",
      controllerMethod: "refresh"
    },
  ],
  tweets: [
    {
      method: "get",
      url: "/tweets/test/ping",
      controller: "tweetController",
      controllerMethod: "getPong"
    },
    {
      method: "get",
      url: "/tweets",
      controller: "tweetController",
      controllerMethod: "getTweets"
    },
    {
      method: "post",
      url: "/tweets",
      controller: "tweetController",
      controllerMethod: "addTweet"
    },
  ]
})
