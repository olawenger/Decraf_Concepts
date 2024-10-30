import leftArrow from "../../assets/Line arrow-left.png";
import imgError from "../../assets/404.png";
const ErrorPage = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-center p-12">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-5">
          <h1 className="text-black-400 large-text text-center lg:text-start">Uh, Oh!</h1>
          <h3 className="text-black-400 text-center lg:text-start medium-text">
            It seems we encountered <br /> some tangles.
          </h3>
          <p className="text-center lg:text-start">
            We’re sorry. it looks like the page you’re looking <br /> for can’t
            be found.
          </p>
        </div>
        <div className="flex items-center justify-center lg:justify-start gap-3">
          <a
            href="/"
            className="flex items-center justify-center  border border-red-400 hover:bg-black-500 text-white py-2 px-4 transition duration-300"
          >
            <img src={leftArrow} alt="Left Arrow" className="h-6 w-6 mr-2" />
            <p className="font-medium text-red-400">Go Back</p>
          </a>
        </div>
      </div>
      <div>
        <img src={imgError} alt="" />
      </div>
    </div>
  );
};

export default ErrorPage;
