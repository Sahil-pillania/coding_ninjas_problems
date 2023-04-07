// Complete the HomePage Component and export it
import Form from "./Form";

export var name = "YourName";
export var email = "xyz@pqr.com";
function HomePage() {
  return (
    <div className="Homepage">
      {/* Create a h1 tag and render Form Component here */}
      <h1>HomePage</h1>
      <Form />
    </div>
  );
}
export default HomePage;
