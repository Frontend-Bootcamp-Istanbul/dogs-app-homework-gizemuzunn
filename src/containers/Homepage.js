import React from 'react';
import dogs from "../dogsdata";
import { Dog } from "../components";
import axios from "axios";

const apiHost = "https://5ea56a3e2d86f00016b45cdd.mockapi.io";

class Homepage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            favorites: [],
            loadingFavorites: false,
            loadingId: null
        }
    }

    componentDidMount() {
        

        this.setState({
            loadingFavorites: true
        }, () => {
            axios.get('${apiHost}/favorites').then((result) => {
                this.setState({
                    favorites: result.data,
                    loadingFavorites: false
                })
            }).catch((err) => {
                console.log("Axios err", err);
                this.setState(({
                    loadingFavorites: false
                }))
            })
        })
    }

    toggle = (dogId) => {
        this.setState({ loadingId: dogId })
        const foundDog = this.state.favorites.find((favorite) => favorite.dogId === dogId);
        if (foundDog) {
            axios.delete('${apiHost}/favorites/${foundDog.id}').then((result) => {
                this.setState(({
                    favorites: this.state.favorites.filter((dog) => dog.dogId !== dogId),
                    loadingId: null
                }))
            }).catch((err) => {
                console.log(err);
                this.setState(({
                    loadingId: null
                }))
            });
        } else {
            
            axios.post('${apiHost}/favorites', {
                dogId
            }).then((result) => {
                const eklenenFavori = result.data; 
                this.setState({
                    favorites: [...this.state.favorites, eklenenFavori],
                    loadingId: null
                })
            }).catch((err) => {
                console.log(err);
                this.setState(({
                    loadingId: null
                }))
            })
        }
    }

    getStatus = (dogId) => {
        const foundDog = this.state.favorites.find((favorite) => favorite.dogId === dogId);
        return foundDog;
    }

    render() {
        const { loadingFavorites, loadingId } = this.state
        if (loadingFavorites) {
            return <div>
                <h1>Sayfa Yukleniyor...</h1>
            </div>
        }
        return (
            <div>
                <ul style={styles.listLayout}>
                    {
                        dogs.map((dog) => {
                            return <Dog
                                key={dog.id}
                                toggle={this.toggle}
                                id={dog.id}
                                getStatus={this.getStatus}
                                loadingId={loadingId}
                                {...dog} />
                        })
                    }
                </ul>
            </div>
        );
    }
}

const styles = {
    listLayout: {
        display: "flex",
        flexWrap: "wrap",
        paddingInlineStart: "20px"
    }
}

export default Homepage;