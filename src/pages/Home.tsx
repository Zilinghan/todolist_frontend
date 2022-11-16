import { Outlet, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Accordion from 'react-bootstrap/Accordion';
import React, { useEffect } from 'react';
import { useState } from 'react';

const groupNames: string[] = ["Individual"];

function Home() {
    return (
      <>
        <h1>Home</h1>
        <div>
          <Navigator />
        </div>
        <div>
          <GroupList />
        </div>
      </>
    );
  };
  
// the group list on the left
function GroupList() {
  const [componentList, setComponentList] = useState([]);

  useEffect(() => {
    __updateComponent();
  }, [])  // TODO: add dependency 


  function __updateComponent() {
    let newComponentList: any = [];
    for (let i in groupNames) {
      newComponentList.push(GroupItem(groupNames[i]));
    }
    setComponentList(newComponentList);
  }

  return (
    <>
      <Accordion>
        {componentList}
      </Accordion>
      <Outlet />
    </>
  )
}

// each group item in the group list
function GroupItem(groupName : string) {
  return (
    <>
      <Accordion.Item eventKey={groupName}>
        <Accordion.Header>{groupName}</Accordion.Header>
        <Accordion.Body>
          tasks
        </Accordion.Body>
      </Accordion.Item>
    </>
  )
}

// navigate to monthly view or daily view
function Navigator() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/monthly">Monthly</Nav.Link>
            <Nav.Link href="/daily">Daily</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      

      <Outlet />
    </>
  )
}


export default Home;