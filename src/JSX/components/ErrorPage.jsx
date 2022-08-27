import { ReactComponent as ErrorSvg } from "../../Assets/SVG/redditrSad.svg";

const ErrorPage = ({ code = null, errMsg = "" }) => {
  var message = errMsg;

  switch (code) {
    case null:
      break;
    // return <ErrorPage code={null} errMsg="try" />;

    case 404:
    case 0:
    case 403:
      message =
        "This subreddit do not exist. \n Try finding another.\tMy favourite is 'meme':)";
      break;

    default:
      message = "An error occured. \n Try refreshing the page. \nCode:" + code;
  }
  return (
    <div className="flex  flex-col content-center justify-center">
      <ErrorSvg className=" h-64 mt-4 hover:animate-wiggle"/>
      <h2 className="whitespace-pre-line text-center m-4 ">{message}</h2>
    </div>
  );
};

export default ErrorPage;
