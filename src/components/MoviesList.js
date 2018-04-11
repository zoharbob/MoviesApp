import React from 'react';
import {View, Button, Text, ScrollView, Image, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { getHttpResponse } from "../actions/index"
import MovieDetail from './MovieDetail';
import axios from 'axios';
import { Dialog } from 'react-native-simple-dialogs';
import { dialogSetDataEvent } from "../actions/index"
import Genre from './Genre';

class MoviesList extends React.Component {
    constructor(props){
        super(props);
    }

    componentWillMount(){
        const {getHttpResponse} = this.props;
        axios.get('https://api.androidhive.info/json/movies.json').then(response => getHttpResponse(response.data));
    }

    renderMovies(){
        const {movies, dialogData, dialogSetDataEvent} = this.props;

        return (
            <View>

                {/*{movies.map(movie => <MovieDetail key={movie.title} movie={movie} dialogSetDataEvent={dialogSetDataEvent}/>)}*/}
                <FlatList
                    data={movies}
                    renderItem={ ({item}) => (
                        <MovieDetail key={item.key} movie={item} dialogSetDataEvent={dialogSetDataEvent}/>
                    )}
                    keyExtractor={(item, index) => index}
                />

                <Dialog
                    visible={dialogData.visibility}
                    title={dialogData.title}
                    onTouchOutside={() => dialogSetDataEvent({visibility: false})}>
                     <View style={{alignItems: 'center'}}>
                         <View style={{justifyContent: 'flex-start'}}>
                             <Text style={{marginBottom: 3}}>Release Year: {dialogData.releaseYear}</Text>
                             <Text style={{marginBottom: 3}}>Rating: {dialogData.rating}</Text>
                            <View style={{flexDirection: 'row'}}>
                                 <Text>Genre: </Text>
                                 <View style={{flexDirection: 'row'}}>
                                     { dialogData.genre === undefined ? '' : dialogData.genre.map( (genre, index) =>
                                         <Genre
                                             key={genre}
                                             genre={genre}
                                             isLast={ (dialogData.genre.length -1) === index ? '' : ','}
                                         />)}
                                </View>
                             </View>
                         </View>

                        <Image source={{uri: dialogData.image}} style={ {height: 200, width: 200, marginTop: 10, borderWidth: 0.5, borderColor: 'black'} }/>
                     </View>
                </Dialog>
            </View>
        )
    }

    render(){
        return(
            <ScrollView>
                { this.renderMovies() }
            </ScrollView>
        )
    }
}

const mapStateToProps = (state) => ({
    movies: state.movies,
    dialogData: state.dialogVisibility
})

export default connect(mapStateToProps, {getHttpResponse, dialogSetDataEvent})(MoviesList);