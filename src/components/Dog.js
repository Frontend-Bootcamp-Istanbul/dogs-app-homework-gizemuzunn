import React from 'react';
import { Card, CardTitle } from 'reactstrap'
import { FavoriteActions } from "../components";
import { Link } from "react-router-dom";

const Dog = ({ id, name, toggle, getStatus, loadingId }) => {
    return <li key={id} style={styles.listItem}>
        <Card style={styles.card}>
            <Link to={`/detail/${id}`} style={styles.link}>
                <CardTitle style={styles.cardTitle}>{name}</CardTitle>
            </Link>
            <FavoriteActions
                id={id}
                toggle={toggle}
                getStatus={getStatus}
                loadingId={loadingId}
            />
        </Card >
    </li >
};



const styles = {
    listItem: {
        margin: "1rem",
        listStyle: "none",
    },
    link: {
        margin: "5px",
        textDecoration: 'none',
        textAlign: "center"
    },
    card: {
        alignItems: 'center',
        justifyContent: 'center',
        marginRight:"200px",
        width: "13rem",
        height: "15rem",
        
    },
    cardTitle: {
        padding: "8px",
        marginBottom: '3rem',
    }
}

Dog.propTypes ={
    id: PropTypes.number,
    name: PropTypes.string,
    toggle: PropTypes.bool,
    getStatus: PropTypes.object,
}

Dog.defaultProps = {
    id: 41151,
    name: "Friday",
    toggle: true,
    getStatus: {
        "name": "Friday",
        "description": "You can fill out an adoption application online on our official website.\n\nKeep checking back for upcoming events I will...",
        "image": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/46642966/1/?bust=1574355324&width=600",
        "age": "Adult",
        "published_at": "2019-11-21T16:45:19+0000",
        "breed": "Golden Retriever",
        "breedSlug": "golden-retriever",
        "id": "41151"
    }
}

export default Dog;