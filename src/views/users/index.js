import React, { useState } from 'react';
import { Container, Table, Button } from 'reactstrap';
import CreateUser from './CreateUser';

function Index() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Toggle modal visibility
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <Container>
      <div className="mt-5 text-right">
        <h1 className="mb-2">User's List</h1>
        <Button color="primary" onClick={toggleModal}>+ Add User</Button>
      </div>

      <Table className="mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Avatar</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
			<th>Actions</th>
            <th />
          </tr>
        </thead>

        <tbody>


        </tbody>
      </Table>

      <CreateUser isOpen={isModalOpen} toggle={toggleModal} />
    </Container>
  );
}

export default Index;
