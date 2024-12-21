import React from "react";
import { Container, Card } from "reactstrap";

function Index() {
  return (
    <>
      <Container>
        <Card className="mt-5 p-5">
          <h1 className="display-4">Shayyanne Dominiq Marasigan</h1>
          <address>
            <a href="mailto:email@address.com">shayyannelee@gmail.com</a>
            <br />
            <a href="tel:+635552368">(+63) 927-081-2643</a>
          </address>
        </Card>
      </Container>
    </>
  );
}

export default Index;
