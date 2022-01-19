import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';

import useStyles from './styles';
import { GoogleMap } from '@react-google-maps/api';
const Map = () => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)');

    const coordinates = { lat: 39.71738, lng: -96.96472 };
    return (
        <div className = {classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys = {{ key: 'AIzaSyAc17-lDbQbtYXKcvyANqYth_esPCbjk3g'}}
                defaultCenter = {coordinates}
                center = {coordinates}
                defaultZoom = {4}
                margin = {[50,50,50,50]}
                options = {''}
                onChange = {''}
                onChildClick = {''}
            >

            </GoogleMapReact>
        </div>
        );
}

export default Map;