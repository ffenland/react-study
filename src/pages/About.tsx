const About = () => {
  console.log(process.env.NAVER_CLIENT_ID);
  return (
    <div>
      <span>{process.env.REACT_APP_NAVER_CLIENT_SECRET}</span>
      <span>{process.env.REACT_APP_NAVER_CLIENT_ID}</span>
    </div>
  );
};

export default About;
