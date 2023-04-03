import Button from "../Button";
import { H1 } from "../Heading";

import "./Home.css";

export default function Home() {
  return (
    <section className="section">
      <H1 />
      <h2>Lorem ipsum dolor sit amet.</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
        corrupti ex magnam blanditiis enim nisi impedit ea quae quod! Quidem
        officia rerum temporibus ipsum! Eligendi necessitatibus perspiciatis
        expedita distinctio sed.
      </p>
      <Button />
      <img
        src="https://images.unsplash.com/photo-1587502537685-c9a38045c71a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt=""
      />
    </section>
  );
}
