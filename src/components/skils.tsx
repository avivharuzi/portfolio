import classes from './skills.module.scss';

const Skills = () => {
  const skills: string[] = [
    'HTML',
    'CSS',
    'SASS',
    'JAVASCRIPT',
    'TYPESCRIPT',
    'MYSQL',
    'PHP',
    'NODE.JS',
    'MONGODB',
    'ANGULAR',
    'REACT.JS',
    'VUE.JS',
    'GIT',
    'NGINX',
    'APACHE',
    'DOCKER',
    'AMAZON_WEB_SERVICES',
  ];

  return (
    <div className="d-flex align-items-center justify-content-center flex-wrap">
      {skills.map((skill, index) => {
        return (
          <div
            className={classes.SkillItem + ' p-2 m-3 rounded-pill'}
            key={index}
          >
            <span>#{skill}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
