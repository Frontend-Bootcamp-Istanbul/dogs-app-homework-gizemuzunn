import React from 'react';
import FavoriteActions from "./FavoriteActions";
import axios from 'axios';
import axios from '../axios';
import {Card,CardBody,Row,CardColumns,Button} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './bootstrap/dist/css/bootstrap.min.css';

const Dog = ({id, name, toggle, getStatus}) => {
    return <li key={id} style={{
        margin: "15px"
    }}>  <Card key={id} class ="card"style="width: 18rem;" >
        <CardBody class="card-body"><Row>
        <h5 class="card-title">Dogs Detail</h5>
        <h3>Cins: {name}</h3>
        <h3>Yaş: {age}</h3>
        <h3>Renk{color}</h3>

        <p class="card-text">This part includes the proporties of dogs and it gives informations about dogs to us</p>
        </Row>
        <Row>
            <Button button type="button" class="btn btn-outline-danger">Show Details</Button>
        </Row>
        </CardBody>


    </Card>
     <span style={{
        display: "inline-block",
         marginRight: "15px"
      }}>
        {name}
        </span>
        <FavoriteActions toggle={toggle} id={id} getStatus={getStatus} disabled={disabled}/>
    </li>
};

export default Dog;