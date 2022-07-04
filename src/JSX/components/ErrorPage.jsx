const ErrorPage = ({ code=null, errMsg = "" }) => {
  var message = errMsg;
  
  switch (code) {
    case null:
      break;
    // return <ErrorPage code={null} errMsg="try" />;

    case 404:
      message =
        "This subreddit do not exist. Try finding another..My favourite is 'meme':)";
      break;

    default:
      message = "An error occured.Try refreshing the page. code:"+code;
  }
  return <h2>{message}</h2>;
};

export default ErrorPage;
