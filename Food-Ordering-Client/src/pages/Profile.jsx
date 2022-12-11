import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import pic from "../assets/images/banner.jpg";
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer";

function Profile() {
  return (
    <div>
      <Header/>
    <center>
      <Card style={{ width: "20rem", marginTop: 20 }}>
        <Card.Img variant="top" src={pic} />
        <Card.Body>
          <Card.Title>John Paul A. Maniwang</Card.Title>
          <Card.Text>
            <Table striped bordered hover size="sm">
              <tbody>
                <tr>
                  <th>Full Name: </th>
                  <td> John Paul Maniwang</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>jpskiemaniwang@gmail.com</td>
                </tr>
                <tr>
                  <th>Phone Number:</th>
                  <td>0987654321</td>
                </tr>
              </tbody>
            </Table>
          </Card.Text>
          <Button variant="secondary">Edit Profile</Button>
        </Card.Body>
      </Card>
    </center>
    <Footer/>
    </div>
  );
}

export default Profile;
