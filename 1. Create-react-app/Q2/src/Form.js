// Complete the Form Component and export it
import { name, email } from "./HomePage";
const Form = () => (
  <>
    <div>
      <form>
        {/* Create a h3, 2 inputs and 1 button here */}
        <h3>Login Page</h3>
        <div style={{ marginBottom: "18px" }}>
          <input type="text" name="name" value={name} id="name" />
        </div>
        <input type="email" name="email" value={email} id="email" />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  </>
);
export default Form;
