import AppLayout from "./components/AppLayout/AppLayout";
import Avatar from "./components/Avatar/Avatar";
import Heading from "./components/Heading/Heading";
import ItemList from "./components/ItemList/ItemList";
import Title from "./components/Title/Title";

export default function App() {
  return (
    <div className="box">
      {/* <Avatar
        name="Luu"
        imgUrl="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        size={100}
      />
      <Avatar
        name="Trang"
        imgUrl="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80"
        size={50}
      />
      <Avatar size={300} />
      <Heading name="Hoang Anh" age="50" course="Python" color="blue" />
      <Heading name="Vinh" age="10" course="Javascript" color="pink" />
      <Heading name="Son" age="15" course="Java" color="green" />
      <ItemList />

      <Title>Common Debugging Issues</Title>
      <Title>Modular Code</Title>
      <Title>Naming Conventions</Title>
      <Title>
        Common Debugging{" "}
        <span
          style={{
            color: "red",
          }}
        >
          Issues
        </span>
      </Title>
      <div>
        <h3>Lorem ipsum dolor sit amet.</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          qui tenetur natus facilis a ad accusantium nostrum expedita quibusdam
          corporis.
        </p>
      </div> */}
      <AppLayout>
        {/* <div>Home</div> */}
        <div>About</div>
      </AppLayout>
    </div>
  );
}
