import { Outlet } from "react-router-dom";

const Nomad = () => {
  return (
    <div>
      <h1>리액트 10주 스터디용 영화메뉴</h1>
      <Outlet />
    </div>
  );
};
export default Nomad;
