import Button from "./button";
import Form from "./Form";
import TextInput from "./TextInput";
// import { Link } from "react-router-dom";

export default function LoginForm() {
  return (
    <Form style={{ height: "330px" }}>
      <TextInput
        type="text"
        placeholder="Enter email"
        icon="alternate_email"
        required
        // value={email}
      />

      <TextInput
        type="password"
        placeholder="Enter password"
        icon="lock"
        required
        // value={password}
      />
      {/* disabled={loading} */}
      <Button type="submit">
        <span>Submit Now</span>
      </Button>
      {/* <Link to="/signup">Signup</Link> */}
      <div className="info">Don't have an account? instead.</div>
    </Form>
  );
}
