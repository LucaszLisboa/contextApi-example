import { createContext, useEffect, useState } from "react";

export const UserLocationContext = createContext({});

export function UserLocationProvider({ children }) {
    const [userLocation, setUserLocation] = useState({
        latitude: "",
        longitude: ""
    });
    
    const getUserLocation = () => {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setUserLocation({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    });
                },
                (error) => {
                    console.error('Error getting user location:', error)
                }
            )
        } else {
            console.error("Geolocation is not supported by this browser.")
        }
    }

    useEffect(() => {
        getUserLocation()
    }, []);
    
    return (
        <UserLocationContext.Provider value={{userLocation}}>
            {children}
        </UserLocationContext.Provider>
    );
}