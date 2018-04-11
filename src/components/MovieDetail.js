import React from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
// import { dialogVisibilityEvent } from "../actions/index"

const MovieDetail = ({movie, dialogSetDataEvent}) => {

    const {title, releaseYear, image, rating, genre} = movie;

    const {containerStyle, headerContentStyle, headerTextStyle, imageCoverStyle} = styles;

    return (

        <View style={containerStyle}>

            <View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{releaseYear}</Text>
                </View>

                <View>
                    <TouchableOpacity onPress={() => dialogSetDataEvent( {visibility: true, title, image, releaseYear, rating, genre} )}>
                        <Image style={imageCoverStyle} source={ {uri: image} }  />
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    headerTextStyle: {
        fontSize: 18
    },
    imageStyle: {
        height: 50,
        width: 50,
    },
    imageContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        marginLeft: 10
    },
    imageCoverStyle: {
        height: 300,
        resizeMode: 'stretch',
        flex: 1,
        width: null
    },
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }
}

export default MovieDetail;