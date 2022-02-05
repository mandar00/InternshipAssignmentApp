import { NavLink } from "react-router-dom";

const Home = ({dataList}) => {
 
  return (
    <>
      <main role="main" className="homeMainContainer">
        <section className="homeContentContainer">
          <ul>
            {dataList.map((val) => {
                const NavTo=val.name.replaceAll(" ","_")
              return (
                <NavLink to={`/page/${NavTo}`} key={val.id}>
                  <h1>{val.name}</h1>
                  <h4 style={{color:`${val.color}`}} >{val.tag}</h4>
                </NavLink>
              );
            })}
          </ul>
        </section>
      </main>
    </>
  );
};
export default Home;
