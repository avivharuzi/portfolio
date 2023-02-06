import classes from './app.module.scss';
import About from './components/about';
import Skills from './components/skils';
import SocialLinks from './components/social-links';

const App = () => {
  return (
    <div className={classes.App}>
      <div className="text-center">
        <figure className="pt-5 mb-4">
          <img
            className={classes.ProfileImage + ' rounded-circle'}
            alt="profile"
            width="200"
            height="200"
            src="/assets/images/profile.jpeg"
          />
        </figure>

        <h1 className="m-0 mb-3">Hello, I'm Aviv Haruzi</h1>
        <h2 className="m-0">I'm a full-stack developer</h2>

        <div className="mt-4 d-flex justify-content-center align-items-center">
          <p className="p-0 m-0">
            <i className="fa fa-map-marker mr-2"></i>Ramat Gan, Israel
            <img
              className="ml-2"
              width="25"
              src="/assets/images/isr.svg"
              alt="Israel"
            />
          </p>
        </div>

        <div className="mt-5">
          <About />
        </div>

        <div className="mt-5">
          <SocialLinks />
        </div>

        <div className="mt-5">
          <Skills />
          <div className="mt-3">
            <p>and many more...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
